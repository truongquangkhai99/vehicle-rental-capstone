import React, { useEffect, useState } from "react";
import { Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/pages/_home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogApi from "../../api/blogApi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const settings3 = {
  infinite: false,
  slidesToShow: 2,
  dots: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    }
  ],
};
export default function Blogs() {
  //get list blog
  const [getDataBlog, setDataBlog] = useState({ list: [] });
  useEffect(() => {
    blogApi.getBlog().then((res) => {
      setDataBlog({ list: res });
    });
  }, []);
  return (
    <Row>
      <div className="blog">
        <p className="blog-title">Blogs</p>
        <div className="blog-content">
          <Slider {...settings3}>
            {getDataBlog.list.map((slider,index) => (
              <Card key={index}>
                <Card.Img variant="top" src={slider.mainImgLink} />
                <Card.Body>
                  <Card.Title>{slider.title}</Card.Title>
                  <Card.Text>{slider.content}</Card.Text>
                  <Card.Link
                    as={Link}
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/blog?id="+slider.id}
                  >
                    Xem thêm
                  </Card.Link>
                  <IoIosArrowForward />
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    </Row>
  );
}
