import React from 'react'
import { Col } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ItemFind(props) {
    const data = props.data
    return (
        <>
            <Col className="item" lg={6}>
                <Link to="/">
                    <div className="item__img">
                        <div className="item__img-main">
                            <img src="https://autopro8.mediacdn.vn/2018/6/27/dsc01740-15301058484271845673952.jpg" alt=""></img>
                        </div>
                        <div className="item__img-infor">
                            <div className="item__img-infor-price">900k</div>
                            <div className="item__img-infor-passport">
                                <span className="item__img-infor-passport-content">Chấp nhận passport</span>
                            </div>
                        </div>
                    </div>
                    <div className="item__decs">
                        <h2>BMW I8</h2>
                        <div className="item__decs-rating">
                            <div className="item__decs-rating-star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <span>4 chuyến</span>
                        </div>
                        <div className="item__decs-auto">
                            <span>Số tự động</span>
                        </div>
                        <div className="item__decs-local">
                            <div className="item__decs-local-icon"><GrLocation /></div>
                            <span>Q. Hải Châu, Đà Nẵng</span>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    )
}
