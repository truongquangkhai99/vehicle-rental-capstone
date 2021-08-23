import bookingApi from "api/bookingApi";
import userApi from "api/userApi";
import Loading from "components/layout/Loading";
import { formatDateTime, formatMoneyK } from "lib/Helper";
import React, { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Card,
  Container,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import queryString from "query-string";
import Booking from "components/mytrips/Booking";
import BookingRequest from "components/mytrips/BookingRequest";

function BookingPage(props) {
  const param = queryString.parse(window.location.search);
  const [booking, setBooking] = useState(null);
  const [updateNoti, setUpdateNoti] = useState(true);

  useEffect(() => {
    if (booking === null) {
      bookingApi.getBooking({ id: param.id }).then((res) => {
        setBooking(res);
      });
    }
    if (updateNoti) {
      setUpdateNoti(false);
      const interval = setInterval(() => {
        bookingApi.getBooking({ id: param.id }).then((res) => {
          setBooking(res);
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <div className="page-content">
      {booking ? (
        <>
          {booking.type === "Thuê" ? (
            <Booking history={props.history} booking={booking} />
          ) : (
            <BookingRequest history={props.history} booking={booking} />
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default BookingPage;
