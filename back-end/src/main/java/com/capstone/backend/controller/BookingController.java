package com.capstone.backend.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.model.Booking;
import com.capstone.backend.model.Notification;
import com.capstone.backend.model.Promotion;
import com.capstone.backend.model.Rating;
import com.capstone.backend.payload.BookingRequest;
import com.capstone.backend.service.BookingServiceImpl;
import com.capstone.backend.service.NotificationServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookingController {
    @Autowired
    JwtAuthenticationFilter jwtAuth;
    @Autowired
    private BookingServiceImpl bookingService;
    @Autowired
    private NotificationServiceImpl notificationService;

    @PostMapping("/createBooking")
    public ResponseEntity<?> createBooking(@RequestBody BookingRequest booking, HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.createBooking(booking, userId);
            notificationService.sendNotification(b, "booking", userId);
            return new ResponseEntity<Booking>(b, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/checkPromotion")
    public ResponseEntity<?> checkPromotion(@RequestParam String code) {
        try {
            return new ResponseEntity<Promotion>(bookingService.checkPromotion(code), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/checkGPLX")
    public ResponseEntity<?> checkGPLX(HttpServletRequest request, @RequestParam int permission) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<Boolean>(bookingService.checkGPLX(userId, permission), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getBooking")
    public ResponseEntity<?> getMyBooking(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<Booking>(bookingService.getBooking(userId, id), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getMyBooking")
    public ResponseEntity<?> getMyBooking(HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<List<Booking>>(bookingService.getMyBooking(userId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getMyRequestBooking")
    public ResponseEntity<?> getMyRequestBooking(HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<List<Booking>>(bookingService.getMyRequestBooking(userId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getNoti")
    public ResponseEntity<?> getNoti(HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<List<Notification>>(notificationService.getNoti(userId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/readNoti")
    public ResponseEntity<?> readNoti(@RequestParam long id) {
        try {
            notificationService.readNoti(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/cancelBooking")
    public ResponseEntity<?> cancelBooking(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            bookingService.cancelBooking(userId, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/rejectBooking")
    public ResponseEntity<?> rejectBooking(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.rejectBooking(userId, id);
            notificationService.sendNotification(b, "reject", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/confirmBooking")
    public ResponseEntity<?> confirmBooking(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.confirmBooking(userId, id);
            notificationService.sendNotification(b, "confirm", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/deposit")
    public ResponseEntity<?> deposit(HttpServletRequest request, @RequestParam long id, @RequestParam long methodId) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.deposit(userId, id, methodId);
            notificationService.sendNotification(b, "deposit", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/cancelAfterDeposit")
    public ResponseEntity<?> cancelAfterDeposit(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.cancelAfterDeposit(userId, id);
            notificationService.sendNotification(b, "cancel", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getBackDeposit")
    public ResponseEntity<?> getBackDeposit(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.getBackDeposit(userId, id);
            notificationService.sendNotification(b, "cancel2", userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/vehicleHanding")
    public ResponseEntity<?> vehicleHanding(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.vehicleHanding(userId, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/receiveVehicle")
    public ResponseEntity<?> receiveVehicle(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.receiveVehicle(userId, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/giveVehicleBack")
    public ResponseEntity<?> giveVehicleBack(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.giveVehicleBack(userId, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/receiveBackVehicle")
    public ResponseEntity<?> receiveBackVehicle(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Booking b = bookingService.receiveBackVehicle(userId, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAllUserRating")
    public ResponseEntity<?> getAllUserRating(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            List<Rating> r = bookingService.getAllUserRating(userId, id);
            return new ResponseEntity<List<Rating>>(r, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getUserBookingRating")
    public ResponseEntity<?> getUserBookingRating(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Rating r = bookingService.getUserBookingRating(userId, id);
            return new ResponseEntity<Rating>(r, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getVehicleBookingRating")
    public ResponseEntity<?> getVehicleBookingRating(HttpServletRequest request, @RequestParam long id) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            Rating r = bookingService.getVehicleBookingRating(userId, id);
            return new ResponseEntity<Rating>(r, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/ratingVehicle")
    public ResponseEntity<?> ratingVehicle(HttpServletRequest request, @RequestParam long id,
            @RequestParam String content, @RequestParam int numStar, @RequestParam String type) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            bookingService.ratingVehicle(userId, id, content, numStar, type);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/ratingUser")
    public ResponseEntity<?> ratingUser(HttpServletRequest request, @RequestParam long id, @RequestParam String content,
            @RequestParam int numStar, @RequestParam String type) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            bookingService.ratingUser(userId, id, content, numStar, type);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}