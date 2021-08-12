import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import ft1 from '../../assets/images/feature1.jpg'
import ft2 from '../../assets/images/feature2.jpg'
import ft3 from '../../assets/images/feature3.jpg'
import ft4 from '../../assets/images/feature4.jpg'
import ft5 from '../../assets/images/feature5.jpg'
import ft6 from '../../assets/images/feature6.jpg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const slideImages = [ft1, ft2, ft3, ft4, ft5, ft6];
const settings2 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
        {
            breakpoint: 1200,
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
export default function MainFeature() {
    return (
        <Row>
            <Col className="mt-5">
                <div className="main-feature">
                    <div className="title-feature">
                        <h4>Tính Năng Nổi Bật</h4>
                    </div>
                    <div className="image-feature">
                        <Slider
                            // @ts-ignore
                            Slider {...settings2} >
                            {slideImages.map(slider =>
                                <div key={slider}>
                                    <img src={slider} alt='' />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
