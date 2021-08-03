import React from 'react'
import { Row, Col, Form, Button, FormGroup, FormLabel, } from 'react-bootstrap'
import { GiCarSeat, GiGears, GiGasPump, GiFuelTank, GiUsbKey } from 'react-icons/gi'
import { AiFillStar, } from 'react-icons/ai'
import DatePicker from 'react-datepicker'
import ItemReport from 'components/vehicle/ItemReport'
import { FaBluetooth, FaMap } from 'react-icons/fa'
import { RiGpsFill } from 'react-icons/ri'
import { HiVideoCamera } from 'react-icons/hi'
import TabWithDriver from 'components/withdriver/TabWithDriver'


export default function WithDriverPage() {
    return (
        <>
            <div className="vehicle">
                <div className="vehicle__header">
                    <img src="https://www.w3schools.com/css/paris.jpg" alt="" />
                </div>
                <Row className="vehicle__body container">
                    <Col lg={7} className="vehicle__body-content">
                        <div className="heading">
                            <h1 className="title-vehicle">TOYOTA INNOVA 2018</h1>
                            <div className="status-vehicle">
                                <span className="star-ratings">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </span>
                                <span>---------</span>
                                <span className="number-trips">1 chuyến</span>
                            </div>
                        </div>
                        <div className="desc">
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">ĐẶC ĐIỂM</Col>
                                <Col lg={9} className="desc-content">
                                    <Row>
                                        <Col lg={6} className="mb-3">
                                            <span><i id="icon-vehicle" style={{ top: "-21%", marginRight: "0" }}><GiCarSeat /></i> Số ghế: 4</span>
                                        </Col>
                                        <Col lg={6} className="mb-3">
                                            <span><i id="icon-vehicle" style={{ top: "-21%" }}><GiGears /></i>Truyền động: Số sàn</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><GiFuelTank /></i>Nhiên liệu: Xăng</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><GiGasPump /></i>Mức tiêu thụ nhiêu liệu: 7 lít/100km</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">MÔ TẢ</Col>
                                <Col lg={9} className="desc-content">Toyota Vios số sàn,nhiên liệu xăng, xe đẹp trang bị camera lùi, loa nghe nhạc cực đỉnh.</Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">TÍNH NĂNG</Col>
                                <Col lg={9} className="desc-content">
                                    <Row>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><FaBluetooth /></i>Bluetooth</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><RiGpsFill /></i>Định vị GPS</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><GiUsbKey /></i>Khe cắm USB</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><FaMap /></i>Bản đồ</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><HiVideoCamera /></i>Camera lùi</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">ĐIỀU KHOẢN</Col>
                                <Col lg={9} className="desc-content">
                                    <span>
                                        1. Qúy khách vui lòng không hút thuốc trên xe hoặc mang các thực phẩm có mùi <br />
                                        2. Để đảm bảo thời gian đón khách đúng giờ và tránh tắc đường, tài xế chỉ đón khách tại điểm đã đặt xe hoặc điểm thay thế <br />
                                        3. Trong trường hợp khách thuê thay đổi lộ trình chuyến đi, vui lòng báo trước với tài xế để chuẩn bị và chăm sóc tốt hơn <br />
                                        Chúc Quý Khách chuyến đi vui vẻ !
                                    </span>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">CHỦ XE</Col>
                                <Col lg={9} className="desc-content">
                                    <Row className="infor-owner">
                                        <Col lg={3} className="avatar-owner">
                                            <img src="https://www.w3schools.com/css/paris.jpg" alt="" />
                                        </Col>
                                        <Col lg={9} className="status-owner">
                                            <a href="/account" id="owner-name">
                                                <h4>Vũ Hoàng Minh</h4>
                                            </a>
                                            <span className="star-ratings">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                            </span><br />
                                            <span className="note">Lưu ý: Số điện thoại của chủ xe sẽ được hiển thị sau khi đặt cọc.</span>
                                        </Col>
                                    </Row>
                                    <div className="response-desc">
                                        <p>Tỉ lệ phản hồi</p>
                                        <span className="rate">90%</span>
                                    </div>
                                    <div className="response-desc">
                                        <p>Thời gian phản hồi</p>
                                        <span className="rate">0.1 tiếng</span>
                                    </div>
                                    <div className="response-desc">
                                        <p>Tỉ lệ đồng ý</p>
                                        <span className="rate">88%</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col lg={6}>
                                    <Button className="report-btn">Báo xấu</Button>
                                </Col>
                                <Col lg={6}>
                                    <Button className="addFavs-btn">Thêm vào yêu thích</Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="review">
                            <div className="review-heading">
                                <h3>ĐÁNH GIÁ</h3>
                                <div className="status-vehicle">
                                    <span className="star-ratings">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>
                                    <span>---------</span>
                                    <span className="number-report">12 đánh giá</span>
                                </div>
                            </div>
                            <div className="review-content">
                                <ItemReport />
                                <ItemReport />
                                <ItemReport />
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} className="vehicle__body-sidebar">
                        <Form id="sidebar">
                            <div className="price-vehicle">
                                <span className="price">614k</span>
                                <span className="unit">/chuyến</span>
                            </div>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Thời gian</FormLabel>
                                <Row id="date-time">
                                    <Col lg={7} className="date-time">
                                        <DatePicker
                                            // @ts-ignore
                                            selected={Date.now()} />
                                    </Col>
                                    <Col lg={5} className="date-time">
                                        <select defaultValue="00:00">
                                            <option value="">00:00</option>
                                            <option value="">01:00</option>
                                            <option value="">02:00</option>
                                        </select>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <select className="form-select form-select-md mb-3" defaultValue="4h">
                                    <option value="2h">2 tiếng</option>
                                    <option value="4h">4 tiếng</option>
                                    <option value="6h">6 tiếng</option>
                                    <option value="8h">8 tiếng</option>
                                    <option value="10h">10 tiếng</option>
                                    <option value="12h">12 tiếng</option>
                                    <option value="14h">14 tiếng</option>
                                </select>
                            </FormGroup>
                            <div className="date-time-end mb-3">
                                <span>Thời gian kết thúc </span>
                                <span className="time-end">12:00 </span>
                                <span className="date-end">26/06/2021</span>
                            </div>
                            <FormGroup className="mb-3">
                                <TabWithDriver />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Thông tin lộ trình</FormLabel>
                                <br />
                                <span>Phí phụ thu vượt <span className="line-bold">80</span> km: <span className="line-bold">15k</span>/h</span>
                                <br />
                                <span>Phí phụ thu vượt <span className="line-bold">4</span> giờ: <span className="line-bold">60k</span>/giờ</span>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Thông tin đưa đón</FormLabel>
                                <br />
                                <span>Hỗ trợ đưa đón trong vòng <span className="line-bold">20</span> km</span>
                                <br />
                                <span>Phí đưa đón <span className="line-bold">15k</span>/km</span>
                                <br />
                                <span>Miễn phí đưa đón trong vòng <span className="line-bold">5</span> km</span>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Chi tiết giá</FormLabel>
                                <div className="bill">
                                    <div className="bill-item" style={{ borderBottom: "1px solid #a9aaad" }}>
                                        <span>Đơn giá thuê</span>
                                        <span>627 000đ</span>
                                    </div>
                                    <div className="bill-item">
                                        <span className="line-bold">Tổng cộng</span>
                                        <span className="line-bold">627 000đ</span>
                                    </div>
                                    <br />
                                    <a href="" style={{ float: "right", textDecoration: "none", color: "#56A8FF" }}>Mã khuyến mãi</a>
                                    <Button className="mt-5">Đặt xe</Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    )
}