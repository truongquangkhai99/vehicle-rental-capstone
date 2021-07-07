import React from 'react'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";
import step1 from '../../assets/images/step1.svg'
import step2 from '../../assets/images/step2.svg'
import step3 from '../../assets/images/step3.svg'
import step4 from '../../assets/images/step4.svg'
const imageGuide = [
    { src: step1, title: 'Đặt xe với Share&Save' },
    { src: step2, title: 'Nhận xe hoặc giao tận nơi' },
    { src: step3, title: 'Trải nghiệm chuyến đi' },
    { src: step4, title: 'Kết thúc giao dịch' },
]
export default function Guidecarrental() {
    return (
        <Row>
            <div className="car-rental-guide">
                <div className="title-guide">
                    <p>Hướng dẫn thuê xe</p>
                </div>
                <div className="content-guide">
                    {imageGuide.map(guide =>
                        <Link style={{ textDecoration: "none", color: "black" }} to="/howitword" 
                        key={guide.src}
                        >
                            <div className="image-guide">
                                <img src={guide.src} alt='' />
                                <h5 className="text-center font-weight-bold">{guide.title}</h5>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="see-more">
                    <div className="see-link">
                        <Link style={{ textDecoration: "none", color: "black" }} to="/howitword" >Xem Thêm</Link>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </Row>
    )
}
