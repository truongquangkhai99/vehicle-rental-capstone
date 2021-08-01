import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormLabel, Row, Col, Button } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { AiFillStar, AiOutlineQuestionCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import "react-datepicker/dist/react-datepicker.css";
import ItemFind from "components/find/ItemFind";
import { useSelector } from "react-redux";
import { DistanceMatrixService } from "@react-google-maps/api";
import vehicleApi from "api/vehicleApi";
export default function FindPage() {
  const [isShowExtra, setIsShowExtra] = useState(true);
  const [styleExtra, setStyleExtra] = useState({ display: "none" });
  const [resultSreach, setResultSreach] = useState([]);
  const [isFresh, setIsFresh] = useState(true);
  const [listLocationVehicle, setListLocationVehicle] = useState([]);
  const [listVehicle, setListVehicle] = useState([]);
  const handleClick = function () {
    if (!isShowExtra) {
      setStyleExtra({ display: "none" });
    } else {
      setStyleExtra({ display: "block" });
    }
    return setIsShowExtra(!isShowExtra);
  };
  // @ts-ignore
  const searchInput = useSelector((state) => state.searched);

  useEffect(() => {
    const runEffect = async () => {
      const list = await getListVehicles(
        searchInput.selfDrive,
        searchInput.withDrive,
        searchInput.intercityCar
      );
      setListVehicle(list);
      setListLocationVehicle(getListLocation(list));
      console.log(12312, resultSreach);
    };
    runEffect();
  }, []);
  // var listVehicle = [
  //     {
  //         id: 1,
  //         name: "xe A",
  //         location: {
  //             latitude: "16.04765299496521",
  //             longitude: "108.21890939151176",
  //         }
  //     },
  //     {
  //         id: 2,
  //         name: "xe B",
  //         location: {
  //             latitude: "16.070087935507395",
  //             longitude: "108.221484312158",
  //         }
  //     },
  //     {
  //         id: 3,
  //         name: "xe C",
  //         location: {
  //             latitude: "16.033134921877576",
  //             longitude: "108.22800744446177",
  //         }
  //     },
  //     {
  //         id: 4,
  //         name: "xe D",
  //         location: {
  //             latitude: "16.075366377435078",
  //             longitude: "108.17530740190229",
  //         }
  //     }
  // ]
  // var listLocationVehicle = getListLocation(listVehicle);
  const url = "#";
  console.log(1, listLocationVehicle);
  return (
    <>
      {isFresh && searchInput?.startLocal !== "" && (
        <DistanceMatrixService
          options={{
            destinations: listLocationVehicle,
            origins: [searchInput.startLocal],
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            if (response) {
              var rs = getListDistanceVehicles(response, listVehicle);
              setResultSreach(rs);
              setIsFresh(false);
            }
          }}
        />
      )}
      <div id="find-page">
        <div className="find">
          <Row className="find__header">
            <Col className="find__header-location" lg={4} id="heading">
              <label htmlFor="">Địa điểm:</label>
              <h5>{searchInput.startLocal}</h5>
            </Col>
            <Col className="find__header-start" lg={4} id="heading">
              <label htmlFor="">Bắt đầu:</label>
              <div className="date-start" id="date">
                <h5>{searchInput.startDate}</h5>
              </div>
              <div className="time-start ms-3">
                <h5>{searchInput.startTime}</h5>
              </div>
            </Col>
            <Col className="find__header-end" lg={4} id="heading">
              <label htmlFor="">Kết thúc:</label>
              <div className="date-end" id="date">
                <h5>{searchInput.startDate}</h5>
              </div>
              <div className="time-end ms-3">
                <h5>{searchInput.startTime}</h5>
              </div>
            </Col>
          </Row>
          <Row className="find__content">
            <Col className="find__content-options" lg={4}>
              <Form>
                <FormGroup id="group" className="mb-4">
                  <FormLabel id="lable">Sắp xếp</FormLabel>
                  <select
                    className="form-select form-select-md mb-3"
                    defaultValue="Tối ưu"
                  >
                    <option>Tối ưu</option>
                    <option>Ưu tiên khoảng cách</option>
                    <option>Ưu tiên giá thấp</option>
                    <option>Ưu tiên giá cao</option>
                    <option>Ưu tiên đánh giá</option>
                  </select>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormLabel id="lable">Mức giá</FormLabel>
                  <FormRange></FormRange>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormCheckInput></FormCheckInput>
                  <FormCheckLabel className="check-lable">
                    <span>Chủ xe 5</span>
                    <span id="icon-star">
                      <AiFillStar />
                    </span>
                    <span id="icon-ques">
                      <AiOutlineQuestionCircle />
                    </span>
                  </FormCheckLabel>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormLabel id="lable">Loại xe</FormLabel>
                  <Row>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          4 chỗ
                          <br />
                          (Mini)
                        </span>
                        <span className="having-number">(155 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-sedan.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          4 chỗ <br />
                          (Sedan)
                        </span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-hatchback.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          4 chỗ
                          <br />
                          (Hatchback)
                        </span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-5-suv.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          5 chỗ
                          <br />
                          (Gầm cao)
                        </span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-7-suv.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          7 chỗ
                          <br />
                          (Gầm cao)
                        </span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-7-mpv.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">
                          7 chỗ
                          <br />
                          (Gầm thấp)
                        </span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-pickup.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">Bán tải</span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">Xe máy</span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                    <Col lg={4}>
                      <a className="element-a" href={url}>
                        <div className="find__content-options-img">
                          <img
                            src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-mini.png"
                            alt=""
                          />
                        </div>
                        <span className="seat-number">Moto</span>
                        <span className="having-number">(100 xe)</span>
                      </a>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormLabel id="lable">Hãng xe</FormLabel>
                  <select
                    className="form-select form-select-md mb-3"
                    defaultValue="all"
                  >
                    <option value="all">Tất cả</option>
                    <option value="">BMW</option>
                    <option value="">Honda</option>
                  </select>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormLabel id="lable">Truyền động</FormLabel>
                  <select
                    className="form-select form-select-md mb-3"
                    defaultValue="all"
                  >
                    <option value="all">Tất cả</option>
                    <option value="">Số sàn</option>
                    <option value="">Số tự động</option>
                  </select>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormCheckInput></FormCheckInput>
                  <FormCheckLabel className="check-lable">
                    Đặt xe nhanh
                  </FormCheckLabel>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormCheckInput></FormCheckInput>
                  <FormCheckLabel className="check-lable">
                    Chấp nhận passport
                  </FormCheckLabel>
                </FormGroup>
                <FormGroup id="group" className="mb-4">
                  <FormCheckInput></FormCheckInput>
                  <FormCheckLabel className="check-lable">
                    Hỗ trợ bảo hiểm
                  </FormCheckLabel>
                </FormGroup>
                <FormGroup
                  id="group"
                  className="mb-4"
                  style={{ textAlign: "right", color: "#00a54f" }}
                >
                  <FormLabel
                    id="lable"
                    className="option-extra"
                    onClick={handleClick}
                  >
                    Nâng cao
                  </FormLabel>
                </FormGroup>
                <div className="find__content-options-extra" style={styleExtra}>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Số chỗ</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Năm sản xuất</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Giao xe tận nơi
                    </FormCheckLabel>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Nhiên liệu</FormLabel>
                    <select
                      className="form-select form-select-md mb-3"
                      defaultValue="all"
                    >
                      <option value="all">Tất cả</option>
                      <option value="">Xăng</option>
                      <option value="">Dầu</option>
                    </select>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Mức tiêu thụ nhiên liệu</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Tính năng</FormLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Cửa sổ trời
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Bluetooth
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Định vị GPS
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Khe căm USB
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Ghế trẻ em
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Bản đồ
                    </FormCheckLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Camera lùi
                    </FormCheckLabel>
                    <br />
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Giới hạng số KM</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Phí vượt giới hạn</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Khoảng cách</FormLabel>
                    <FormRange></FormRange>
                  </FormGroup>
                  <FormGroup id="group" className="mb-4">
                    <FormLabel id="lable">Hình ảnh</FormLabel>
                    <br />
                    <FormCheckInput></FormCheckInput>
                    <FormCheckLabel className="check-lable">
                      Đã xác thực
                    </FormCheckLabel>
                  </FormGroup>
                </div>
                <Button type="reset" className="w-100">
                  {" "}
                  <span id="icon-reset">
                    <GrPowerReset style={{ color: "#00a54f" }} />
                  </span>
                  Bỏ lọc
                </Button>
              </Form>
            </Col>
            <Col className="find__content-items" lg={8}>
              <Row className="items">
                {resultSreach.length > 0 ? (
                  resultSreach.map((item, index) => (
                    <ItemFind key={index} props={item} />
                  ))
                ) : (
                  <h1 className="text-center mt-5 text-danger">
                    Không tìm thấy kết quả!
                  </h1>
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

async function getListVehicles(selfCar, withCar, intercityCar) {
  var l1 = await vehicleApi.getCarSelfDriver();
  var l2 = await vehicleApi.getCarDriver();
  var l3 = await vehicleApi.getBikes();

  var rs = [];
  if (selfCar) {
    rs.concat(l1.data);
    console.log(5656, typeof l1.data);
  }
    if (withCar) {
      rs.concat(l2.data);
    }
    if (intercityCar) {
      rs.concat(l3.data);
    }
    if (selfCar === false && withCar === false && intercityCar === false) {
      rs.concat(l1.data, l2.data, l3.data);
    }
  return l1.data;
}
function getListLocation(list) {
  var rsLatLng = [];
  if (list.length > 0) {
    list.forEach((e) => {
      var item = {
        lat: parseFloat(e.location.latitude),
        lng: parseFloat(e.location.longitude),
      };
      rsLatLng.push(item);
    });
  }
  return rsLatLng;
}
function getListDistanceVehicles(response, listVehicles) {
  var list = [];
  var desList = response.destinationAddresses;
  var oriList = response.originAddresses;
  var num = desList.length;
  var rowList = response.rows[0].elements;
  for (var i = 0; i < num; i++) {
    var item = {
      id: i,
      des: desList[i],
      ori: oriList[0],
      dis: rowList[i].distance.text,
      dur: rowList[i].duration.text,
      vehicle: listVehicles[i],
    };
    list.push(item);
  }
  return list;
}
