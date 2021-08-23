import SignUpForm from "components/SignUpForm";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillInfoCircle, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoggedNav, LoggedOffcanvas } from "./Logged";
import LoginForm from "./LoginForm";
import { NotLoggedNav, NotLoggedOffcanvas } from "./NotLogged";
import logo from "assets/images/logo.png";
import ChangePasswordForm from "./ChangePasswordForm";
import store from "app/store";
import { closeLogin } from "app/slice/userSlice";
import { FaAmbulance } from "react-icons/fa";

function Header() {
  //show offsetcanvas bootstrap mặc định
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseLogin = () => {
    setShowLogin(false);
    store.dispatch(closeLogin());
  };
  const handleCloseChangePassword = () => {
    setShowChangePassword(false);
    setShow(false);
  };
  const handleShowLogin = () => {
    setShowLogin(true);
    setShow(false);
  };
  const handleShowChangePassword = () => {
    setShowChangePassword(true);
    setShow(false);
  };
  const handleShowSignup = () => {
    setShowSignup(true);
    setShow(false);
  };
  // @ts-ignore
  const logged = useSelector((state) => state.logged);
  return (
    <>
      <Navbar id="header" bg="dark" variant="dark" className="px-3">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "55px", position: "absolute", top: "5px" }}
          />
        </Link>
        <Navbar className="ms-auto">
          <Nav>
            <Nav.Link as={Link} to="/aid">
              <FaAmbulance className="icon" />
              <span className="d-none d-md-inline-block me-2 me-lg-5 ms-2">
                Trợ giúp tai nạn
              </span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/howitwork">
              <AiFillInfoCircle className="icon" />
              <span className="d-none d-md-inline-block me-2 me-lg-5 ms-2">
                Hướng dẫn
              </span>
            </Nav.Link>
          </Nav>
          {logged.data ? (
            <LoggedNav showChangePassword={handleShowChangePassword} />
          ) : (
            <NotLoggedNav
              showLoginForm={handleShowLogin}
              showSignupForm={handleShowSignup}
            />
          )}
          <Nav className="d-block d-lg-none">
            <Nav.Link onClick={handleShow} className="me-2">
              <AiOutlineMenu className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
      <Offcanvas id="offcanvas" show={show} onHide={handleClose}>
        {logged.data ? (
          <LoggedOffcanvas showChangePassword={handleShowChangePassword} />
        ) : (
          <NotLoggedOffcanvas
            showLoginForm={handleShowLogin}
            showSignupForm={handleShowSignup}
          />
        )}
      </Offcanvas>
      {showLogin || logged.show ? (
        <LoginForm
          handleClose={handleCloseLogin}
          handleShowSignup={handleShowSignup}
        />
      ) : null}
      {showSignup ? <SignUpForm handleClose={handleCloseSignup} /> : null}
      {showChangePassword ? (
        <ChangePasswordForm handleClose={handleCloseChangePassword} />
      ) : null}
    </>
  );
}

export default Header;
