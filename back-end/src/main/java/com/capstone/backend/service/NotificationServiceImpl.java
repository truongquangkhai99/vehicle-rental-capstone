package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.Booking;
import com.capstone.backend.model.Notification;
import com.capstone.backend.model.User;
import com.capstone.backend.repository.NotificationRepository;
import com.capstone.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationServiceImpl {
    @Autowired
    private NotificationRepository notificationRepository;
    @Autowired
    private UserRepository userRepository;

    public void sendNotification(Booking b, String type, long userId) {
        Notification n = new Notification();
        User u = userRepository.findById(userId).get();        
        n.setImgLink(u.getAvatarLink());
        n.setSender(u);        
        n.setLink("/booking?id=" + b.getId());
        switch (type) {
            case "booking":
                n.setTitle("Yêu cầu đặt xe");
                n.setContent("Bạn có một yêu cầu đặt xe từ " + b.getUser().getFullName());
                n.setReceiver(userRepository.findByMyVehiclesId(b.getVehicle().getId()));
                break;
            case "reject":
                n.setTitle("Từ chối yêu cầu đặt xe");
                n.setContent("Chủ xe đã từ chối yêu cầu đặt xe "+b.getVehicle().getModel().getName()+ "của bạn");
                n.setReceiver(b.getUser());
                break;
            case "confirm":
                n.setTitle("Chấp nhận yêu cầu đặt xe");
                n.setContent("Chủ xe đã chấp nhận yêu cầu đặt xe của bạn, hãy tiến hành đặt cọc ngay nào!");
                n.setReceiver(b.getUser());
                break;
            case "deposit":
                n.setTitle("Đặt cọc thành công");
                n.setContent("Khách đã đặt cọc thành công, bạn hãy chuẩn bị hợp đồng để bàn giao xe!");
                n.setReceiver(userRepository.findByMyVehiclesId(b.getVehicle().getId()));
                break;
            case "cancel":
                n.setTitle("Hủy thuê xe");
                n.setContent("Chủ xe đã hủy chuyến, bạn sẽ nhận lại tiền cọc của mình!");
                n.setReceiver(b.getUser());
                break;
            case "cancel2":
                n.setTitle("Người dùng lấy lại cọc");
                n.setContent("Người dùng cảm thấy không hài lòng với xe và đã lấy lại cọc của mình, chuyến đi sẽ bị hủy!");
                n.setReceiver(userRepository.findByMyVehiclesId(b.getVehicle().getId()));
                break;
            default:
                break;
        }
        notificationRepository.save(n);
    }

    public List<Notification> getNoti(long userId) {
        return notificationRepository.findByReceiverIdOrderByCreateTimeDesc(userId);
    }

    public void readNoti(long id) {
        Notification n = notificationRepository.findById(id).get();
        n.setReaded(true);
        notificationRepository.save(n);
    }

}