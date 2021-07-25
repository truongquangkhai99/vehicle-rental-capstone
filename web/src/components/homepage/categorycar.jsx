// @ts-nocheck
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
export default function Categorycar() {
    return (
        <Row>
            <Col>
                <div className="tab">
                    <marquee width="100%" direction="left">
                        SHARE-OTO ĐI CÙNG BẠN TRÊN MỌI NẺO ĐƯỜNG!
                    </marquee>
                    <Row>
                        <Col>
                            <div className="tab-card1 hinh1">
                                <h1>Xe Du Lịch</h1>
                                <h3>Nào cùng vi vu</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="tab-card1 hinh2" >
                                <h1>Xe Đám Cưới</h1>
                                <h3>Nhà ai pháo đỏ thiệp hồng</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="tab-card1 hinh3">
                                <h1>Xe Tải </h1>
                                <h3>Khủng long thồ hàng</h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="tab-card1 hinh4">
                                <h1>Xe Máy </h1>
                                <h3>Lang thang một mình</h3>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
