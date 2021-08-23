import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import BandRoll from "components/homepage/BandRoll";
import MainFeature from "components/homepage/MainFeature";
import GuideCarRental from "components/homepage/GuideCarrental";
import ProminentPlace from "components/homepage/ProminentPlace";
import FeaturedCar from "components/homepage/FeatureCar";
import Blogs from "components/homepage/Blogs";
import FindCar from "components/homepage/FindCar";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Row>
        <Col className="banners" xs={12}>
          <BandRoll />
          <FindCar />
        </Col>
      </Row>
      <MainFeature />
      <GuideCarRental />
      <ProminentPlace />
      <Row>
        <div className="banner2">
          <div className="content-banner text-light">
            <h1>Bạn muốn cho thuê xe</h1>
            <p>
              Trở thành đối tác của chúng tôi để có cơ hội kiếm thêm thu nhập
              hàng tháng.
            </p>
            <Row className="content-but">
              <Col lg={6} md={12}>
                <Button variant="dark">
                  <Link className="text-white text-decoration-none d-block" to="/howitwork">Tìm hiểu ngay</Link>
                </Button>
              </Col>
              <Col lg={6} md={12}>
                <Button variant="primary">Đăng ký xe</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <Blogs />
    </>
  );
}
export default HomePage;
