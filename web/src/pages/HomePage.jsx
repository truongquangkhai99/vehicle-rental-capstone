import React from "react";
import { Button, Container, Row, Col, } from "react-bootstrap";
import BandRoll from 'components/homepage/BandRoll';
import MainFeature from 'components/homepage/MainFeature';
import GuideCarRental from 'components/homepage/GuideCarrental';
import ProminentPlace from 'components/homepage/ProminentPlace';
import FeaturedCar from 'components/homepage/FeaturedCar';
import Blogs from 'components/homepage/Blogs';
import AppInstall from 'components/homepage/AppInstall';
import FindCar from "components/homepage/FindCar";
function HomePage() {
  return (
    <Container fluid>
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
            <div className="content-but">
              <Button variant="dark">Tìm hiểu ngay</Button>
              <Button variant="primary">Đăng ký xe</Button>
            </div>
          </div>
        </div>
      </Row>
      <FeaturedCar />
      <Blogs />
      <AppInstall />
    </Container>
  );
}
export default HomePage;
