import React from "react";
import { Button, Container, Row, Col, } from "react-bootstrap";
import Bandroll from 'components/homepage/Bandroll';
import Mainfeature from 'components/homepage/MainFeature';
import Guidecarrental from 'components/homepage/GuideCarRental';
import Prominentplace from 'components/homepage/ProminentPlace';
import Featuredcar from 'components/homepage/FeaturedCar';
import Blogs from 'components/homepage/Blogs';
import Appinstall from 'components/homepage/AppInstall';
import Findcar from "components/homepage/FindCar";
function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col className="banners" xs={12}>
          <Bandroll />
          <Findcar />
        </Col>
      </Row>
      {/* <Mainfeature />
      <Guidecarrental />
      <Prominentplace />
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
      <Featuredcar />
      <Blogs />
      <Appinstall /> */}
    </Container>
  );
}
export default HomePage;
