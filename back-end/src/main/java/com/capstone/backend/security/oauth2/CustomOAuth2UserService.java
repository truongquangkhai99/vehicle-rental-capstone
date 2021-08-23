package com.capstone.backend.security.oauth2;


import java.util.Optional;

import com.capstone.backend.exception.OAuth2AuthenticationProcessingException;
import com.capstone.backend.model.User;
import com.capstone.backend.model.UserDetailImpl;
import com.capstone.backend.repository.UserRepository;
import com.capstone.backend.security.oauth2.user.OAuth2UserInfo;
import com.capstone.backend.security.oauth2.user.OAuth2UserInfoFactory;
import com.capstone.backend.util.HelplerUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelplerUtils helplerUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public OAuth2User loadUser(final OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        final OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (final AuthenticationException ex) {
            throw ex;
        } catch (final Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(final OAuth2UserRequest oAuth2UserRequest, final OAuth2User oAuth2User) {
        final OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        if(ObjectUtils.isEmpty(oAuth2UserInfo.getEmail())) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        final Optional<User> userOptional = userRepository.findByEmail(oAuth2UserInfo.getEmail());
        User user;
        if(userOptional.isPresent()) {
            user = userOptional.get();
            user = updateExistingUser(user, oAuth2UserInfo);
        } else {
            user = registerNewUser(oAuth2UserRequest, oAuth2UserInfo);
        }

        return new UserDetailImpl(user, oAuth2User.getAttributes());
    }

    private User registerNewUser(final OAuth2UserRequest oAuth2UserRequest, final OAuth2UserInfo oAuth2UserInfo) {
        final User user = new User();
        String email =oAuth2UserInfo.getEmail();
        String subject = "Mật khẩu tài khoản";
        String text = "Mật khẩu mặc định của tài khoản là: ";
        user.setPassword(passwordEncoder.encode(helplerUtils.sendEmail(email, subject, text)));        
        user.setFullName(oAuth2UserInfo.getName());
        user.setEmail(email);
        user.setEmailVerified(true);
        user.setAvatarLink(oAuth2UserInfo.getImageUrl());
        return userRepository.save(user);
    }

    private User updateExistingUser(final User existingUser, final OAuth2UserInfo oAuth2UserInfo) {
        existingUser.setEmailVerified(true);
        return userRepository.save(existingUser);
    }

}
