import React from 'react'
import { AiFillCar, AiOutlinePlusCircle, AiOutlineRight } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Row, Col, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap'
import { FaBluetooth, FaMap } from 'react-icons/fa'
import { RiGpsFill } from 'react-icons/ri'
import { GiUsbKey } from 'react-icons/gi'
import { HiVideoCamera } from 'react-icons/hi'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function RegisterVehicleFirst() {
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
                            <div className="tab-number" style={{ backgroundColor: "#00A54F" }}>1</div>
                            <p>Thông tin</p>
                            <i className="icon-after"><AiOutlineRight /></i>
                        </Col>
                        <Col lg={4} className="register-heading-tab">
                            <div className="tab-number">2</div>
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
                    <Formik
                        initialValues={{ plates: "", fuel_consumption: "" }}
                        validationSchema={Yup.object({
                            plates: Yup.string()
                                .required('Đây là trường bắt buộc'),
                            fuel_consumption: Yup.string()
                                .required('Đây là trường bắt buộc')
                        })}
                        onSubmit={{}
                        }
                    >
                        <Form className="register-form">
                            <FormGroup className="mb-3">
                                <FormLabel>Biển số xe</FormLabel>
                                <Field name="plates">{({ field }) => (
                                    <FormControl type="text"{...field} />
                                )}
                                </Field>
                                <FormText className="text-danger"><ErrorMessage name="plates" /></FormText>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Thông tin cơ bản</FormLabel>
                                <Row>
                                    <Col lg={6}>
                                        <FormText muted>Hãng xe</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>Chọn hãng xe</option>
                                                <option>api</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormText muted>Mẫu xe</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>Chưa chọn</option>
                                                <option>api</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormText muted>Số ghế</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>4</option>
                                                <option>7</option>
                                                <option>12</option>
                                                <option>24</option>
                                                <option>32</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormText muted>Năm sản xuất</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                                <option>2021</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormText muted>Truyền động</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>Số tự động</option>
                                                <option>Số sàn</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg={6}>
                                        <FormText muted>Loại nhiên liệu</FormText>
                                        <FormGroup>
                                            <select className="form-select form-select-md mb-3">
                                                <option>Xăng</option>
                                                <option>Dầu diesel</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Mức tiêu thụ nhiên liệu</FormLabel> <br />
                                <FormText muted>Số lít nhiên liệu cho quãng đường 100km.</FormText>
                                <Field name="fuel_consumption">{({ field }) => (
                                    <FormControl type="text"{...field} />
                                )}
                                </Field>
                                <FormText className="text-danger"><ErrorMessage name="fuel_consumption" /></FormText>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Mô tả</FormLabel> <br />
                                <textarea rows={3}></textarea>
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Tính năng</FormLabel>
                                <Row>
                                    <Col lg={6} className="mb-3">
                                        <FormCheckInput type="checkbox" />
                                        <span><i className="icon-tools"><FaBluetooth /></i>Bluetooth</span>
                                    </Col>
                                    <Col lg={6} className="mb-3">
                                        <FormCheckInput type="checkbox" />
                                        <span><i className="icon-tools"><RiGpsFill /></i>Định vị GPS</span>
                                    </Col>
                                    <Col lg={6} className="mb-3">
                                        <FormCheckInput type="checkbox" />
                                        <span><i className="icon-tools"><GiUsbKey /></i>Khe cắm USB</span>
                                    </Col>
                                    <Col lg={6} className="mb-3">
                                        <FormCheckInput type="checkbox" />
                                        <span><i className="icon-tools"><FaMap /></i>Bản đồ</span>
                                    </Col>
                                    <Col lg={6} className="mb-3">
                                        <FormCheckInput type="checkbox" />
                                        <span><i className="icon-tools"><HiVideoCamera /></i>Camera lùi</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}