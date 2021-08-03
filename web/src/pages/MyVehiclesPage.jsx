import React from 'react'
import { AiFillCar, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiWallet } from 'react-icons/bi'
import { Row, Col, FormGroup, FormLabel } from 'react-bootstrap'
import ItemMyVehicle from 'components/myvehicle/ItemMyVehicle'
import { Link } from 'react-router-dom'

export default function MyVehiclesPage() {
    return (
        <>
            <div id="nav-control">
                <ul>
                    <li>
                        <Link to="/myvehicles">
                            <span style={{ color: "#00a54f" }}>
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
                            <span>
                                <i><BiWallet /></i>
                                <span>Số dư: <span id="line-bold">0đ</span></span>
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
                                <select className="form-select form-select-md" defaultValue="all">
                                    <option>Tất cả</option>
                                    <option>Đang hoạt động</option>
                                    <option>Đang chờ duyệt</option>
                                    <option>Đã bị từ chối</option>
                                    <option>Đang tạm dừng</option>
                                </select>
                            </FormGroup>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="my-vehicles-items mt-5">
                            <ItemMyVehicle />
                            <ItemMyVehicle />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}