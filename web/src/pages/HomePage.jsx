// @ts-nocheck
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/_home.scss';
import Findcar from 'components/homepage/findcar';
import Bandroll from 'components/homepage/bandroll';
import Insurancepartner from 'components/homepage/insurancepartner';
import Mainfeature from 'components/homepage/mainfeature';
import Guidecarrental from 'components/homepage/guidecarrental';
import Prominentplace from 'components/homepage/prominentplace';
import Featuredcar from 'components/homepage/featuredcar';
import Appinstall from 'components/homepage/appinstall';
import Categorycar from 'components/homepage/categorycar';
import Blogs from 'components/homepage/blogs';

function HomePage() {
	return (
		<Container fluid>
			<Row>
				<Col className="banner">
					<Row>
						<Col className="slogan">
							<main>
								<div className="marker"></div>
								<h1>S</h1>
								<h1 className="r">H</h1>
								<h1 className="e1">A</h1>
								<h1 className="s1">R</h1>
								<h1 className="s2">E</h1>
								<h1 className="e2">-</h1>
								<h1>OTO</h1>
  							</main>
						</Col>
					</Row>
					<Row>
						<Col>
							<Findcar />
						</Col>
						<Col>
							<Categorycar/>
						</Col>
					</Row>	
					<Bandroll />
				</Col>
			</Row>
			<Insurancepartner />
			<Mainfeature />
			<Guidecarrental />
			<Prominentplace />
			<Row>
				<div className="banner2">
					<div className="content-banner text-light">
						<h1>Bạn muốn cho thuê xe ô tô</h1>
						<p>Trở thành đối tác của chúng tôi để có cơ hội kiếm thêm thu nhập hàng tháng.</p>
						<div className="content-but">
							<Button variant="dark">Tìm hiểu ngay</Button>
							<Button variant="primary">Đăng ký xe</Button>
						</div>
					</div>
				</div>
			</Row>
			<Featuredcar />
			<Blogs/>
			<Appinstall />
		</Container>
	)
}
export default HomePage
