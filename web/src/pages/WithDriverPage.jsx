import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import {
  GiCarSeat,
  GiGears,
  GiGasPump,
  GiFuelTank,
  GiUsbKey,
} from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import ItemReport from "components/vehicle/ItemReport";
import { FaBluetooth, FaMap } from "react-icons/fa";
import { RiGpsFill } from "react-icons/ri";
import { HiVideoCamera } from "react-icons/hi";
import TabWithDriver from "components/withdriver/TabWithDriver";
import queryString from "query-string";
import vehicleApi from "api/vehicleApi";
import Loading from "components/layout/Loading";
import ImageSlide from "components/vehicle/ImageSlide";
import HeaderVehicle from "components/vehicle/HeaderVehicle";
import DescriptionVehicle from "components/vehicle/DescriptionVehicle";
import RatingVehicle from "components/vehicle/RatingVehicle";
import DriverSideBar from "components/vehicle/DriverSideBar";

export default function WithDriverPage() {
  const param = queryString.parse(window.location.search);
  const [car, setCar] = useState({});
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    vehicleApi
      .getVehicle({ id: param.id })
      .then((res) => {
        setCar(res.data);
        setStatus("success");
      })
      .catch((res) => {
        setStatus("error");
      });
  }, [param.id]);
  return (
    <div className="page-content">
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className="vehicle">
          <ImageSlide vehicle={car} />
          <Row className="vehicle__body container">
            <Col lg={7} className="vehicle__body-content">
              <HeaderVehicle vehicle={car} className="d-none d-lg-block" />
              <div className="desc">
                <DescriptionVehicle vehicle={car} type="car" />
                <Row className="mb-4">
                  <Col lg={6}>
                    <Button className="report-btn">Báo xấu</Button>
                  </Col>
                  <Col lg={6}>
                    <Button className="addFavs-btn">Thêm vào yêu thích</Button>
                  </Col>
                </Row>
              </div>
              <RatingVehicle vehicle={car} />
            </Col>
            <Col lg={5} className="vehicle__body-sidebar">
              <DriverSideBar vehicle={car}/>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
