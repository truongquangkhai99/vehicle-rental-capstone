import React, { useEffect, useState } from "react";
import { AiFillCar, AiOutlinePlusCircle } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { Row, Col, FormGroup, FormLabel } from "react-bootstrap";
import ItemMyVehicle from "components/myvehicle/ItemMyVehicle";
import { Link } from "react-router-dom";
import Loading from "components/layout/Loading";
import vehicleApi from "api/vehicleApi";

export default function MyVehiclesPage() {
  const [status, setStatus] = useState("loading");
  const [active, setActive] = useState("all");
  const [vehicles, setVehicles] = useState([]);
  const handleChange = (evt) => {
    setActive(evt.target.value);
  };

  useEffect(() => {
    vehicleApi.getMyVehicles().then((res) => {
      setVehicles(res);
      setStatus("idle");
    });
  }, []);
  return (
    <>
      <div id="nav-control">
        <ul>
          <li>
            <Link to="/myvehicles">
              <span style={{ color: "#00a54f" }}>
                <i>
                  <AiFillCar />
                </i>
                <span>Danh sách xe</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/registermode" className="border-left">
              <span>
                <i>
                  <AiOutlinePlusCircle />
                </i>
                <span>Đăng kí xe</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/mywallet" className="border-left">
              <span>
                <i>
                  <BiWallet />
                </i>
                <span>
                  Số dư: <span id="line-bold">0đ</span>
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-vehicles">
        <Row className="my-vehicles-content">
          <Col lg={4}>
            <div className="my-vehicles-status mt-5">
              <FormGroup>
                <FormLabel>Trạng thái</FormLabel>
                <select
                  className="form-select form-select-md"
                  defaultValue="all"
                  onChange={handleChange}
                >
                  <option value="all">Tất cả</option>
                  <option value="active">Đang hoạt động</option>
                  <option value="pending">Đang chờ duyệt</option>
                </select>
              </FormGroup>
            </div>
          </Col>
          <Col lg={8} className="page-content">
            <div className="my-vehicles-items mt-5">
              {status === "loading" ? (
                <Loading />
              ) : (
                <>
                  {active === "all" ? (
                    <>
                      {vehicles.map((item, index) => {
                        return <ItemMyVehicle key={index} item={item} />;
                      })}
                    </>
                  ) : active === "active" ? (
                    <>
                      {vehicles
                        .filter((item) => {
                          return item.actived === true;
                        })
                        .map((item, index) => {
                          return <ItemMyVehicle key={index} item={item} />;
                        })}
                    </>
                  ) : (
                    <>
                      {vehicles
                        .filter((item) => {
                          return item.actived === false;
                        })
                        .map((item, index) => {
                          return <ItemMyVehicle key={index} item={item} />;
                        })}
                    </>
                  )}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
