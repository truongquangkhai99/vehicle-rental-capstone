import React, { useEffect, useState } from 'react'
import { Row, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/_home.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import adminApi from '../../api/adminApi'
import { IoIosArrowForward } from 'react-icons/io';
const settings3 = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    dots: true
};
export default function Blogs() {
    //get list blog
    // const [getDataBlog, setDataBlog] = useState({ list: [] });
    // useEffect(() => {
    //     adminApi.getBlog().then((res) => {
    //         setDataBlog({ list: res.data });
    //     });
    // }, [getDataBlog]);
    return (
        <Row>
            {/* <div className="blog">
                <p className="blog-title">Blogs</p>
                <div className="blog-content">
                    <Slider {...settings3}>
                        {getDataBlog.list.map(slider =>
                            <Card style={{ width: '90%' }} key={slider.src}>
                                <Card.Img variant="top" src={slider.src} style={{ height: '250px' }} alt='' />
                                <Card.Body>
                                    <Card.Title>{slider.title}</Card.Title>
                                    <Card.Text>{slider.content}</Card.Text>
                                    <Card.Link style={{ textDecoration: "none", color: "black" }} href="/howitword">Xem thêm</Card.Link>
                                    <IoIosArrowForward />
                                </Card.Body>
                            </Card>
                        )}
                    </Slider>
                </div>
            </div> */}
        </Row>
    )
}
