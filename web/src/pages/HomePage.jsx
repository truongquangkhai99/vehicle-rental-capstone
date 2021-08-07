import React from "react";
import { Button, Container, Row, Col, } from "react-bootstrap";
import BandRoll from 'components/homepage/bandroll';
import MainFeature from 'components/homepage/MainFeature';
import GuideCarRental from 'components/homepage/GuideCarRental';
import ProminentPlace from 'components/homepage/ProminentPlace';
import FeaturedCar from 'components/homepage/FeaturedCar';
import Blogs from 'components/homepage/Blogs';
import AppInstall from 'components/homepage/AppInstall';
import FindCar from "components/homepage/findcar";
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
            <h1>Bạn muốn cho thuê xe ô tô</h1>
            <p>
              Trở thành đối tác của chúng tôi để có cơ hội kiếm thêm thu nhập
              hàng tháng.
            </p>
            <Row className="content-but">
              <Col lg={6} md={12}>
                <Button variant="dark">Tìm hiểu ngay</Button>
              </Col>
              <Col lg={6} md={12}>
                <Button variant="primary">Đăng ký xe</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Row>
      <FeaturedCar />
      <Blogs />
      <AppInstall />
    </>
  );
}
export default HomePage;
