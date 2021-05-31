import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';


export function NotLoggedNav(props) {
    const showLoginForm = props.showLoginForm
    return (
        <div>
            <Nav className="d-none d-lg-flex text-white">
                <Nav.Link onClick={showLoginForm}>Đăng nhập</Nav.Link>
                <Nav.Link className="nav-link__register" href="/signup">Đăng ký</Nav.Link>
            </Nav>
        </div>
    )
}
export function NotLoggedOffcanvas(props) {
    const showLoginForm = props.showLoginForm
    return (
        <div>
            <Offcanvas.Header closeVariant="white" closeButton>
            </Offcanvas.Header>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link onClick={showLoginForm}>Đăng nhập</Nav.Link>
                <Nav.Link href="/sign-up">Đăng ký</Nav.Link>
            </Nav>
        </div>
    )
}

