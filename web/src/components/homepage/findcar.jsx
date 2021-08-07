// @ts-nocheck
import React, { useState } from "react";
import { Col, Row, Form, Button, Nav, Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/all";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/pages/_home.scss";
import GoogleMaps from "./AutoComplete/AutoComplete";
import { useHistory } from "react-router-dom";
import store from "app/store";
import { search } from "app/slice/searchSlice";
import { roundEndTime, roundStartTime } from "lib/Helper";
export default function Findcar() {
  const today = new Date();
  const startDate = today.toLocaleDateString("en-CA");
  const endDate = new Date(
    today.setDate(today.getDate() + 1)
  ).toLocaleDateString("en-CA");

  const startTime = roundStartTime(today);
  const endTime = roundEndTime(startTime).toTimeString().slice(0, 5);
  const [SearchCar, setSearchCar] = useState({
    startLocal: "",
    startDate,
    startTime: startTime.toTimeString().slice(0, 5),
    endLocal: "",
    endDate,
    endTime,
    type: "bike",
  });
  const history = useHistory();
  const handleSubmit = () => {
    if (SearchCar.startLocal !== "") {
      console.log(SearchCar.startLocal);
      store.dispatch(search(SearchCar));
      history.push("/find");
    } else {
      alert("Vui lòng nhập địa chỉ tìm kiếm!");
    }
    history.push("/find");
  };
  const getLocalStart = (data) => {
    setSearchCar((state) => ({ ...state, startLocal: data }));
  };
  const getLocalEnd = (data) => {
    setSearchCar((state) => ({ ...state, endLocal: data }));
  };
  const handleStartTime = (evt) => {
    console.log(evt.target.value);
    setSearchCar((state) => ({
      ...state,
      startTime: evt.target.value,
    }));
  };
  const handleStartDate = (evt) => {
    setSearchCar((state) => ({
      ...state,
      startDate: evt.target.value,
    }));
  };
  const handleEndDate = ({ target }) =>
    setSearchCar((state) => ({
      ...state,
      endDate: target.value,
    }));
  const handleEndTime = ({ target }) =>
    setSearchCar((state) => ({
      ...state,
      endTime: target.value,
    }));

  return (
    <Tab.Container defaultActiveKey="1">
      <Row className="text-white justify-content-center pb-5" id="find-car">
        <Col xxl={2} lg={3} sm={4} className="shadow-lg bg-dark--20 ">
          <Nav
            variant="pills"
            className="flex-row flex-sm-column justify-content-around"
          >
            <Nav.Item className="flex-grow-1">
              <Nav.Link
                eventKey="1"
                onClick={() =>
                  setSearchCar((state) => ({ ...state, type: "bike" }))
                }
                className={SearchCar.type === "bike" ? "active" : null}
              >
                <i class="ict ict-bike d-none d-sm-inline-block"></i>
                <div>Xe máy</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="flex-grow-1">
              <Nav.Link
                eventKey="2"
                onClick={() =>
                  setSearchCar((state) => ({ ...state, type: "car" }))
                }
              >
                <i class="ict ict-selfdrive d-none d-sm-inline-block"></i>
                <div>Ô tô tự lái</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="flex-grow-1">
              <Nav.Link
                eventKey="3"
                onClick={() =>
                  setSearchCar((state) => ({ ...state, type: "driver" }))
                }
              >
                <i class="ict ict-withdriver d-none d-sm-inline-block"></i>
                <div>Ô tô có tài xế</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xxl={4} lg={6} sm={8} className="shadow-lg p-3 bg-dark--20">
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <Form1
                SearchCar={SearchCar}
                handleSubmit={handleSubmit}
                getLocalStart={getLocalStart}
                getLocalEnd={getLocalEnd}
                handleStartTime={handleStartTime}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                handleEndTime={handleEndTime}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <Form1
                SearchCar={SearchCar}
                handleSubmit={handleSubmit}
                getLocalStart={getLocalStart}
                getLocalEnd={getLocalEnd}
                handleStartTime={handleStartTime}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                handleEndTime={handleEndTime}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <Form2
                SearchCar={SearchCar}
                handleSubmit={handleSubmit}
                getLocalStart={getLocalStart}
                getLocalEnd={getLocalEnd}
                handleStartTime={handleStartTime}
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
                handleEndTime={handleEndTime}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
const Form1 = (props) => {
  const SearchCar = props.SearchCar;
  const handleSubmit = props.handleSubmit;
  const getLocalStart = props.getLocalStart;
  const handleStartTime = props.handleStartTime;
  const handleStartDate = props.handleStartDate;
  const handleEndDate = props.handleEndDate;
  const handleEndTime = props.handleEndTime;
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Label className="findCarFormLabel">Địa điểm</Form.Label>
          <GoogleMaps getLocal={getLocalStart} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <Form.Label className="findCarFormLabel">Ngày đi</Form.Label>
          <Form.Control
            className="findCarFormInput"
            type="date"
            name="startDate"
            value={SearchCar.startDate}
            onChange={handleStartDate}
          />
        </Col>
        <Col xs={6}>
          <Form.Label className="findCarFormLabel">Thời gian đi</Form.Label>
          <Form.Control
            className="findCarFormInput"
            type="time"
            name="startTime"
            value={SearchCar.startTime}
            onChange={handleStartTime}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={6}>
          <Form.Label className="findCarFormLabel">Ngày đến</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={SearchCar.endDate}
            onChange={handleEndDate}
          />
        </Col>
        <Col xs={6}>
          <Form.Label>Thời gian đến</Form.Label>
          <Form.Control
            type="time"
            name="endTime"
            value={SearchCar.endTime}
            onChange={handleEndTime}
          />
        </Col>
      </Row>
      <Row className="mt-4 justify-content-end">
        <Col xs={12}>
          <Button className="w-100" type="button" onClick={handleSubmit}>
            <BsSearch className="icon" /> Tìm xe
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
const Form2 = (props) => {
  const SearchCar = props.SearchCar;
  const handleSubmit = props.handleSubmit;
  const getLocalStart = props.getLocalStart;
  const getLocalEnd = props.getLocalEnd;
  const handleStartTime = props.handleStartTime;
  const handleStartDate = props.handleStartDate;
  const handleEndDate = props.handleEndDate;
  const handleEndTime = props.handleEndTime;
  const [isLocalEnd, setIsLocalEnd] = useState(false);
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Nav fill id="find-withdriver">
            <Nav.Item className="flex-grow-1">
              <Nav.Link
                eventKey="1"
                onClick={() => setIsLocalEnd(false)}
                className={`${isLocalEnd ? null : "active"}`}
              >
                <div>Nội thành</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="flex-grow-1"
              onClick={() => setIsLocalEnd(true)}
            >
              <Nav.Link eventKey="2">
                <div>Liên tỉnh</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} className="mt-3">
          <Form.Label className="findCarFormLabel">Địa điểm</Form.Label>
          <GoogleMaps getLocal={getLocalStart} />
        </Col>
        {isLocalEnd ? (
          <Col xs={12} className="mt-3">
            <Form.Label className="findCarFormLabel">Điểm đến</Form.Label>
            <GoogleMaps getLocal={getLocalEnd} />
          </Col>
        ) : null}
        <Col xs={6} className="mt-3">
          <Form.Label className="findCarFormLabel">Ngày đi</Form.Label>
          <Form.Control
            className="findCarFormInput"
            type="date"
            name="startDate"
            value={SearchCar.startDate}
            onChange={handleStartDate}
          />
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Label className="findCarFormLabel">Thời gian đi</Form.Label>
          <Form.Control
            className="findCarFormInput"
            type="time"
            name="startTime"
            value={SearchCar.startTime}
            onChange={handleStartTime}
          />
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Label className="findCarFormLabel">Ngày đến</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={SearchCar.endDate}
            onChange={handleEndDate}
          />
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Label>Thời gian đến</Form.Label>
          <Form.Control
            type="time"
            name="endTime"
            value={SearchCar.endTime}
            onChange={handleEndTime}
          />
        </Col>
        <Col xs={12} className="mt-4">
          <Button className="w-100" type="button" onClick={handleSubmit}>
            <BsSearch className="icon" /> Tìm xe
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
