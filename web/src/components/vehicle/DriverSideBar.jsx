import { FormGroup } from "@material-ui/core";
import React from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";
import HeaderVehicle from "./HeaderVehicle";
import {
  changeEndDate,
  changeEndTime,
  changeStartDate,
  changeStartTime,
} from "app/slice/searchSlice";
import { useSelector } from "react-redux";
import store from "app/store";
import { calcTotalDate, comma, formatMoneyK } from "lib/Helper";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

function DriverSideBar(props) {
  const vehicle = props.vehicle;
  const searched = useSelector((state) => state.searched).data;
  const date = calcTotalDate(searched);
  const handleChangeEndDate = (evt) => {
    store.dispatch(changeEndDate(evt.target.value));
  };
  const handleChangeEndTime = (evt) => {
    store.dispatch(changeEndTime(evt.target.value));
  };
  const handleChangeStartDate = (evt) => {
    store.dispatch(changeStartDate(evt.target.value));
  };
  const handleChangeStartTime = (evt) => {
    store.dispatch(changeStartTime(evt.target.value));
  };
  return (
    <Form id="sidebar">
      <div className="price-vehicle mb-3">
        <HeaderVehicle
          vehicle={vehicle}
          className="d-block d-lg-none text-start"
        />
        <div>
          <span className="price">{formatMoneyK(vehicle.originPrice)}</span>
          <span className="unit">/ngày</span>
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
              value={searched.endDate}
              onChange={handleChangeEndDate}
            />
          </Col>
          <Col xs={6} className="pe-0">
            <Form.Control
              className="findCarFormInput"
              type="time"
              name="endTime"
              value={searched.endTime}
              onChange={handleChangeEndTime}
            />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup className="mb-3">
        <select className="form-select form-select-md mb-3" defaultValue="4h">
          <option value="4h">4 tiếng</option>
          <option value="6h">6 tiếng</option>
          <option value="8h">8 tiếng</option>
          <option value="10h">10 tiếng</option>
          <option value="12h">12 tiếng</option>
          <option value="14h">14 tiếng</option>
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
          Tối đa <span className="line-bold">{vehicle.limitDistance/2}</span> km/chuyến. Phí{" "}
          <span className="line-bold">{formatMoneyK(vehicle.outLimitFee*5)}</span>/giờ vượt quá giới hạn.
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
            <span>{comma(vehicle.originPrice)}₫ / ngày</span>
          </div>
          <div className="bill-item">
            <span>Phí dịch vụ</span>
            <span>{comma((vehicle.originPrice * 5) / 100)}₫ / ngày</span>
          </div>
          <div className="bill-item">
            <span>Phí bảo hiểm</span>
            <span>{comma((vehicle.originPrice * 5) / 100)}₫ / ngày</span>
          </div>
          <div className="bill-item" id="total">
            <span>Tổng phí thuê xe</span>
            <span>
              {comma(vehicle.originPrice + (vehicle.originPrice * 10) / 100)}₫ x{" "}
              <span className="line-bold">{date}</span>
            </span>
          </div>
          <div className="bill-item">
            <span className="line-bold">Tổng cộng</span>
            <span className="line-bold">
              {comma(
                (vehicle.originPrice + (vehicle.originPrice * 10) / 100) * date
              )}
              ₫
            </span>
          </div>
  
          <a
            href=""
            style={{
              float: "right",
              textDecoration: "none",
              color: "#56A8FF",
            }}
          >
            Mã khuyến mãi
          </a>
          <Button className="mt-5">Đặt xe</Button>
        </div>
      </FormGroup>
    </Form>
  );
}

export default React.memo(DriverSideBar);
