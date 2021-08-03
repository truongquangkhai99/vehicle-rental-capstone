import React from 'react'
import { AiFillCar, AiOutlinePlusCircle, AiOutlineRight } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, FormLabel, FormControl, FormCheck, FormText } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import { FaMap } from 'react-icons/fa'
import Address from './Address'

export default function RegisterVehicleSecond() {
    const [isShowAddress, setIsShowAddress] = React.useState(false)
    return (
        <>
            <div id="nav-control">
                <ul>
                    <li>
                        <Link to="/myvehicles">
                            <span>
                                <i><AiFillCar /></i>
                                <span>Danh sách xe</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/registermode" className="border-left">
                            <span style={{ color: "#00a54f" }}>
                                <i><AiOutlinePlusCircle /></i>
                                <span>Đăng kí xe</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mywallet" className="border-left">
                            <span>
                                <i><BiWallet /></i>
                                <span>Số dư: <span id="line-bold">0đ</span></span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="register-vehicle">
                <div className="register-heading">
                    <Row>
                        <Col lg={4} className="register-heading-tab">
                            <div className="tab-number" >1</div>
                            <p>Thông tin</p>
                            <i className="icon-after"><AiOutlineRight /></i>
                        </Col>
                        <Col lg={4} className="register-heading-tab">
                            <div className="tab-number" style={{ backgroundColor: "#00A54F" }}>2</div>
                            <p>Cho thuê</p>
                            <i className="icon-after"><AiOutlineRight /></i>
                        </Col>
                        <Col lg={4} className="register-heading-tab">
                            <div className="tab-number">3</div>
                            <p>Hình ảnh</p>
                        </Col>
                    </Row>
                </div>
                <div className="register-body mt-2">
                    <Form className="register-form">
                        <FormGroup className="mb-4">
                            <FormLabel>Đơn giá thuê mặc định</FormLabel><br />
                            <span style={{ color: "gray", fontSize: "13px" }}>Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác cho các ngày đặc biệt (cuối tuần, lễ, tết...)
                            trong mục quản lý xe sau khi đăng kí. <br /> <br />Giá đề xuất: 3320K
                            </span>
                            <FormControl type="text" placeholder="3320k" className="mt-3" />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Giảm giá</FormLabel>
                            <FormCheck
                                className="form-switch discount"
                                style={{ float: "right", fontSize: "20px" }}
                            />
                            <Row>
                                <Col lg={6}>
                                    <FormText muted>Giảm giá thuê tuần (% trên đơn giá)</FormText>
                                    <FormRange />
                                </Col>
                                <Col lg={6}>
                                    <FormText muted>Giảm giá thuê tháng (% trên đơn giá)</FormText>
                                    <FormRange />
                                </Col>
                            </Row>
                        </FormGroup>
                        <hr />
                        <FormGroup className="mb-3 mt-4">
                            <FormLabel>Đặt xe nhanh</FormLabel>
                            <FormCheck
                                className="form-switch"
                                style={{ float: "right", fontSize: "20px" }}
                            /><br />
                            <span style={{ color: "red", fontSize: "13px" }}>
                                Bật tính năng cho phép khách hàng đặt xe ngay lập tức không cần chủ xe phê duyệt.
                                (Phù hợp với chủ xe không thường xuyên online hoặc kiểm tra điện thoại)
                            </span>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Địa chỉ xe</FormLabel>
                            <Row className="address-vehicle">
                                <Col lg={11}>
                                    <FormControl type="text" disabled placeholder="Địa chỉ mặc định để giao nhận xe" />
                                </Col>
                                <Col lg={1}>
                                    <a className="icon-map-vehicle" onClick={() => setIsShowAddress(true)}>
                                        <i><FaMap /></i>
                                    </a>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Giao xe tận nơi</FormLabel>
                            <FormCheck
                                className="form-switch"
                                style={{ float: "right", fontSize: "20px" }}
                            />
                            <Row>
                                <Col lg={6}>
                                    <FormText muted>Quảng đường giao xe tối đa</FormText>
                                    <FormRange />
                                </Col>
                                <Col lg={6}>
                                    <FormText muted>Phí giao nhận xe cho mỗi km</FormText>
                                    <FormRange />
                                </Col>
                                <Col lg={6}>
                                    <FormText muted>Miễn phí giao nhận xe trong vòng</FormText>
                                    <FormRange />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Giới hạn số km</FormLabel>
                            <FormCheck
                                className="form-switch"
                                style={{ float: "right", fontSize: "20px" }}
                            />
                            <Row>
                                <Col lg={6}>
                                    <FormText muted>Số km tối đa trong một ngày</FormText>
                                    <FormRange />
                                </Col>
                                <Col lg={6}>
                                    <FormText muted>Phí vượt giới hạn (tính mỗi km)</FormText>
                                    <FormRange />
                                </Col>
                            </Row>
                        </FormGroup>
                        <hr />
                        <FormGroup className="mb-3 mt-4">
                            <FormLabel>Điều khoản thuê xe</FormLabel> <br />
                            <span style={{ color: "gray", fontSize: "13px" }}>
                                Ghi rõ các yêu cầu để khách có thể thuê xe.
                            </span> <br />
                            <textarea rows={3}></textarea>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            <Address showAddress={isShowAddress} handleClose={() => setIsShowAddress(false)} />
        </>
    )
}