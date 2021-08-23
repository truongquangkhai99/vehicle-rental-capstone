import bookingApi from "api/bookingApi";
import { NOTI } from "constants/index";
import { Field, Form, Formik } from "formik";
import { comma, formatDateTime } from "lib/Helper";
import React, { useEffect, useState } from "react";
import { Button, Col, Form as BForm, Modal, Row } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";
//@ts-ignore
import { store as noti } from "react-notifications-component";
import StarRatings from "react-star-ratings";

export default function Booking(props) {
  const booking = props.booking;
  const status = booking.status;
  const vehicle = booking.vehicle;
  const deposit = Math.round((30 * booking.amount) / 100000) * 1000;
  const price = booking.amount - deposit;
  const [openModal, setOpenModel] = useState(false);
  const [show, setShow] = useState(true);
  const [method, setMethod] = useState(1);
  const [rated, setRated] = useState({ content: "", numStar: 0 });
  const handleChangeStar = (star) => {
    setRated({ ...rated, numStar: star });
  };
  const handleCloseModal = () => {
    setOpenModel(false);
  };
  const handleDeposit = () => {
    bookingApi.deposit({ id: booking.id, methodId: method }).then(() => {
      setShow(false);
      setOpenModel(false);
    });
  };
  const handleCancelAfterDeposit = () => {
    bookingApi.getBackDeposit({ id: booking.id }).then(() => {
      setShow(false);
    });
  };
  const handleCancel = () => {
    if (window.confirm("Bạn muốn hủy yêu cầu thuê xe này?")) {
      bookingApi.cancelBooking({ id: booking.id });
      props.history.push("/");
    }
  };
  const handleReceiveVehicle = () => {
    bookingApi.receiveVehicle({ id: booking.id }).then(() => {
      setShow(false);
    });
  };
  const handleGiveVehicleBack = () => {
    bookingApi.giveVehicleBack({ id: booking.id }).then(() => {
      setShow(false);
    });
  };
  useEffect(() => {
    setShow(true);
  }, [props]);
  useEffect(() => {
    console.log(status);
    if (status === "Hoàn thành") {
      bookingApi.getVehicleBookingRating({ id: booking.id }).then((res) => {
        if (res) {
          setRated(res);
        }
      });
    }
  }, []);
  return (
    <div className="register-vehicle">
      <div className="register-heading">
        <Row>
          <Col className="register-heading-tab">
            <div
              className={`tab-number ${status === "Đang chờ" ? "active" : ""}`}
            >
              1
            </div>
            <p>Đợi duyệt</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col className="register-heading-tab">
            <div
              className={`tab-number ${
                status === "Đã duyệt" || status === "Đã cọc" ? "active" : ""
              }`}
            >
              2
            </div>
            <p>Thanh toán cọc</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col className="register-heading-tab">
            <div
              className={`tab-number ${
                status === "Đã giao xe" || status === "Đã nhận xe"
                  ? "active"
                  : ""
              }`}
            >
              3
            </div>
            <p>Nhận xe</p>
            <i className="icon-after">
              <AiOutlineRight />
            </i>
          </Col>
          <Col className="register-heading-tab">
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
          Bạn đã hủy yêu cầu thuê xe!
        </div>
      ) : status === "Đã từ chối" ? (
        <div className="text-danger booking--width">
          Chủ xe đã từ chối yêu cầu thuê xe!
        </div>
      ) : status === "Đã hủy cọc" ? (
        <div className="text-danger booking--width">
          Chủ xe đã hủy yêu cầu thuê xe!
        </div>
      ) : status === "Lấy lại cọc" ? (
        <div className="text-danger booking--width">
          Bạn đã lấy lại cọc và hủy yêu cầu!
        </div>
      ) : status === "Đã trả xe" ? (
        <div className="text-danger booking--width">
          Hãy chắc chắn rằng chủ xe đã bấm xác nhận nhận lại xe!
        </div>
      ) : null}
      {status === "Hoàn thành" ? (
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
                bookingApi
                  .ratingVehicle({
                    id: booking.id,
                    numStar: values.star,
                    content: values.content,
                    type: vehicle.driver ? "Có tài xế" : "Tự lái",
                  })
                  .then((res) => {
                    noti.addNotification({
                      ...NOTI,
                      title: "Thành công",
                      message:
                        "Bạn đã đánh giá xe thành công, cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!!",
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
                        placeholder="Cho mọi người biết cảm nhận của bạn về xe"
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
                  <p>
                    Thời gian trả xe: {formatDateTime(booking.returnTime, true)}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <p>Chủ xe: {vehicle.user.fullName}</p>
              <p>SĐT chủ xe: {vehicle.user.phone}</p>
              <p>Địa chỉ xe: {vehicle.location.strAddress}</p>
            </Col>
          </Row>
          <div className="text-center">
            <div className="bg-light p-3 mb-3">
              <p>Tiền cọc</p>
              <h4 className="text-primary">{comma(deposit)}₫</h4>
            </div>
            <div className="bg-light p-3 mb-3">
              <p>Thanh toán cho chủ xe khi nhận xe</p>
              <h4>{comma(price)}₫</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="register-footer">
        {status === "Đang chờ" || (status == "Đã duyệt" && show) ? (
          <Row className="main">
            <Col>
              <Button variant="danger" onClick={handleCancel}>
                Hủy yêu cầu
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  setOpenModel(true);
                }}
                disabled={status === "Đã duyệt" ? false : true}
              >
                Đặt cọc
              </Button>
            </Col>
          </Row>
        ) : null}
        {status === "Đã cọc" || (status == "Đã giao xe" && show) ? (
          <Row className="main">
            <Col>
              <Button variant="danger" onClick={handleCancelAfterDeposit}>
                Hủy yêu cầu
              </Button>
            </Col>
            <Col>
              <Button
                onClick={handleReceiveVehicle}
                disabled={status === "Đã giao xe" ? false : true}
              >
                Nhận xe
              </Button>
            </Col>
          </Row>
        ) : null}
        {status === "Đã nhận xe" && show ? (
          <div className="d-flex justify-content-center">
            <Button className="main m-auto" onClick={handleGiveVehicleBack}>
              Trả xe
            </Button>
          </div>
        ) : null}
      </div>
      {openModal ? (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Chọn phương thức đặt cọc</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-4 justify-content-between">
              <div
                className={`paymethod__item ${method === 1 ? "active" : null}`}
                onClick={() => {
                  setMethod(1);
                }}
              >
                Chuyển khoản
              </div>
              <div
                className={`paymethod__item ${method === 2 ? "active" : null}`}
                onClick={() => {
                  setMethod(2);
                }}
              >
                Momo
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleDeposit}>Đặt cọc</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}
