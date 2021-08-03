import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'

export default function ItemReport() {
    return (
        <>
            <div className="item-report">
                <Row>
                    <Col lg={3}>
                        <div className="avatar-user">
                            <a href="">
                                <img src="https://www.w3schools.com/css/paris.jpg" alt="" />
                            </a>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <a href="" className="name-user">Tuấn Thành</a><br />
                        <span className="report-user">
                            <span className="star-ratings">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                            <span className="time-report">2 tháng trước</span>
                        </span>
                        <p className="content">Tuyệt vời hơn cả mong đợi</p>
                        <span className="status-user">Tự lái</span>
                    </Col>
                </Row>
            </div>
        </>
    )
}