import React from 'react'
import { Row, Col, Form, Button, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { GiGears, GiPassport, GiFuelTank } from 'react-icons/gi'
import { AiFillStar, AiOutlineFileProtect } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { GrLocation } from 'react-icons/gr'
import DatePicker from 'react-datepicker'
import ItemReport from 'components/vehicle/ItemReport'
import GoogleMapReact from 'google-map-react'

export default function BikePage() {
    return (
        <>
            <div className="vehicle">
                <div className="vehicle__header">
                    <img src="https://www.w3schools.com/css/paris.jpg" alt="" />
                </div>
                <Row className="vehicle__body container">
                    <Col lg={7} className="vehicle__body-content">
                        <div className="heading">
                            <h1 className="title-vehicle">HONDA SH 150i</h1>
                            <div className="status-vehicle">
                                <span className="star-ratings">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </span>
                                <span>---------</span>
                                <span className="number-trips">12 chuyến</span>
                            </div>
                            <div className="footer-vehicle">
                                <span>Tay ga</span>
                                <span>Giao xe tận nơi</span>
                            </div>
                        </div>
                        <div className="desc">
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">ĐẶC ĐIỂM</Col>
                                <Col lg={9} className="desc-content">
                                    <Row>
                                        <Col lg={6} className="mb-3">
                                            <span><i id="icon-vehicle" style={{ top: "-21%" }}><GiGears /></i>Loại xe: Tay ga</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle" style={{ top: "-10%" }}><GiFuelTank /></i>Nhiên liệu: Xăng</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">MÔ TẢ</Col>
                                <Col lg={9} className="desc-content">SH150i – một kiệt tác thiết kế mới sang trọng và đẳng cấp hơn với những đường nét đậm chất châu Âu, chinh phục mọi con tim ngay từ ánh nhìn đầu tiên.</Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">GIẤY TỜ THUÊ XE (BẢN GỐC)</Col>
                                <Col lg={9} className="desc-content">
                                    <Row>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><ImProfile /></i>CMND và GPLX (đối chiếu)</span>
                                        </Col>
                                        <Col lg={6}>
                                            <span><i id="icon-vehicle"><GiPassport /></i>Hộ Khẩu hoặc KT3 hoặc Passport (giữ lại)</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">TÀI SẢN THẾ CHẤP</Col>
                                <Col lg={9} className="desc-content">
                                    <span>
                                        15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe)
                                        hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                                    </span>
                                </Col>
                            </Row>
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">ĐIỀU KHOẢN</Col>
                                <Col lg={9} className="desc-content">
                                    <span>1. Chấp nhận Hộ khẩu Thành phố/KT3 Thành phố/Hộ khẩu tỉnh/Passport (Bản gốc) (Giữ lại khi nhận xe)
                                    CMND và GPLX đối chiếu
                                    2. Tài sản đặt cọc (1 trong 2 hình thức)
                                    - Xe máy (giá trị &gt; 15triệu) + Cà vẹt (bản gốc)
                                    - Hoặc cọc tiền mặt 15 triệu.
                                        <br />
                                        <br />
                                    * Quý khách lưu ý một số qui định sau:
                                    Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật
                                    Không được sử dụng xe thuê để cầm cố hay thế chấp, sử dụng đúng mục đích
                                    Không hút thuốc,ăn kẹo cao su xả rác trong xe
                                    Không chở hàng quốc cấm dễ cháy nổ,hoa quả thưc phẩm lưu mùi trong xe.
                                    Khi trả xe, khách hàng vui lòng vệ sinh sạch sẽ hoặc gửi phụ thu thêm phí rửa xe, hút bụi nếu xe dơ. (sẽ thu nhiều hơn tuỳ theo mức độ dơ)
                                    Trân trọng cảm ơn, chúc quý khách có những chuyến đi tuyệt vời!</span>
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
                            <Row className="desc-item">
                                <Col lg={3} className="desc-title">VỊ TRÍ</Col>
                                <Col lg={9} className="desc-content">
                                    <div className="map" style={{ height: "200px" }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: "AIzaSyCl-VoCEBsPXrdreQzdsapPNrXGpOTFCWo" }}
                                            defaultZoom={10}
                                            defaultCenter={{ lat: 16.054407, lng: 108.202164 }}
                                        />
                                    </div>
                                    <span><i id="icon-vehicle" style={{ top: "-2px" }}><GrLocation /></i>Quận Hải Châu, Đà Nẵng, Việt Nam</span>
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
                                <span className="price">550k</span>
                                <span className="unit">/ngày</span>
                            </div>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Ngày bắt đầu</FormLabel>
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
                                <FormLabel className="lable-form">Ngày kết thúc</FormLabel>
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
                            <div id="line-form" className="mb-3">
                                <div id="line-item">
                                    <span>Thời gian nhận xe</span>
                                    <span>06:00-23:00</span>
                                </div>
                                <div id="line-item">
                                    <span>Thời gian trả xe</span>
                                    <span>06:00-23:00</span>
                                </div>
                            </div>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Địa điểm giao nhận xe</FormLabel>
                                <a href="" style={{ float: "right", fontSize: "13px" }}>Thay đổi</a>
                                <br />
                                <span className="local-sidebar"><i id="icon-vehicle"><GrLocation /></i>Quận Hải Châu, Đà Nẵng</span>
                                <br />
                                <FormText muted>Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc</FormText>
                            </FormGroup>
                            <div id="line-form" className="mb-3">
                                <div id="line-item">
                                    <span>Dịch vụ giao xe tận nơi</span>
                                    <span>bán kính 10 km</span>
                                </div>
                                <div id="line-item">
                                    <span>Phí giao nhận xe (2 chiều)</span>
                                    <span>20 000đ/km</span>
                                </div>
                            </div>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Giới hạn số km</FormLabel>
                                <br />
                                <span>Tối đa <span className="line-bold">300</span> km/ngày. Phí <span className="line-bold">5k</span>/km vượt quá giới hạn.</span>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Bảo hiểm</FormLabel>
                                <br />
                                <a href="" className="line-insur">
                                    <span><AiOutlineFileProtect /> Chuyến đi được bảo hiểm bởi Pjico </span>
                                </a>
                                <a href="">Tìm hiểu thêm</a>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel className="lable-form">Chi tiết giá</FormLabel>
                                <div className="bill">
                                    <div className="bill-item">
                                        <span>Đơn giá thuê</span>
                                        <span>550 000 / ngày</span>
                                    </div>
                                    <div className="bill-item">
                                        <span>Phí dịch vụ</span>
                                        <span>38 500 / ngày</span>
                                    </div>
                                    <div className="bill-item">
                                        <span>Phí bảo hiểm</span>
                                        <span>38 500 / ngày</span>
                                    </div>
                                    <div className="bill-item" id="total">
                                        <span>Tổng phí thuê xe</span>
                                        <span>627 000 x <span className="line-bold">1 ngày</span></span>
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