import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";

export function NotLoggedNav(props) {
  const showLoginForm = props.showLoginForm;
  const showSignupForm = props.showSignupForm;
  return (
    <div>
      <Nav className="d-none d-lg-flex text-white">
        <Nav.Link onClick={showLoginForm}>Đăng nhập</Nav.Link>
        <Nav.Link onClick={showSignupForm} className="nav-link__register">
          Đăng ký
        </Nav.Link>
      </Nav>
    </div>
  );
}
export function NotLoggedOffcanvas(props) {
  const showLoginForm = props.showLoginForm;
  const showSignupForm = props.showSignupForm;
  return (
    <div>
      <Offcanvas.Header closeVariant="white" closeButton></Offcanvas.Header>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link onClick={showLoginForm}>Đăng nhập</Nav.Link>
        <Nav.Link onClick={showSignupForm}>Đăng ký</Nav.Link>
      </Nav>
    </div>
  );
}
