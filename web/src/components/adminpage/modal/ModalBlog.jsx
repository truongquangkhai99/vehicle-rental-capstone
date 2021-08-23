import React from 'react'
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
export default function ModalBlog({ blog, show, onClose }) {
    const [isShow, setIsShow] = useState(false);
    const [Blog, setBlog] = useState({
        id: 0,
        title: '',
        content: '',
        contentDetail: '',
        mainImgLink: ''
    })
    useEffect(() => {
        setBlog(blog);
        setIsShow(show);
    }, [show, blog]);
    const handleClose = () => {
        setIsShow(false);
        onClose();
    }
    return (
        <Modal
            show={isShow}
            onHide={handleClose}
            centered
            size={'lg'}
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title>{Blog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_blog">
                    <img src={Blog.mainImgLink} alt="" className="modal_blog_img" />
                    <p dangerouslySetInnerHTML={{ __html: Blog.content }} ></p>
                </div>
            </Modal.Body>
        </Modal>
    )
}
