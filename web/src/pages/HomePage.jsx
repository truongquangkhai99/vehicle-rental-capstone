// @ts-nocheck
import React from 'react';
import {Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/_home.scss';
import selfdriver from '../assets/images/self-driver.png';
import withdriver from '../assets/images/with-driver.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsSearch ,IoLocation,RiMapPinRangeFill,RiMapPinFill} from 'react-icons/all';
import Slideshow from '../components/layout/Slideshow';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from  '../assets/images/xe1.jpg'
import img2 from '../assets/images/xe2.jpg'
import img3 from '../assets/images/xe3.jpg'
import img4 from '../assets/images/xe4.jpg'
import img5 from '../assets/images/quangcao1.jpg'
import img6 from '../assets/images/quangcao2.jpg'
import img7 from '../assets/images/quangcao3.jpg'
import bh1 from '../assets/images/baohiem1.png'
import bh2 from '../assets/images/baohiem2.png'
import bh3 from '../assets/images/baohiem3.png'
import  ft1 from '../assets/images/feature1.jpg'
import  ft2 from '../assets/images/feature2.jpg'
import  ft3 from '../assets/images/feature3.jpg'
import  ft4 from '../assets/images/feature4.jpg'
import  ft5 from '../assets/images/feature5.jpg'
import  ft6 from '../assets/images/feature6.jpg'
import app from '../assets/images/app-4.png'
import appapple from '../assets/images/appstore.png'
import appgoogle from '../assets/images/ggplay.png'
    const collection=[
        { src: img1},
        { src: img2},
        { src: img3},
        { src: img4},
        { src: img5},
        { src: img6},
        { src: img7}
    ];
    const baohiemimg=[
        bh1,bh2,bh3
     ]
    const slideImages=[
       ft1,ft2,ft3,ft4,ft5,ft6
    ]
    const responsive1 = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        }       
      };
      const responsive2 = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        }       
      };
function HomePage(){
    
    return (
        <Container fluid>
            <Row>
                <Col className="banner">
                    <Row>
                        <Col className="slogan">
                            <h1>share&save-oto you'll never walk alone!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs className="book-car">   
                                <TabList className="tab-left">
                                    <Tab className="service-box">                                                                          
                                        <div className="image-car">
                                            <img src={selfdriver}/>
                                        </div>
                                        <div className="title-car mt-3">
                                            <h3 className="text-center">Xe tự lái</h3>
                                        </div>                                                                                 
                                    </Tab>  
                                    <Tab className="service-box">                                                                               
                                        <div className="image-car">
                                        <img src={withdriver}/>
                                        </div>
                                        <div className="title-car mt-3">
                                            <h3 className="text-center">Xe có tài xế</h3>
                                        </div>                                                                                  
                                    </Tab>  
                                </TabList>
                                <div className="tab-right">
                                    <TabPanel >
                                        <Form>
                                            <Form.Label className="text-primary">Địa Điểm</Form.Label>
                                           <Row>                                               
                                               <Col>
                                                    <IoLocation style={{marginLeft: "0.5rem",marginTop:"0.5rem",marginRight:"1rem", position: "absolute"}} color="green" size="1.5rem"/>
                                                    <Form.Control type="text"  placeholder="     Nhập địa chỉ của bạn....."/>
                                               </Col>
                                           </Row>
                                           <Form.Label className="text-primary">Bắt Đầu</Form.Label>
                                           <Row>                                                   
                                               <Col>
                                                    <Form.Control type="date" />
                                               </Col>
                                               <Col>
                                                    <Form.Control type="time"/> 
                                               </Col>
                                           </Row>
                                           <Form.Label className="text-primary">Kết thúc</Form.Label>
                                           <Row>                                                   
                                               <Col>
                                                    <Form.Control type="date" />
                                               </Col>
                                               <Col>
                                                    <Form.Control type="time"/> 
                                               </Col>
                                           </Row>                                               
                                          <Button variant="primary" className="btn form-control mt-3 text-primary"><BsSearch/>  Tìm Kiếm Ngay</Button>
                                        </Form>
                                    </TabPanel>                                                     
                                    <TabPanel>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Nội tỉnh</Tab>
                                                <Tab>Liên tỉnh</Tab>
                                            </TabList>
                                            <TabPanel>
                                                <Form>
                                                    <Form.Label className="text-primary">Điểm đón</Form.Label>
                                                    <Row>                                               
                                                        <Col>
                                                                <IoLocation style={{marginLeft: "0.5rem",marginTop:"0.5rem",marginRight:"1rem", position: "absolute"}} color="green" size="1.5rem"/>
                                                                <Form.Control type="text"  placeholder="     Bạn muốn đón tại....."/>
                                                        </Col>
                                                    </Row>
                                                    <Form.Label className="text-primary">Thời gian</Form.Label>
                                                    <Row>                                                   
                                                        <Col>
                                                            <Form.Control type="date"/>                     
                                                        </Col>
                                                        <Col>
                                                            <Form.Control type="time"/> 
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary" className="btn form-control mt-3 text-primary"><BsSearch/>  Tìm Kiếm Ngay</Button>
                                                </Form>
                                            </TabPanel>
                                            <TabPanel>
                                                <Form>
                                                    <Form.Label className="text-primary">Lộ trình</Form.Label>
                                                    <Row>                                               
                                                        <Col>
                                                                <RiMapPinRangeFill style={{marginLeft: "0.5rem",marginTop:"0.5rem",marginRight:"1rem", position: "absolute"}} color="green" size="1.5rem"/>
                                                                <Form.Control type="text"  placeholder="     Bạn muốn đón tại....."/>
                                                        </Col>
                                                    </Row>
                                                    <Row>                                               
                                                        <Col>
                                                                <RiMapPinFill style={{marginLeft: "0.5rem",marginTop:"1.5rem",marginRight:"1rem", position: "absolute"}} color="green" size="1.5rem"/>
                                                                <Form.Control type="text"  placeholder="     Bạn muốn đến tại....." className="mt-3"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                             <Form.Check type="checkbox" label="Tôi muốn đi một chiều"  className="mt-3 text-primary"/>
                                                        </Col>
                                                        <Col>
                                                             <Form.Check type="checkbox" label="Tôi muốn đi hai chiều"  className="mt-3 text-primary"/>
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Form.Label className="text-primary">Thời gian</Form.Label>
                                                    <Row>                                                   
                                                        <Col>
                                                            <Form.Control type="date"/>                     
                                                        </Col>
                                                        <Col>
                                                            <Form.Control type="time"/> 
                                                        </Col>
                                                    </Row>
                                                    <Button variant="primary" className="btn form-control mt-3 text-primary"><BsSearch/>  Tìm Kiếm Ngay</Button>
                                                </Form>
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel> 
                                    </div>     
                                                                            
                            </Tabs>  
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="advertise">
                            <Slideshow
                                input={collection}
                                ratio={`3:2`}
                                mode={`automatic`}
                                timeout={`3000`}
                                />
                            </div>                       
                        </Col>
                    </Row>
                </Col>
            </Row>
           <Row>              
               <Col>                   
                    <div className="insurrance">                       
                            <h3 className="text-center text-primary">ĐỐI TÁC BẢO HIỂM</h3> 
                           <div className="insurrance-banner">
                               {baohiemimg.map(
                                   bhimg => 
                                   <div className="insurrance-image">
                                         <img src={bhimg}/>
                                    </div>
                               )
                               }                                                          
                           </div>
                            
                                                  
                    </div>
               </Col>
           </Row>
           <Row>
                <Col>
                <div className="main-feature">
                    <div className="title-feature">
                        <h4>Tính Năng Nổi Bật</h4>
                    </div> 
                    <div className="image-feature">                       
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive1}
                            ssr={true}
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"                          
                            >
                                {slideImages.map(
                                    ftimg =>
                                    <div>
                                        <img src={ftimg} />
                                    </div>                                    
                                )}
                        </Carousel>
                    </div>                                      
                </div>
                </Col>
            </Row>                                                      
             <Row>
                <Col>
                    <div className="newspaper">
                        <div className="title-newspaper">
                            <p>Báo chí nói về chúng tôi</p>                            
                        </div>
                        <div className="image-newspaper">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive2}
                            ssr={true}
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"                          
                            >
                                {slideImages.map(
                                    ftimg =>
                                    <div>
                                        <img src={ftimg} />
                                    </div>                                    
                                )}
                        </Carousel>
                        </div>
                    </div>               
                </Col>
            </Row>  

             <Row>
                <Col>
                    <div className="app-container">
                        <div className="app-left">
                           <h1 className="mb-4">Ứng dụng cho điện thoại</h1>
                           <h5 className="mb-4">Tải ngay ứng dụng tại App Store hoặc Google Play</h5>
                           <div className="app-image mb-3">
                               <div className="app-image-apple">
                                   <img src={appapple} />
                               </div>
                               <div className="app-image-google">
                                     <img src={appgoogle} />
                               </div>
                           </div>
                        </div>
                        <div className="app-right">
                            <img src={app}/>
                        </div>
                    </div>
                </Col>
                
            </Row>                    
        </Container>
    )
}
export default HomePage
