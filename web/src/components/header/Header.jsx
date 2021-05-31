import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillInfoCircle, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { LoggedNav, LoggedOffcanvas } from './Logged';
import LoginForm from './LoginForm';
import { NotLoggedNav, NotLoggedOffcanvas } from './NotLogged';

function Header() {
  //show offsetcanvas bootstrap mặc định
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // @ts-ignore
  const logged = useSelector(state => state.logged);
  return (
    <div>
      <Navbar id="header" bg="dark" variant="dark" className="px-3">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar className="ms-auto">
          <Nav>
            <Nav.Link href="/howitwork">
              <AiFillInfoCircle className="icon" />
              <span className="d-none d-md-inline-block me-2 me-lg-5 ms-2">Hướng dẫn</span>
            </Nav.Link>
          </Nav>
          {logged.fullName ?
            <LoggedNav /> : <NotLoggedNav showLoginForm={handleShowLogin}/>
          }
          <Nav className="d-block d-lg-none">
            <Nav.Link onClick={handleShow} className="me-2"><AiOutlineMenu className="icon"/></Nav.Link>
          </Nav>
        </Navbar>
      </Navbar>
      <Offcanvas id="offcanvas" show={show} onHide={handleClose}>
        {logged.fullName ?
          <LoggedOffcanvas /> : <NotLoggedOffcanvas showLoginForm={handleShowLogin}/>
        }
      </Offcanvas>
      <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
    </div>
  )
}

export default Header
