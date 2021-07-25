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

function Header() {
  //show offsetcanvas bootstrap mặc định
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => {
    setShowSignup(true);
    setShow(false);
  };
  // @ts-ignore
  const logged = useSelector((state) => state.logged);
  return (
    <div>
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
            <Nav.Link href="/howitwork">
              <AiFillInfoCircle className="icon" />
              <span className="d-none d-md-inline-block me-2 me-lg-5 ms-2">
                Hướng dẫn
              </span>
            </Nav.Link>
          </Nav>
          {logged.data ? (
            <LoggedNav />
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
          <LoggedOffcanvas />
        ) : (
          <NotLoggedOffcanvas
            showLoginForm={handleShowLogin}
            showSignupForm={handleShowSignup}
          />
        )}
      </Offcanvas>
      {showLogin ? (
        <LoginForm
          handleClose={handleCloseLogin}
          handleShowSignup={handleShowSignup}
        />
      ) : null}
      {showSignup ? <SignUpForm handleClose={handleCloseSignup} /> : null}
    </div>
  );
}

export default Header;
