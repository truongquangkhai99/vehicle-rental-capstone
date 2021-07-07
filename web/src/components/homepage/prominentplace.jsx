import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lc1 from '../../assets/images/tphcm.jpg'
import lc2 from '../../assets/images/hanoi.jpg'
import lc3 from '../../assets/images/danang.jpg'
import lc4 from '../../assets/images/binhduong.jpg'
import lc5 from '../../assets/images/vungtau.jpg'
import lc6 from '../../assets/images/nhatrang.jpg'
import lc7 from '../../assets/images/dalat.jpg'
import lc8 from '../../assets/images/phuquoc.jpg'
import lc9 from '../../assets/images/haiphong.jpg'
import lc10 from '../../assets/images/quynhon.jpg'
import lc11 from '../../assets/images/cantho.jpg'
import lc12 from '../../assets/images/tphcm2.jpg'
import lc13 from '../../assets/images/hanoi2.jpg'
import lc14 from '../../assets/images/danang2.jpg'
import lc15 from '../../assets/images/binhduong2.jpg'
import lc16 from '../../assets/images/cantho2.jpg'
const settings1 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true

};
const slideLocal1 = [
    { src: lc1, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc2, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc3, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc4, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc5, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc6, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc7, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc8, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc9, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc10, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc11, title: 'Hồ Chí Minh', quality: '2000+' }
]
const slideLocal2 = [
    { src: lc12, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc13, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc14, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc15, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc16, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc16, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc16, title: 'Hồ Chí Minh', quality: '2000+' }
]
export default function Prominentplace() {
    return (
        <div>
            <Row>
                <Col>
                    <div className="local-self-driver">
                        <p>ĐỊA ĐIỂM NỔI BẬT-XE TỰ LÁI</p>
                        <div className="content-self-driver">
                            <Slider {...settings1}>
                                {slideLocal1.map(slider =>
                                    <div className="content-detail" key={slider.src}>
                                        <Link style={{ textDecoration: "none" }} to="/howitword">
                                            <img src={slider.src} alt='' />
                                            <h4>{slider.title}</h4>
                                            <p>{slider.quality}</p>
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
                    <div className="local-self-driver">
                        <p>ĐỊA ĐIỂM NỔI BẬT-XE CÓ TÀI XẾ</p>
                        <div className="content-self-driver">
                            <Slider {...settings1}>
                                {slideLocal2.map(slider =>
                                    <div className="content-detail"  key={slider.src}>
                                        <Link style={{ textDecoration: "none" }} to="/howitword">
                                            <img src={slider.src} alt='' />
                                            <h4>{slider.title}</h4>
                                            <p>{slider.quality}</p>
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
