import bookingApi from "api/bookingApi";
import ItemReport from "components/vehicle/ItemReport";

import { Field, Form, Formik } from "formik";
import { comma, formatDateTime } from "lib/Helper";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form as BForm, Modal } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
import { NOTI } from "constants/index";
//@ts-ignore
import { store as noti } from "react-notifications-component";
import StarRatings from "react-star-ratings";

export default function BookingRequest(props) {
  const booking = props.booking;
  const status = booking.status;
  const vehicle = booking.vehicle;
  const user = booking.user;
  const [openModal, setOpenModel] = useState(false);
  const deposit = Math.round((30 * booking.amount) / 100000) * 1000;
  const price = booking.amount - deposit;
  const [show, setShow] = useState(true);
  const [showRating, setShowRating] = useState(false);
  const [rated, setRated] = useState({ content: "", numStar: 0 });
  const [allRate, setAllRate] = useState([]);
  const handleChangeStar = (star) => {
    setRated({ ...rated, numStar: star });
  };
  const handleCloseModal = () => {
    setOpenModel(false);
  };
  const handleCancel = () => {
    if (window.confirm("Bạn muốn hủy yêu cầu thuê xe này?")) {
      bookingApi.rejectBooking({ id: booking.id });
      props.history.push("/mytrips");
    }
  };
  const handleConfirm = () => {
    bookingApi.confirmBooking({ id: booking.id }).then((res) => {
      setShow(false);
    });
  };
  const handleCancelAfterDeposit = () => {
    if (window.confirm("Bạn muốn hủy yêu cầu thuê xe này?")) {
      bookingApi.cancelAfterDeposit({ id: booking.id }).then((res) => {
        props.history.push("/mytrips");
      });
    }
  };
  const handleVehicleHanding = () => {
    bookingApi.vehicleHanding({ id: booking.id }).then((res) => {
      setShow(false);
      setShowRating(true);
    });
  };
  const handleReceiveBackVehicle = () => {
    bookingApi.receiveBackVehicle({ id: booking.id }).then((res) => {
      setShow(false);
    });
  };
  useEffect(() => {
    setShow(true);
  }, [props]);
  useEffect(() => {
    if (status === "Hoàn thành") {
      bookingApi.getUserBookingRating({ id: booking.id }).then((res) => {
        if (res) {
          setRated(res);
        }
      });
    }
    bookingApi.getAllUserRating({ id: booking.id }).then((res) => {
      if (res) {
        setAllRate(res);
      }
    });
  }, []);
  return (
    <div className="register-vehicle">
      <div className="register-heading">
        <Row>
          <Col lg={3} className="register-heading-tab">
            <div
              className={`tab-number ${status === "Đang chờ" ? "active" : ""}`}
            >
              1
            </div>
            <p>Duyệt</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col lg={3} className="register-heading-tab">
            <div
              className={`tab-number ${status === "Đã duyệt" ? "active" : ""}`}
            >
              2
            </div>
            <p>Đợi thanh toán cọc</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col lg={3} className="register-heading-tab">
            <div
              className={`tab-number ${
                status === "Đã cọc" ||
                status === "Đã giao xe" ||
                status === "Đã nhận xe"
                  ? "active"
                  : ""
              }`}
            >
              3
            </div>
            <p>Giao xe</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col lg={3} className="register-heading-tab">
            <div
              className={`tab-number ${
                status === "Hoàn thành" || status === "Đã trả xe"
                  ? "active"
                  : ""
              }`}
            >
              4
            </div>
            <p>Kết thúc</p>
          </Col>
        </Row>
      </div>
      {status === "Đã hủy" ? (
        <div className="text-danger booking--width">
          Người dùng đã hủy yêu cầu thuê xe!
        </div>
      ) : status === "Đã từ chối" ? (
        <div className="text-danger booking--width">
          Bạn đã từ chối yêu cầu thuê xe!
        </div>
      ) : status === "Đã hủy cọc" ? (
        <div className="text-danger booking--width">
          Bạn đã hủy yêu cầu thuê xe!
        </div>
      ) : status === "Lấy lại cọc" ? (
        <div className="text-danger booking--width">
          Khách thuê đã lấy lại cọc và hủy yêu cầu!
        </div>
      ) : null}
      {status === "Hoàn thành"||showRating ? (
        <div className="register-body mt-2">
          <div className="booking--width">
            <Formik
              enableReinitialize={true}
              initialValues={{
                // @ts-ignore
                content: rated.content,
                star: rated.numStar,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                bookingApi
                  .ratingUser({
                    id: booking.id,
                    numStar: values.star,
                    content: values.content,
                    type: vehicle.driver ? "Có tài xế" : "Tự lái",
                  })
                  .then((res) => {
                    noti.addNotification({
                      ...NOTI,
                      title: "Thành công",
                      message: "Bạn đã đánh giá khách thuê thành công!!!",
                      type: "success",
                      dismiss: {
                        duration: 3000,
                      },
                      width: 160,
                    });
                    props.history.push("/");
                  });
              }}
            >
              <Form>
                <div className="d-flex justify-content-center mb-3">
                  <StarRatings
                    starRatedColor="#008248"
                    rating={rated.numStar}
                    changeRating={handleChangeStar}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <BForm.Group className="mb-3" controlId="username">
                  <Field name="content">
                    {({ field }) => (
                      <BForm.Control
                        autoComplete="off"
                        as="textarea"
                        {...field}
                        placeholder="Cho mọi người biết cảm nhận của bạn về khách thuê này"
                      />
                    )}
                  </Field>
                </BForm.Group>
                <Button variant="primary" type="submit">
                  Gửi đánh giá
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
      ) : null}
      <div className="register-body mt-2">
        <div className="booking--width">
          <Row>
            <Col lg={7}>
              <div className="booking__item--container">
                <div className="booking__item--img">
                  <div className="image-wrapper">
                    <img src={booking.vehicle.mainImg} alt="" />
                  </div>
                </div>
                <div className="text-muted">
                  <p className="fw-bold fs-5 text-dark">
                    {booking.vehicle.model.name}
                  </p>
                  <p>Bắt đầu: {formatDateTime(booking.startTime, true)}</p>
                  <p>Kết thúc: {formatDateTime(booking.endTime, true)}</p>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <p>Người thuê: {user.fullName}</p>
              <p>SĐT người thuê: {user.phone}</p>
              <span className="text--link" onClick={() => setOpenModel(true)}>
                Xem đánh giá người thuê
              </span>
            </Col>
          </Row>
          <div className="text-center">
            <div className="bg-light p-3 mb-3">
              <p>Tiền cọc</p>
              <h4 className="text-primary">{comma(deposit)}₫</h4>
            </div>
            <div className="bg-light p-3 mb-3">
              <p>Tiền nhận từ người thuê</p>
              <h4>{comma(price)}₫</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="register-footer">
        {status === "Đang chờ" && show ? (
          <Row className="main">
            <Col>
              <Button variant="danger" onClick={handleCancel}>
                Từ chối yêu cầu
              </Button>
            </Col>
            <Col>
              <Button onClick={handleConfirm}>Chấp nhận yêu cầu</Button>
            </Col>
          </Row>
        ) : null}
        {status === "Đã cọc" && show ? (
          <Row className="main">
            <Col>
              <Button variant="danger" onClick={handleCancelAfterDeposit}>
                Hủy yêu cầu
              </Button>
            </Col>
            <Col>
              <Button onClick={handleVehicleHanding}>Giao xe</Button>
            </Col>
          </Row>
        ) : null}
        {status === "Đã trả xe" && show ? (
          <div className="d-flex justify-content-center">
            <Button className="main m-auto" onClick={handleReceiveBackVehicle}>
              Xác nhận nhận xe
            </Button>
          </div>
        ) : null}
      </div>
      {openModal ? (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Các đánh giá về khách thuê</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {allRate.length?allRate.map((item, index) => {
              return <ItemReport rate={item} key={index} />;
            }):"Không có đánh giá nào"}
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}
