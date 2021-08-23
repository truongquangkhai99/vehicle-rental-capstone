import { FormGroup } from "@material-ui/core";
import React from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";
import HeaderVehicle from "./HeaderVehicle";
import {
  changeEndDate,
  changeEndTime,
  changeStartDate,
  changeStartTime,
  changeTime,
} from "app/slice/searchSlice";
import { useSelector } from "react-redux";
import store from "app/store";
import { calcTotalDate, comma, dateTimeToLong, formatMoneyK, timeToLong } from "lib/Helper";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import PromotionForm from "./PromotionForm";
import bookingApi from "api/bookingApi";
import { NOTI } from "constants/index";
import { store as noti } from "react-notifications-component";
import { showLogin } from "app/slice/userSlice";
import { BsArrowLeftShort } from "react-icons/bs";
function DriverSideBar(props) {
  const vehicle = props.vehicle;
  const searched = useSelector((state) => state.searched).data;
  const date = calcTotalDate(searched);
  const logged = useSelector((state) => state.logged);
  const booking = useSelector((state) => state.booking);
  const total = Math.round((searched.time * vehicle.originPrice) / 6000) * 1000;
  const total2 = total+total/10;
  const discount = booking.data.promotion ? booking.data.promotion.discount : 0;
  const totalWithDiscount =
  total2 - Math.round((total2 * discount) / 100000) * 1000;

  const handleChangeStartDate = (evt) => {
    store.dispatch(changeStartDate(evt.target.value));
  };
  const handleChangeStartTime = (evt) => {
    store.dispatch(changeStartTime(evt.target.value));
  };
  const handleChangeTime = (evt) => {
    store.dispatch(changeTime(evt.target.value));
  };
  const handleSubmit = () => {
    if (logged.data) {
      
      const permission = vehicle.bikeType ? 1 : 2;
      bookingApi.checkGPLX({ permission }).then((res) => {
        if (res) {
          bookingApi
            .createBooking({
              startTime: dateTimeToLong(searched.startDate, searched.startTime),
              endTime: timeToLong(searched.startDate, searched.startTime,+searched.time),
              amount: totalWithDiscount,
              promotion: booking.data.promotion,
              vehicleId: vehicle.id,
            })
            .then((res) => {
              props.history.push("/booking?id=" + res.id);
            });
          noti.addNotification({
            ...NOTI,
            title: "Đặt xe thành công",
            message: "Bạn đã đặt xe thành công, vui lòng chờ chủ xe xác nhận",
            type: "success",
            dismiss: {
              duration: 2000,
            },
          });
        } else {
          noti.addNotification({
            ...NOTI,
            title: "GPLX không đủ yêu cầu",
            message: "Vui lòng vào cài đặt tài khoản cập nhật GPLX của bạn",
            type: "warning",
            dismiss: {
              duration: 2000,
            },
          });
        }
      });
    } else {
      store.dispatch(showLogin());
    }
  };
  return (
    <Form id="sidebar">
      <div className="price-vehicle mb-3">
        <HeaderVehicle
          vehicle={vehicle}
          className="d-block d-lg-none text-start"
        />
        <div>
          <span className="price">{formatMoneyK(total)}</span>
          <span className="unit">/Chuyến</span>
        </div>
      </div>
      <FormGroup className="mb-3">
        <FormLabel className="lable-form">Thời gian</FormLabel>
        <Row id="date-time">
          <Col xs={6} className="p-0">
            <Form.Control
              className="findCarFormInput"
              type="date"
              name="startDate"
              value={searched.startDate}
              onChange={handleChangeStartDate}
            />
          </Col>
          <Col xs={6} className="pe-0">
            <Form.Control
              className="findCarFormInput"
              type="time"
              name="endTime"
              value={searched.startTime}
              onChange={handleChangeStartTime}
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mb-3">
        <select onChange={handleChangeTime} className="form-select form-select-md mb-3" defaultValue={searched.time}>
          <option value="4">4 tiếng</option>
          <option value="6">6 tiếng</option>
          <option value="8">8 tiếng</option>
          <option value="10">10 tiếng</option>
          <option value="12">12 tiếng</option>
          <option value="14">14 tiếng</option>
        </select>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel className="lable-form">Điểm đón</FormLabel>
        <span className="local-sidebar">
          <i id="icon-vehicle">
            <GrLocation />
          </i>
          {searched.startLocal}
        </span>
      </FormGroup>
      {vehicle.deliveryEnable ? (
        <div id="line-form" className="mb-3">
          <div id="line-item">
            <span>Hỗ trợ đưa đón trong vòng</span>
            <span>{vehicle.deliveryRadius} km</span>
          </div>
          <div id="line-item">
            <span>Miễn phí đưa đón xe</span>
            <span>{vehicle.deliveryRadiusFree} km</span>
          </div>
          <div id="line-item">
            <span>Phí đưa đón /km</span>
            <span>{formatMoneyK(vehicle.deliveryFee)}/km</span>
          </div>
        </div>
      ) : null}
      <FormGroup className="mb-3">
        <FormLabel className="lable-form">Giới hạn số km</FormLabel>

        <span>
          Tối đa <span className="line-bold">{vehicle.limitDistance / 2}</span>{" "}
          km/chuyến. Phí{" "}
          <span className="line-bold">
            {formatMoneyK(vehicle.outLimitFee * 5)}
          </span>
          /giờ vượt quá giới hạn.
        </span>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel className="lable-form">Bảo hiểm</FormLabel>

        <a href="" className="line-insur">
          <span>
            <AiOutlineFileProtect /> Chuyến đi được bảo hiểm bởi Pjico{" "}
          </span>
        </a>
        <a href="">Tìm hiểu thêm</a>
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel className="lable-form">Chi tiết giá</FormLabel>
        <div className="bill">
          <div className="bill-item">
            <span>Đơn giá thuê</span>
            <span>{comma(total)}₫ / Chuyến</span>
          </div>
          <div className="bill-item">
            <span>Phí dịch vụ</span>
            <span>{comma((total * 5) / 100)}₫ / Chuyến</span>
          </div>
          <div className="bill-item">
            <span>Phí bảo hiểm</span>
            <span>{comma((total * 5) / 100)}₫ / Chuyến</span>
          </div>
          <div className="bill-item" id="total">
            <span>Tổng phí thuê xe</span>
            <span>{comma(total + total / 10)}₫</span>
          </div>
          <div className="bill-item">
            <span className="line-bold">Tổng cộng</span>
            <span className="line-bold">
              {comma(totalWithDiscount)}₫
              {totalWithDiscount < total * date ? (
                <>
                  {" "}
                  {<BsArrowLeftShort />}{" "}
                  <span className="text-decoration-line-through">
                    {comma(total * date)}₫
                  </span>
                </>
              ) : null}
            </span>
          </div>

          {logged.data ? (
            <Row className="mb-3 order-1 position-relative">
              <PromotionForm />
            </Row>
          ) : null}
          <Button className="mt-5" onClick={handleSubmit}>
            Đặt xe
          </Button>
        </div>
      </FormGroup>
    </Form>
  );
}

export default React.memo(DriverSideBar);
