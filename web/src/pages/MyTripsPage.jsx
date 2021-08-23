import React, { useEffect, useState } from "react";
import { Tabs, Tab, Row, Container } from "react-bootstrap";
import ItemMyFavorite from "components/myfavorite/ItemMyFavorite";
import vehicleApi from "api/vehicleApi";
import Loading from "components/layout/Loading";
import bookingApi from "api/bookingApi";
import ItemMyBooking from "components/mytrips/ItemMyBooking";

export default function MyTripsPage() {
  const [booking, setBooking] = useState([]);
  const [requestBooking, setRequestBooking] = useState([]);
  const [status, setStatus] = useState("loading");
  const [statusRequest, setStatusRequest] = useState("loading");
  useEffect(() => {
    bookingApi.getMyBooking().then((res) => {
      setBooking(res);
      setStatus("idle");
    });
    bookingApi.getMyRequestBooking().then((res) => {
      setRequestBooking(res);
      setStatusRequest("idle");
    });
  }, []);
  return (
    <Container className="page-content">
      <div className="myfavs">
        <Tabs defaultActiveKey="motor" transition={false}>
          <Tab eventKey="motor" title="Chuyến Thuê">
            <Row className="items">
            {booking.length?booking.map((item, index) => {
                  return (
                    <ItemMyBooking booking={item} />
                  );
                }):null}
            </Row>
          </Tab>
          <Tab eventKey="self-driving" title="Chuyến Cho Thuê">
            <Row className="items">
              {requestBooking.length?requestBooking.map((item, index) => {
                  return (
                    <ItemMyBooking booking={item} />
                  );
                }):null}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}
