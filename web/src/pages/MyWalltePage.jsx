import React from 'react'
import { AiFillCar, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

export default function MyWalltePage() {
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
                            <span>
                                <i><AiOutlinePlusCircle /></i>
                                <span>Đăng kí xe</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mywallet" className="border-left">
                            <span style={{ color: "#00a54f" }}>
                                <i><BiWallet /></i>
                                <span>Số dư: <span id="line-bold">0đ</span></span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-wallet">
                <div className="my-wallet-heading">
                    <h4>BẢNG TỔNG HỢP GIAO DỊCH</h4>
                    <select defaultValue="all">
                        <option>Tháng 07-2021</option>
                        <option>Tháng 06-2021</option>
                        <option>Tháng 05-2021</option>
                        <option>Tháng 03-2021</option>
                        <option>Tháng 02-2021</option>
                        <option>Tháng 01-2021</option>
                        <option>Tháng 12-2020</option>
                    </select>
                </div>
                <div className="my-wallet-form">
                    <div className="my-wallet-body">
                        <h1 className="wallet-number">0đ</h1>
                        <p>Số dư hiện tại</p>
                        <Row>
                            <Col lg={3} className="info-display">
                                <h2>0.0</h2>
                                <p>Đánh giá</p>
                            </Col>
                            <Col lg={3} className="info-display">
                                <h2>0</h2>
                                <p>Chuyến đi thành công</p>
                            </Col>
                            <Col lg={6}>
                                <Row className="info-display-items">
                                    <Col lg={3}>
                                        <div className="info-display-item">
                                            <h2>_</h2>
                                            <p>Tỉ lệ phản hồi</p>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="info-display-item">
                                            <h2>_</h2>
                                            <p>Thời gian phản hồi</p>
                                        </div>
                                    </Col>
                                    <Col lg={3}>
                                        <div className="info-display-item">
                                            <h2>_</h2>
                                            <p>Tỉ lệ đồng ý</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-5 desc-wallet">
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <p>Mã chuyến đi</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Hình thức</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Ngày đi</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Ngày về</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col lg={3}>
                                        <p>Đơn giá thuê</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Doanh thu chủ xe</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Tiền đã nhận</p>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Thay đổi số dư</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <div className="summary-change mt-4">
                            <p>Tổng thay đổi - Chuyến đi hoàn thành</p>
                            <p>0đ</p>
                        </div>
                        <div className="summary-change mt-4">
                            <p>Tổng thay đổi - Giao dịch rút/nộp tiền</p>
                            <p>0đ</p>
                        </div>
                        <div className="summary-change mt-4">
                            <p>Tổng thay đổi - Giao dịch hủy chuyến</p>
                            <p>0đ</p>
                        </div>
                        <div className="group-summary mt-4">
                            <div className="summary-change">
                                <p>TỔNG CỘNG THAY ĐỔI TRONG KÌ</p>
                                <p>0đ</p>
                            </div>
                            <div className="summary-change">
                                <p>TIỀN ĐẦU KÌ</p>
                                <p>0đ</p>
                            </div>
                            <div className="summary-change">
                                <p>TIỀN CUỐI KÌ</p>
                                <p style={{ color: "#00a54f" }}>0đ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-wallet-footing mt-4">
                    <Row>
                        <Col lg={6}>
                            <Button className="left-btn">Gửi yêu cầu rút tiền</Button>
                        </Col>
                        <Col lg={6}>
                            <Button className="right-btn">Xem sao kê chi tiết giao dịch</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}