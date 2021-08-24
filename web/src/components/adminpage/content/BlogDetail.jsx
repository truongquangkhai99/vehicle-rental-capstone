import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import adminApi from './../../../api/adminApi';
import store from 'app/store';
import { createBlog } from 'app/slice/blogSlice';

export default function BlogDetail() {
    // @ts-ignore
    const [isUpdate, setIsUpdate] = useState(false);
    const history = useHistory();
    const [file, setFile] = useState(null);
    const [blog, setBlog] = useState({
        id: 0,
        title: '',
        mainImgLink: '',
        content: '',
        contentDetail: ''
    })
    useEffect(() => {
        let updateBlog = history.location.state;
        // @ts-ignore
        if (updateBlog.blogs !== null) {
            // @ts-ignore
            setBlog(updateBlog.blogs)
            // @ts-ignore
            setIsUpdate(updateBlog.isUpdate)
        }
        // @ts-ignore
    }, [history.location.state])
    const handleCancel = () => {
        setBlog({
            id: 0,
            title: '',
            mainImgLink: '',
            content: '',
            contentDetail: ''
        })
    }
    const handleChangeImage = (/** @type {{ target: any; }} */ e) => {
        let target = e.target;
        setFile(target.files[0]);

    }
    const handleAdd = () => {
        if (isUpdate) {
            adminApi.updateBlog(blog);
        } else {

            const formData = new FormData();
            formData.append("file", file);
            adminApi.uploadImageBlog(formData).then(res => {
                blog.mainImgLink = res.data.fileDownloadUri;
                adminApi.createBlog(blog);
                store.dispatch(createBlog(blog));
            })
        }
        history.push("/admin/blogs");
        handleCancel();
    }

    return (
        <div className="admin_detailblogs">
            <h3>{isUpdate ? 'Cập nhật bài viết' : 'Thêm bài viết'}</h3>
            <Form className="ps-3 pe-3 mt-3" onSubmit={handleAdd}>
                <Form.Label>Tiêu đề bài viết:</Form.Label>
                <Form.Control className="mb-3" value={blog.title} required
                    onChange={({ target }) => setBlog(state => ({ ...state, title: target.value }))} name="title" />
                <Form.Label>Chèn hình ảnh:</Form.Label>
                <Form.Control type='file' className="mb-3"
                    // @ts-ignore
                    onChange={handleChangeImage}
                    name="mainImgLink"
                />
                <Form.Label>Nội dung bài viết:</Form.Label>
                <textarea
                    className="form-control"
                    onChange={({ target }) => setBlog(state => ({ ...state, content: target.value }))}
                    name="content"
                    value={blog.content}
                    rows={7} />
                <div className="admin_blogForm_button mt-3">
                    <Button onClick={handleCancel} variant="danger" className="me-3">Hủy</Button>
                    <Button type="submit" variant="primary">{isUpdate ? 'Lưu lại' : 'Thêm mới'}</Button>
                </div>
            </Form>

        </div>
    )
}
