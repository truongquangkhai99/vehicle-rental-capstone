import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaPinterestP,
  FaYoutube,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiPhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import logofull from "assets/images/logofull.png";

function Footer() {
  return (
    <div id="footer" className="text-white">
      <Container>
        <Row>
          <Col xs={6} lg={3}>
            <div>
              <img
                src={logofull}
                alt="logo"
                width={145}
              />
            </div>
            <div>
              <a href="facebook.com">
                <FaFacebookF className="me-3" />
              </a>
              <a href="instagram.com">
                <FaInstagram className="me-3" />
              </a>
              <a href="twitter.com">
                <FaTwitter className="me-3" />
              </a>
              <a href="linkedin.com">
                <FaLinkedin className="me-3" />
              </a>
              <a href="youtube.com">
                <FaYoutube className="me-3" />
              </a>
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <h5>Chính sách</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/aboutus">Giới thiệu</a>
              </li>
              <li>
                <a href="/">Chính sách và quy định</a>
              </li>
              <li>
                <a href="/">Quy chế hoạt động</a>
              </li>
              <li>
                <a href="/">Bảo mật thông tin</a>
              </li>
              <li>
                <a href="/">Giải quyết tranh chấp</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h5>Tìm hiểu thêm</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/howitwork">Hướng dẫn chung</a>
              </li>
              <li>
                <a href="/">Hướng dẫn đặt xe</a>
              </li>
              <li>
                <a href="/">Hướng dẫn dành cho chủ xe</a>
              </li>
              <li>
                <a href="/">Hướng dẫn thanh toán</a>
              </li>
              <li>
                <a href="/">Hỏi và trả lời</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h5>Liên lạc</h5>
            <ul className="list-unstyled">
              <li>
                <HiOutlineMail /> support@example.com
              </li>
              <li>
                <HiPhone /> 0123456789
              </li>
              <li>
                <HiOutlineLocationMarker /> 138 Hồ Huân Nghiệp - Ngũ Hành Sơn -
                Đà Nẵng
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <h6>©Copyright</h6>
      </Container>
    </div>
  );
}

export default Footer;
