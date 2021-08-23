import { logout } from "app/slice/userSlice";
import store from "app/store";
import React from "react";
import { Dropdown, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const handleLogoutClick = () => {
  store.dispatch(logout());
};
export function LoggedNav(props) {
  // @ts-ignore
  const logged = useSelector((state) => state.logged);
  const showChangePassword = props.showChangePassword;
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
        <Link className="dropdown-item" to="/promo">
          Khuyễn mãi
        </Link>
        <NavDropdown.Item onClick={showChangePassword}>
          Đổi mật khẩu
        </NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogoutClick}>
          Đăng xuất
        </NavDropdown.Item>
      </NavDropdown>
      <Notification/>      
    </Nav>
  );
}
export function LoggedOffcanvas(props) {
  // @ts-ignore
  const logged = useSelector((state) => state.logged);
  const showChangePassword = props.showChangePassword;
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
          <Link className="nav-link" to="/promo">
            Khuyễn mãi
          </Link>
          <Nav.Link onClick={showChangePassword}>Đổi mật khẩu</Nav.Link>
          <Nav.Link onClick={handleLogoutClick}>Đăng xuất</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </>
  );
}
