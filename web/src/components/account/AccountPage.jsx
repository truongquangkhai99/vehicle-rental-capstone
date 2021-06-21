import React from 'react'
import '../../styles/components/account/_account.scss'
import { BiEdit } from 'react-icons/bi'
import { BsLink45Deg } from 'react-icons/bs'
import { AiOutlineCloseCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { GiAlliedStar } from 'react-icons/gi'
import EditName from './EditName'
import EditTelephone from './EditTelephone'
import EditEmail from './EditEmail'
import EditGoogle from './EditGoogle'
import GPLX from './GPLX'


export default function AccountPage() {
    const user = {
        id: 1,
        avatarLink: "https://www.w3schools.com/css/paris.jpg",
        fullName: "Khoa",
        dob: "1999-01-01",
        gender: "M",
        phone: "0123456789",
        email: "abc@gmail.com",
        facebook: true,
        google: true,
        gplx: { id: 1, number: "zxcvxz", name: "Khoa", dob: "1999-01-01", imageLink: "zxcvxzcvxzcv" }
    }
    const [isShowEditName, setIsShowEditName] = React.useState(false);
    const [isShowEditTelephone, setIsShowEditTelephone] = React.useState(false);
    const [isShowGPLX, setIsShowGPLX] = React.useState(false);
    const [isShowEditEmail, setIsShowEditEmail] = React.useState(false);
    const [isShowGoogle, setIsShowGoogle] = React.useState(false);
    return (
        <>
            <div className="account">
                <div className="cover-profile "></div>
                <div className="profile">
                    <div className="profile__content">
                        <div className="profile__content__header">
                            <div className="profile__content__header-avatar">
                                <div className="avatar">
                                    <img src="https://www.w3schools.com/css/paris.jpg"></img>
                                </div>
                            </div>
                            <div className="profile__content__header-infor">
                                <div className="profile__content__header-infor-heading">
                                    <div className="item-content">
                                        <div className="item-content-name">
                                            <p>{user.fullName}<a id="icon-name" onClick={() => setIsShowEditName(true)}><BiEdit /></a></p>
                                        </div>
                                        <div className="item-content-status">
                                            <span className="date-john">Tham gia: 01/06/2021 </span>
                                            <span className="count-trip">Chưa có chuyến</span>
                                        </div>
                                    </div>
                                    <div className="item-points" id="box">
                                        <span className="point"><span className="icon-star"><GiAlliedStar /></span>0 Điểm<span className="icon-ques"><AiOutlineQuestionCircle /></span></span>
                                    </div>
                                </div>
                                <div className="profile__content__header-infor-footing">
                                    <div className="date-of-birth" id="box">
                                        <span className="" id="lable">Ngày sinh</span>
                                        <span className="" id="ctn">123</span>
                                    </div>
                                    <div className="gender" id="box">
                                        <span className="" id="lable">Giới tính</span>
                                        <span className="" id="ctn">Nam</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile__content__body">
                            <div className="profile__content__body-infor">
                                <div className="profile__content__body-infor-inside">
                                    <ul id="ul">
                                        <li id="li">
                                            <span className="" id="lable">Điện thoại</span>
                                            <span className="" id="ctn">123123123<a id="icon" onClick={() => setIsShowEditTelephone(true)}><BiEdit /></a></span>
                                        </li>
                                        <li id="li">
                                            <span className="" id="lable">GPLX</span>
                                            <span className="" id="ctn"><a id="icon" onClick={() => setIsShowGPLX(true)}><BiEdit /></a></span>
                                        </li>
                                        <li id="li">
                                            <span className="" id="lable">Email</span>
                                            <span className="" id="ctn">abc@gmail.com<a id="icon" onClick={() => setIsShowEditEmail(true)}><BiEdit /></a></span>
                                        </li>
                                        <li id="li">
                                            <span className="" id="lable">Facebook</span>
                                            <span className="" id="ctn"><a className="icon-link" id="icon" ><BsLink45Deg /></a></span>
                                        </li>
                                        <li id="li">
                                            <span className="" id="lable">Google</span>
                                            <span className="" id="ctn">ABC<a className="icon-close" id="icon" onClick={() => setIsShowGoogle(true)}><AiOutlineCloseCircle /></a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile__footer"></div>
                </div>
            </div>

            <EditName showEditName={isShowEditName} handleClose={() => setIsShowEditName(false)} />
            <EditTelephone showEditTelephone={isShowEditTelephone} handleClose={() => setIsShowEditTelephone(false)} />
            <EditEmail showEditEmail={isShowEditEmail} handleClose={() => setIsShowEditEmail(false)} />
            <EditGoogle showGoogle={isShowGoogle} handleClose={() => setIsShowGoogle(false)} />
            <GPLX showGPLX={isShowGPLX} handleClose={() => setIsShowGPLX(false)} />
        </>


    )
}
