package com.capstone.backend.service;

import java.util.Date;
import java.util.List;

import com.capstone.backend.model.Booking;
import com.capstone.backend.model.Deposit;
import com.capstone.backend.model.DrivingLicense;
import com.capstone.backend.model.PaymentMethod;
import com.capstone.backend.model.Promotion;
import com.capstone.backend.model.Rating;
import com.capstone.backend.model.ResponseRate;
import com.capstone.backend.model.User;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.BookingRequest;
import com.capstone.backend.repository.BookingRepository;
import com.capstone.backend.repository.PaymentMethodRepository;
import com.capstone.backend.repository.PromotionRepository;
import com.capstone.backend.repository.RatingRepository;
import com.capstone.backend.repository.UserRepository;
import com.capstone.backend.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    private PromotionRepository promotionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VehicleRepository vehicleRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private PaymentMethodRepository paymentMethodRepository;
    @Autowired
    private RatingRepository ratingRepository;

    public Promotion checkPromotion(String code) {
        return promotionRepository.findByCode(code);
    }

    public boolean checkGPLX(long userId, int permission) {
        User u = userRepository.findById(userId).get();
        DrivingLicense dl = u.getDrivingLincense();
        if (dl != null && dl.getId() != 0 && dl.getPermission() >= permission) {
            return true;
        }
        return false;
    }

    public Booking createBooking(BookingRequest br, long userId) {
        User u = userRepository.findById(userId).get();
        Vehicle v = vehicleRepository.findById(br.getVehicleId()).get();
        Booking b = new Booking();
        ResponseRate rr = v.getUser().getResponseRate();
        rr.setTotalRequest(rr.getTotalRequest() + 1);
        b.setStartTime(br.getStartTime());
        b.setEndTime(br.getEndTime());
        b.setAmount(br.getAmount());
        b.setPromotion(br.getPromotion());
        b.setUser(u);
        b.setVehicle(v);
        b.setStatus("Đang chờ");
        return bookingRepository.save(b);
    }

    public List<Booking> getMyBooking(long userId) {
        return bookingRepository.findByUserId(userId);
    }

    public List<Booking> getMyRequestBooking(long userId) {
        return bookingRepository.findByVehicleUserId(userId);
    }

    public Booking getBooking(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        if (b.getUser().getId() == userId) {
            b.setType("Thuê");
        } else {
            b.setType("Cho thuê");
        }
        return b;
    }

    public void cancelBooking(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        b.setStatus("Đã hủy");
        bookingRepository.save(b);
    }

    public Booking rejectBooking(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        User u = userRepository.findById(userId).get();
        ResponseRate rr = u.getResponseRate();
        long a = b.getCreateTime();
        long c = new Date().getTime();
        rr.setTotalResponse(rr.getTotalResponse() + 1);
        rr.setTotalHoursResponse(rr.getTotalHoursResponse() + c - a);
        b.setStatus("Đã từ chối");
        return bookingRepository.save(b);
    }

    public Booking confirmBooking(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        User u = userRepository.findById(userId).get();
        ResponseRate rr = u.getResponseRate();
        long a = b.getCreateTime();
        long c = new Date().getTime();
        rr.setTotalResponse(rr.getTotalResponse() + 1);
        rr.setTotalAgree(rr.getTotalAgree() + 1);
        rr.setTotalHoursResponse(rr.getTotalHoursResponse() + c - a);
        b.setStatus("Đã duyệt");
        return bookingRepository.save(b);
    }

    public Booking deposit(long userId, long id, long methodId) {
        Booking b = bookingRepository.findById(id).get();
        Deposit d = new Deposit();
        PaymentMethod p = paymentMethodRepository.findById(methodId).get();
        d.setAmount(b.getAmount() * 30 / 100);
        d.setDepositTime(new Date());
        d.setPaymentMethod(p);
        d.setStatus(true);
        b.setStatus("Đã cọc");
        b.setDeposit(d);
        return bookingRepository.save(b);
    }

    public Booking cancelAfterDeposit(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        Deposit d = b.getDeposit();
        d.setStatus(false);
        b.setStatus("Đã hủy cọc");
        b.setDeposit(d);
        return bookingRepository.save(b);
    }

    public Booking vehicleHanding(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        b.setStatus("Đã giao xe");
        return bookingRepository.save(b);
    }

    public Booking receiveVehicle(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        b.setStatus("Đã nhận xe");
        return bookingRepository.save(b);
    }

    public Booking getBackDeposit(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        Deposit d = b.getDeposit();
        d.setStatus(false);
        b.setStatus("Lấy lại cọc");
        b.setDeposit(d);
        return bookingRepository.save(b);
    }

    public Booking giveVehicleBack(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        b.setStatus("Đã trả xe");
        b.setReturnTime(new Date().getTime());
        return bookingRepository.save(b);
    }

    public Booking receiveBackVehicle(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        Vehicle v = b.getVehicle();
        v.setNumBooking(v.getNumBooking() + 1);
        b.setStatus("Hoàn thành");
        b.setReturnTime(new Date().getTime());
        return bookingRepository.save(b);
    }

    public Rating getVehicleBookingRating(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        Rating lr = ratingRepository.findByVehicleIdAndReviewerId(b.getVehicle().getId(), userId);
        return lr;
    }

    public void ratingVehicle(long userId, long id, String content, int numStar, String type) {
        Booking b = bookingRepository.findById(id).get();
        Rating lr = ratingRepository.findByVehicleIdAndReviewerId(b.getVehicle().getId(), userId);
        if (lr == null) {
            lr = new Rating();
        }
        lr.setNumStar(numStar);
        lr.setContent(content);
        lr.setType(type);
        lr.setCreateTime(new Date());
        lr.setReviewer(b.getUser());
        lr.setVehicle(b.getVehicle());
        ratingRepository.save(lr);
    }

    public void ratingUser(long userId, long id, String content, int numStar, String type) {
        Booking b = bookingRepository.findById(id).get();
        Rating lr = ratingRepository.findByUserIdAndReviewerId(b.getUser().getId(), userId);
        if (lr == null) {
            lr = new Rating();
        }
        lr.setNumStar(numStar);
        lr.setContent(content);
        lr.setType(type);
        lr.setCreateTime(new Date());
        lr.setUser(b.getUser());
        lr.setReviewer(userRepository.findById(userId).get());
        ratingRepository.save(lr);
    }

    public Rating getUserBookingRating(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        Rating lr = ratingRepository.findByUserIdAndReviewerId(b.getUser().getId(), userId);
        return lr;
    }

    public List<Rating> getAllUserRating(long userId, long id) {
        Booking b = bookingRepository.findById(id).get();
        List<Rating> lr = ratingRepository.findByUserId(b.getUser().getId());
        return lr;
    }

}