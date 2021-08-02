import React from 'react'
import { AiFillCar, AiOutlinePlusCircle, AiOutlineRight } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, FormLabel, FormText, FormControl } from 'react-bootstrap'

export default function RegisterVehicleThird() {
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
                            <div className="tab-number" >2</div>
                            <p>Cho thuê</p>
                            <i className="icon-after"><AiOutlineRight /></i>
                        </Col>
                        <Col lg={4} className="register-heading-tab">
                            <div className="tab-number" style={{ backgroundColor: "#00A54F" }}>3</div>
                            <p>Hình ảnh</p>
                        </Col>
                    </Row>
                </div>
                <div className="register-body mt-2">
                    <Form className="register-form">
                        <FormGroup className="mb-3">
                            <FormLabel>Hình ảnh</FormLabel> <br />
                            <FormText>Đăng nhiều hình ở các góc độ khác nhau để tăng thông tin cho xe của bạn.</FormText>
                            <FormControl type="file" />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    )
}