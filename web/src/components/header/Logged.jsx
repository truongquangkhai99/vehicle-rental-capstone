import { logout } from 'app/slice/headerSlice';
import React from 'react';
import { Dropdown, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { IoMdNotifications } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './Notification';

export function LoggedNav(props) {
    const dispatch = useDispatch();
    // @ts-ignore
    const logged = useSelector(state => state.logged)
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    }
    const listNoti = [
        {
            avatarLink: "https://n1-cstg.mioto.vn/v6/p/m/avatars_notify/common.jpg",
            title: "Welcome to LOGO",
            content: "Chào mừng bạn tham gia cộng đồng to vcl, bấm vào đây để xem những kinh nghiệm thuê xe hữ ích",
            createTime: new Date().toISOString(),
            link:"google.com.vn"
        }]
    return (
        <Nav className="text-white">
            <NavDropdown className="ms-5 d-none d-lg-block" menuVariant="dark" title={<span><img alt="avatar" draggable="false" src={logged.avatarLink}></img><span>{logged.fullName}</span></span>} id="avatar__dropdown">
                <NavDropdown.Item href="/profile">Tài khoản</NavDropdown.Item>
                <NavDropdown.Item href="/myfav">Xe yêu thích</NavDropdown.Item>
                <NavDropdown.Item href="/mytrips">Chuyến của tôi</NavDropdown.Item>
                <NavDropdown.Item href="/myaddress">Địa chỉ của tôi</NavDropdown.Item>
                <NavDropdown.Item href="/mycard">Thẻ của tôi</NavDropdown.Item>
                <NavDropdown.Item href="/promo">Khuyến mãi</NavDropdown.Item>
                <NavDropdown.Item href="/sharecode">Giới thiệu bạn bè</NavDropdown.Item>
                <NavDropdown.Item href="/myreward">Quà tặng</NavDropdown.Item>
                <NavDropdown.Item >Đổi mật khẩu</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogoutClick}>Đăng xuất</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="notification" className="me-2" menuVariant="light" title={<span ><IoMdNotifications className="icon" /></span>}>
                <Notification listNoti={listNoti} />
            </NavDropdown>
        </Nav>
    )
}
export function LoggedOffcanvas(props) {
    const dispatch = useDispatch();
    // @ts-ignore
    const logged = useSelector(state => state.logged)
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    }
    return (
        <div>
            <Offcanvas.Header className="logged" closeVariant="white" closeButton>
                <div className="offcanvas__avatar">
                    <img alt="avatar" id="offcanvas__img" draggable="false" src={logged.avatarLink}></img>
                    <h3 className="logged">Vũ Hoàng Minh</h3>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Dropdown.Divider />
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/profile">Tài khoản</Nav.Link>
                    <Nav.Link href="">Xe yêu thích</Nav.Link>
                    <Nav.Link href="">Chuyến của tôi</Nav.Link>
                    <Nav.Link href="">Địa chỉ của tôi</Nav.Link>
                    <Nav.Link href="">Thẻ của tôi</Nav.Link>
                    <Nav.Link href="">Khuyến mãi</Nav.Link>
                    <Nav.Link href="">Giới thiệu bạn bè</Nav.Link>
                    <Nav.Link href="">Quà tặng</Nav.Link>
                    <Nav.Link>Đổi mật khẩu</Nav.Link>
                    <Nav.Link onClick={handleLogoutClick}>Đăng xuất</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </div>
    )
}
