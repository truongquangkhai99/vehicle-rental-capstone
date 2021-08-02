import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'

export default function ItemMyVehicle() {
    return (
        <>
            <Row className="item-vehicle mb-3">
                <Col lg={6}>
                    <div className="img-item">
                        <div className="img-item-main">
                            <img src="https://autopro8.mediacdn.vn/2018/6/27/dsc01740-15301058484271845673952.jpg"></img>
                            <span className="img-status">Đang hoạt động</span>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="content-item">
                        <div className="content-item-desc">
                            <div className="name-vehicle">BMW I8</div>
                            <div className="content-item-rating">
                                <div className="content-item-rating-star">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <span>0 chuyến</span>
                            </div>
                            <div className="content-item-price">
                                <span>Giá tự lái: </span>
                                <span className="price">600k</span>
                            </div>
                            <div className="content-item-local">
                                <span><i className="icon-local"><GrLocation /></i>Quận Hải Châu, Đà Nẵng</span>
                            </div>
                        </div>
                        <div className="content-item-btn">
                            <hr />
                            <Row>
                                <Col lg={6}>
                                    <Button className="details-btn">Xem chi tiết</Button>
                                </Col>
                                <Col lg={6}>
                                    <Button className="manage-btn">Quản lý xe</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}