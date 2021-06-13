// @ts-nocheck
import React from 'react';
import {Link} from "react-router-dom";
import {Form, Button, Container, Row, Col,Card } from 'react-bootstrap';
import Rating from 'react-rating' 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/_home.scss';
import selfdriver from '../assets/images/self-driver.png';
import withdriver from '../assets/images/with-driver.png';
import xemay from '../assets/images/xemay.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsSearch ,IoLocation,RiMapPinRangeFill,RiMapPinFill,IoIosArrowForward,IoPricetagsSharp,AiFillSetting,RiNumbersFill} from 'react-icons/all';
import Slideshow from '../components/layout/Slideshow';
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
import  step1 from '../assets/images/step1.svg'
import  step2 from '../assets/images/step2.svg'
import  step3 from '../assets/images/step3.svg'
import  step4 from '../assets/images/step4.svg'
import lc1 from '../assets/images/tphcm.jpg'
import lc2 from '../assets/images/hanoi.jpg'
import lc3 from '../assets/images/danang.jpg'
import lc4 from '../assets/images/binhduong.jpg'
import lc5 from '../assets/images/vungtau.jpg'
import lc6 from '../assets/images/nhatrang.jpg'
import lc7 from '../assets/images/dalat.jpg'
import lc8 from '../assets/images/phuquoc.jpg'
import lc9 from '../assets/images/haiphong.jpg'
import lc10 from '../assets/images/quynhon.jpg'
import lc11 from '../assets/images/cantho.jpg'
import lc12 from '../assets/images/tphcm2.jpg'
import lc13 from '../assets/images/hanoi2.jpg'
import lc14 from '../assets/images/danang2.jpg'
import lc15 from '../assets/images/binhduong2.jpg'
import lc16 from '../assets/images/cantho2.jpg'
import xe5 from '../assets/images/xe5.jpg'
import xe6 from '../assets/images/xe6.jpg'
import xe7 from '../assets/images/xe7.jpg'
import xe8 from '../assets/images/xe8.jpg'
import xe9 from '../assets/images/xe9.jpg'
import xe10 from '../assets/images/xe10.jpg'
import xe11 from '../assets/images/xe11.jpg'
import xe12 from '../assets/images/xe12.jpg'
import xe13 from '../assets/images/xe13.jpg'
import xe14 from '../assets/images/xe14.jpg'
import xe15 from '../assets/images/xe15.jpg'
import xe16 from '../assets/images/xe16.jpg'
import starempty from '../assets/images/star-empty.png'
import starfull from '../assets/images/star-full.png'

import app from '../assets/images/app-4.png'
import appapple from '../assets/images/appstore.png'
import appgoogle from '../assets/images/ggplay.png'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { CardSlide } from 'react-card-slide/dist';


    const collection=[{ src: img1},{ src: img2},{ src: img3},{ src: img4},{ src: img5},{ src: img6},{ src: img7}];
    const baohiemimg=[bh1,bh2,bh3]
    const slideImages=[ ft1,ft2,ft3,ft4,ft5,ft6]
    const slideLocal1=[ 
        {src:lc1,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc2,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc3,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc4,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc5,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc6,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc7,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc8,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc9,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc10,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc11,title:'Hồ Chí Minh',quality:'2000+'}
        ]
    const slideLocal2=[ 
        {src:lc12,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc13,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc14,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc15,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc16,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc16,title:'Hồ Chí Minh',quality:'2000+'},
        {src:lc16,title:'Hồ Chí Minh',quality:'2000+'}
    ]
    const slideLocal3=[ 
        {src:xe5,title:'Mercedes-Benz S450',rate:5,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe6,title:'Mercedes-Benz S450',rate:3.5,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe7,title:'Mercedes-Benz S450',rate:4,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe8,title:'Mercedes-Benz S450',rate:4.5,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe9,title:'Mercedes-Benz S450',rate:4.7,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe10,title:'Mercedes-Benz S450',rate:3.9,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe11,title:'Mercedes-Benz S450',rate:4.3,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe12,title:'Mercedes-Benz S450',rate:4.8,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe13,title:'Mercedes-Benz S450',rate:4.9,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe14,title:'Mercedes-Benz S450',rate:5,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe15,title:'Mercedes-Benz S450',rate:4,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'},
        {src:xe16,title:'Mercedes-Benz S450',rate:4.5,price:'1000$',feature:['Số tự động','Giao xe tận nơi'],address:'Hải Châu-Đà Nẵng',quality:'50 chuyến'}

    ]
    const slideBlogs=[
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
        {src:xe5,thumnail:'Hạnh phúc trên mọi nẻo đường',content:'Đà Lạt luôn được mệnh danh là một trong những thành phố xinh đẹp nhất Việt Nam, bởi lẽ nơi đây có vô số phong cảnh, địa điểm tuyệt vời mà du khách có thể thoải mái check in cũng như lưu giữ những kỉ niệm tuyệt đẹp. Ngay bây giờ, hãy cùng Mioto điểm qua nhưng điểm dừng chân nổi tiếng của thành phố thơ mộng này nhé!'},
    ]
    // const cardSlide=[]
    // for (const i of slideBlogs) {
    //     cardSlide.push(
    //         {
    //             cardHeaderIcon:i.src,
    //             cardName:i.thumnail,
    //             cardDescription:i.content,
    //             showBodyImage:true,
    //             bodyImage:i.src,
    //             cardTotal:false
    //         }
    //     )
    // }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 1000,
        draggable: true
    };
    const settings1 = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true

      };
      const settings2 = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        dots:true
      };
      const settings3 = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        dots:true
      };
    const imageGuide=[
        {src:step1, title:'Đặt xe với Share&Save'},
        {src:step2, title:'Nhận xe hoặc giao tận nơi'},
        {src:step3, title:'Trải nghiệm chuyến đi'},
        {src:step4, title:'Kết thúc giao dịch'},
    ]
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
                                        <img src={xemay}/>
                                        </div>
                                        <div className="title-car mt-3">
                                            <h3 className="text-center">Xe máy</h3>
                                        </div>                                                                                  
                                    </Tab>  
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
                        <Slider {...settings}>
                                { slideImages.map(slider =>
                                <div>
                                    <img src={slider}/>
                                </div>
                                    )}
                        </Slider>
                    </div>                                      
                </div>
                </Col>
            </Row>                                                      
             <Row>
               
                    <div className="car-rental-guide">
                        <div className="title-guide">
                            <p>Hướng dẫn thuê xe</p>                            
                        </div>
                        <div className="content-guide">
                            {imageGuide.map(guide =>
                                <Link style={{textDecoration:"none", color:"black"}}  to="/howitword" >
                                    <div className="image-guide">
                                        <img src={guide.src}/> 
                                        <h5 className="text-center font-weight-bold">{guide.title}</h5>
                                    </div>   
                                </Link>                        
                                )} 
                        </div>
                        <div className="see-more">
                                <div className="see-link">
                                    <Link style={{textDecoration:"none", color:"black"}}  to="/howitword" >Xem Thêm</Link>
                                    <IoIosArrowForward/>
                                </div>
                        </div>
                    </div>               
                
            </Row>  
            
            <Row>
                <Col>
                    <div className="local-self-driver">
                        <p>ĐỊA ĐIỂM NỔI BẬT-XE TỰ LÁI</p>
                        <div className="content-self-driver">
                            <Slider {...settings1}>
                                    { slideLocal1.map(slider =>
                                    <div className="content-detail">  
                                        <Link style={{textDecoration: "none"}} to="/howitword">                                     
                                            <img src={slider.src}/>
                                            <h4>{slider.title}</h4>
                                            <p>{slider.quality}</p>
                                        </Link>
                                    </div>                                 
                                        )}
                            </Slider>
                        </div>
                    </div>                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="local-self-driver">
                        <p>ĐỊA ĐIỂM NỔI BẬT-XE CÓ TÀI XẾ</p>
                        <div className="content-self-driver">
                            <Slider {...settings1}>
                                    { slideLocal2.map(slider =>                                   
                                        <div className="content-detail">  
                                            <Link style={{textDecoration: "none"}} to="/howitword">                                     
                                                <img src={slider.src}/>
                                                <h4>{slider.title}</h4>
                                                <p>{slider.quality}</p>
                                            </Link>
                                        </div>                                   
                                        )}
                            </Slider>
                        </div>
                    </div>                    
                </Col>
            </Row>
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

            <Row>
                <Col>
                    <div className="car-self-driver">
                        <p>XE NỔI BẬT-XE TỰ LÁI</p>
                        <div className="content-self-driver">
                            <Slider {...settings2}>
                                    { slideLocal3.map(slider =>
                                     <div className="content-detail"> 
                                        <Link style={{textDecoration: "none"}} to="/howitword">                                   
                                            <img src={slider.src}/>                                           
                                            <h4 className="text-light">{slider.title}</h4>
                                            <Rating 
                                                style={{marginLeft:"1rem"}}
                                                initialRating={slider.rate}
                                                emptySymbol={<img src={starempty} className="icon"/>}
                                                fullSymbol={<img src={starfull} className="icon" />}
                                                readonly/>                              
                                            <p ><IoPricetagsSharp/> {slider.price}<span className="num-rental"><RiNumbersFill/> {slider.quality}</span></p>                                                                                                         
                                            <p><IoLocation/> {slider.address}</p>
                                            <p><AiFillSetting/> {slider.feature[0]}-{slider.feature[1]}</p> 
                                        </Link>                                          
                                    </div>                                  
                                        )}
                            </Slider>
                        </div>
                    </div>                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="car-self-driver">
                        <p>XE NỔI BẬT-XE CÓ TÀI XẾ</p>
                        <div className="content-self-driver">
                            <Slider {...settings2}>
                                    { slideLocal3.map(slider =>                                   
                                        <div className="content-detail"> 
                                            <Link style={{textDecoration: "none"}} to="/howitword">                                   
                                                <img src={slider.src}/>                                           
                                                <h4 className="text-light">{slider.title}</h4>
                                                <Rating 
                                                    style={{marginLeft:"1rem"}}
                                                    initialRating={slider.rate}
                                                    emptySymbol={<img src={starempty} className="icon"/>}
                                                    fullSymbol={<img src={starfull} className="icon" />}
                                                    readonly/>                              
                                                <p ><IoPricetagsSharp/> {slider.price}<span className="num-rental"><RiNumbersFill/> {slider.quality}</span></p>                                                                                                         
                                                <p><IoLocation/> {slider.address}</p>
                                                <p><AiFillSetting/> {slider.feature[0]}-{slider.feature[1]}</p> 
                                            </Link>                                          
                                        </div>                                    
                                        )}
                            </Slider>
                        </div>
                    </div>                    
                </Col>
            </Row>
            <Row>               
                <div className="blog">
                    <p className="blog-title">Blogs</p>
                    <div className="blog-content">
                        <Slider {...settings3}>
                            {slideBlogs.map(slider =>
                                <Card style={{width:'90%'}}>
                                    <Card.Img variant="top" src={slider.src} style={{height:'250px'}}/>
                                    <Card.Body>
                                        <Card.Title>{slider.thumnail}</Card.Title>
                                        <Card.Text>{slider.content}</Card.Text>
                                        <Card.Link style={{textDecoration:"none", color:"black"}}  href="/howitword">Xem thêm</Card.Link>
                                        <IoIosArrowForward/>
                                    </Card.Body>
                                </Card>
                                )}
                        </Slider>
                        {/* <CardSlide items={cardSlide}/> */}
            </div>
                </div>               
           </Row>
             <Row>                
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
            </Row>                    
        </Container>
    )
}
export default HomePage
