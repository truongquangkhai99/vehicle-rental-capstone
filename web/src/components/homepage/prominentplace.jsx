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
    draggable: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 876,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
};
const slideLocal1 = [
    { src: lc1, title: 'Hồ Chí Minh', quality: '2000+' },
    { src: lc2, title: 'Hà Nội', quality: '700+' },
    { src: lc3, title: 'Đà Nẵng', quality: '200+' },
    { src: lc4, title: 'Bình Dương', quality: '150+' },
    { src: lc5, title: 'Cần Thơ', quality: '70+' },
]
export default function ProminentPlace() {
    return (
        <>
            <div className="local-self-driver">
                <p>ĐỊA ĐIỂM NỔI BẬT</p>
                <Row className="content-self-driver">
                    <Slider
                        // @ts-ignore
                        Slider {...settings1}>
                        {slideLocal1.map(slider =>
                            <Col className="content-detail" key={slider.src}>
                                <Link style={{ textDecoration: "none" }} to="/howitword">
                                    <img src={slider.src} alt='' />
                                    <h4>{slider.title}</h4>
                                    <p>{slider.quality}</p>
                                </Link>
                            </Col>
                        )}
                    </Slider>
                </Row>
            </div>
        </>
    )
}
