import React from 'react'
import { useHistory } from 'react-router-dom';
import { Visibility, Edit, Delete } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalBlog from './../modal/ModalBlog';
import { Alert } from 'react-bootstrap';
import adminApi from '../../../api/adminApi'
import { useSelector } from 'react-redux';
export default function BlogList() {
    // @ts-ignore
    const blogcmm = useSelector(state => state.blog).data;
    const [list, setList] = useState([]);
    const [isDelete, setIsDelete] = useState(false);
    // const dispatch = useDispatch()
    const history = useHistory();
    useEffect(() => {
        // @ts-ignore
        adminApi.getBlog().then(res => setList(res))
        console.log("ầ");
    }, [blogcmm])
    console.log(list.length);
    const [show, setShow] = useState(false);
    const [blog, setBlog] = useState({
        id: 0,
        title: '',
        content: '',
        contentDetail: '',
        imageLink: ''
    })
    const handleShow = (data) => {
        setShow(true);
        setBlog(data);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleDelete = (idBlog) => {
        let data = list.filter(item => { return item.id !== idBlog });
        setList(data);
        adminApi.deleteBlog(idBlog);
        setIsDelete(true);
    }
    const handleEdit = (data) => {
        let updateData = { blogs: data, isUpdate: true };
        history.push('/admin/blog/' + data.id, updateData);
    }
    const handleCreate = () => {
        let updateData = { blogs: null, isUpdate: false };
        history.push('/admin/blog/create', updateData);
    }


    return (
        <div className="admin_blogs">
            <div className="admin_blogs_title">
                <h3>Danh sách bài viết</h3>
                <button className="admin_blogs_title_button"
                    onClick={handleCreate}
                >Thêm bài viết</button>
            </div>
            <div className="admin_blogs_body">
                <Alert variant="danger" className="mt-2 mb-3 ps-5 ms-3 me-3" onClose={() => setIsDelete(false)} dismissible show={isDelete}>
                    <h6>Xóa bài viết thành công!</h6>
                </Alert>
                <table className="admin_blogs_table">
                    <thead className="admin_blogs_thead">
                        <tr>
                            <th className="admin_blogs_th">ID</th>
                            <th className="admin_blogs_th">Tiêu đề</th>
                            <th className="admin_blogs_th">Xem chi tiết</th>
                            <th className="admin_blogs_th">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, index) => (
                                <tr className="admin_blogs_thead" key={index}>
                                    <td className="admin_blogs_id">{item.id}</td>
                                    <td className="admin_blogs_title">{item.title}</td>
                                    <td className="admin_blogs_display">
                                        <button className="admin_blogs_button" onClick={() => handleShow(item)}>
                                            <Visibility className="admin_blogs_icon" />
                                            Xem
                                        </button>
                                    </td>
                                    <td className="admin_blogs_action">
                                        <button className="admin_blogs_button edit" onClick={() => handleEdit(item)}><Edit /></button>
                                        <button
                                            className="admin_blogs_button delete"
                                            onClick={() => handleDelete(item.id)}
                                        ><Delete /></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <ModalBlog blog={blog} show={show} onClose={handleClose} />

        </div>
    )
}
