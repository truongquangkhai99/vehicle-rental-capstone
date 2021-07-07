// @ts-nocheck
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Rating from 'react-rating'
import { IoLocation ,IoPricetagsSharp,AiFillSetting,RiNumbersFill} from 'react-icons/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import xe5 from '../../assets/images/xe5.jpg'
import xe6 from '../../assets/images/xe6.jpg'
import xe7 from '../../assets/images/xe7.jpg'
import xe8 from '../../assets/images/xe8.jpg'
import xe9 from '../../assets/images/xe9.jpg'
import xe10 from '../../assets/images/xe10.jpg'
import xe11 from '../../assets/images/xe11.jpg'
import xe12 from '../../assets/images/xe12.jpg'
import xe13 from '../../assets/images/xe13.jpg'
import xe14 from '../../assets/images/xe14.jpg'
import xe15 from '../../assets/images/xe15.jpg'
import xe16 from '../../assets/images/xe16.jpg'
import starempty from '../../assets/images/star-empty.png'
import starfull from '../../assets/images/star-full.png'
const slideLocal3 = [
    { src: xe5, title: 'Mercedes-Benz S450', rate: 5, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe6, title: 'Mercedes-Benz S450', rate: 3.5, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe7, title: 'Mercedes-Benz S450', rate: 4, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe8, title: 'Mercedes-Benz S450', rate: 4.5, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe9, title: 'Mercedes-Benz S450', rate: 4.7, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe10, title: 'Mercedes-Benz S450', rate: 3.9, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe11, title: 'Mercedes-Benz S450', rate: 4.3, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe12, title: 'Mercedes-Benz S450', rate: 4.8, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe13, title: 'Mercedes-Benz S450', rate: 4.9, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe14, title: 'Mercedes-Benz S450', rate: 5, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe15, title: 'Mercedes-Benz S450', rate: 4, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' },
    { src: xe16, title: 'Mercedes-Benz S450', rate: 4.5, price: '1000$', feature: ['Số tự động', 'Giao xe tận nơi'], address: 'Hải Châu-Đà Nẵng', quality: '50 chuyến' }

]
const settings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: true
};
export default function Featuredcar() {
    return (
        <div>
            <Row>
                <Col>
                    <div className="car-self-driver">
                        <p>XE NỔI BẬT-XE TỰ LÁI</p>
                        <div className="content-self-driver">
                            <Slider {...settings2}>
                                {slideLocal3.map(slider =>
                                    <div className="content-detail" key={slider.src}>
                                        <Link style={{ textDecoration: "none" }} to="/howitword">
                                            <img src={slider.src} alt='' />
                                            <h4 className="text-light">{slider.title}</h4>
                                            <Rating
                                                style={{ marginLeft: "1rem" }}
                                                initialRating={slider.rate}
                                                emptySymbol={<img src={starempty} className="icon" alt='' />}
                                                fullSymbol={<img src={starfull} className="icon" alt='' />}
                                                readonly />
                                            <p ><IoPricetagsSharp /> {slider.price}<span className="num-rental"><RiNumbersFill /> {slider.quality}</span></p>
                                            <p><IoLocation /> {slider.address}</p>
                                            <p><AiFillSetting /> {slider.feature[0]}-{slider.feature[1]}</p>
                                        </Link>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="car-self-driver">
                        <p>XE NỔI BẬT-XE CÓ TÀI XẾ</p>
                        <div className="content-self-driver">
                            <Slider {...settings2}>
                                {slideLocal3.map(slider =>
                                    <div className="content-detail" key={slider.src}>
                                        <Link style={{ textDecoration: "none" }} to="/howitword">
                                            <img src={slider.src} alt={slider.title} />
                                            <h4 className="text-light">{slider.title}</h4>
                                            <Rating
                                                style={{ marginLeft: "1rem" }}
                                                initialRating={slider.rate}
                                                emptySymbol={<img src={starempty} className="icon" alt='' />}
                                                fullSymbol={<img src={starfull} className="icon" alt='' />}
                                                readonly />
                                            <p ><IoPricetagsSharp /> {slider.price}<span className="num-rental"><RiNumbersFill /> {slider.quality}</span></p>
                                            <p><IoLocation /> {slider.address}</p>
                                            <p><AiFillSetting /> {slider.feature[0]}-{slider.feature[1]}</p>
                                        </Link>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
