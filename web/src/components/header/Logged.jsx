import { logout } from "app/slice/userSlice";
import store from "app/store";
import React from "react";
import { Dropdown, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const handleLogoutClick = () => {
  store.dispatch(logout());
};
export function LoggedNav(props) {
  // @ts-ignore
  const logged = useSelector((state) => state.logged);
  const listNoti = [
    {
      avatarLink: "https://n1-cstg.mioto.vn/v6/p/m/avatars_notify/common.jpg",
      title: "Welcome to LOGO",
      content:
        "Chào mừng bạn tham gia cộng đồng to vcl, bấm vào đây để xem những kinh nghiệm thuê xe hữ ích",
      createTime: new Date().toISOString(),
      link: "google.com.vn",
    },
  ];
  return (
    <Nav className="text-white">
      <NavDropdown
        className="ms-5 d-none d-lg-block"
        menuVariant="dark"
        title={
          <span>
            <img
              alt="avatar"
              draggable="false"
              src={logged.data.avatarLink}
            ></img>
            <span>{logged.data.fullName}</span>
          </span>
        }
        id="avatar__dropdown"
      >
        <Link className="dropdown-item" to="/account">
          Tài khoản
        </Link>
        <Link className="dropdown-item" to="/myfavs">
          Xe yêu thích
        </Link>
        <Link className="dropdown-item" to="/myvehicles">
          Xe của tôi
        </Link>
        <Link className="dropdown-item" to="/mytrips">
          Chuyến của tôi
        </Link>
        <Link className="dropdown-item" to="/myaddress">
          Địa chỉ của tôi
        </Link>
        <Link className="dropdown-item" to="/promo">
          Khuyễn mãi
        </Link>
        <Link className="dropdown-item" to="/myreward">
          Quà tặng
        </Link>
        <Link className="dropdown-item" to="/admin">
          Admin
        </Link>
        <NavDropdown.Item>Đổi mật khẩu</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogoutClick}>
          Đăng xuất
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown
        id="notification"
        className="me-2"
        menuVariant="light"
        title={
          <span>
            <IoMdNotifications className="icon" />
          </span>
        }
      >
        <Notification listNoti={listNoti} />
      </NavDropdown>
    </Nav>
  );
}
export function LoggedOffcanvas(props) {
  // @ts-ignore
  const logged = useSelector((state) => state.logged);

  return (
    <>
      <Offcanvas.Header className="logged" closeVariant="white" closeButton>
        <div className="offcanvas__avatar">
          <img
            alt="avatar"
            id="offcanvas__img"
            draggable="false"
            src={logged.data.avatarLink}
          ></img>
          <h3 className="logged">{logged.data.fullName}</h3>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Dropdown.Divider />
        <Nav defaultActiveKey="/" className="flex-column">
          <Link className="nav-link" to="/account">
            Tài khoản
          </Link>
          <Link className="nav-link" to="/myfavs">
            Xe yêu thích
          </Link>
          <Link className="dropdown-item" to="/myvehicles">
            Xe của tôi
          </Link>
          <Link className="nav-link" to="/mytrips">
            Chuyến của tôi
          </Link>
          <Link className="nav-link" to="/myaddress">
            Địa chỉ của tôi
          </Link>
          <Link className="nav-link" to="/promo">
            Khuyễn mãi
          </Link>
          <Link className="nav-link" to="/myreward">
            Quà tặng
          </Link>
          <Nav.Link>Đổi mật khẩu</Nav.Link>
          <Nav.Link onClick={handleLogoutClick}>Đăng xuất</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </>
  );
}
