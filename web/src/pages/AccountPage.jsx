import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineQuestionCircle,AiFillCheckCircle,AiFillWarning } from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import EditName from "components/account/EditName";
import EditTelephone from "components/account/EditTelephone";
import EditEmail from "components/account/EditEmail";
import EditGoogle from "components/account/EditGoogle";
import GPLX from "components/account/GPLX";
import userApi from "api/userApi";
import { formatDateTime } from "lib/Helper";

export default function AccountPage() {
  const [user, setUser] = useState({
    id: 0,
    avatarLink: "",
    fullName: "",
    dob: null,
    gender: "",
    phone: "",
    email: "",
    drivingLincense: {
      id: 0,
      number: "",
      name: "",
      dob: "",
      imageLink: "",
      confirmed: false,
    },
  });
  const [isShowEditName, setIsShowEditName] = React.useState(false);
  const [isShowEditTelephone, setIsShowEditTelephone] = React.useState(false);
  const [isShowGPLX, setIsShowGPLX] = React.useState(false);
  const [isShowEditEmail, setIsShowEditEmail] = React.useState(false);
  const [isShowGoogle, setIsShowGoogle] = React.useState(false);
  useEffect(() => {
    userApi.getInfo().then((res) => {
    // @ts-ignore
    console.log(res);
      setUser(res);
    });
  }, []);
  return (
    <>
      <div className="account">
        <div className="cover-profile "></div>
        <div className="profile">
          <div className="profile__content">
            <div className="profile__content__header">
              <div className="profile__content__header-avatar">
                <div className="avatar">
                  <img src={user.avatarLink}></img>
                </div>
              </div>
              <div className="profile__content__header-infor">
                <div className="profile__content__header-infor-heading">
                  <div className="item-content">
                    <div className="item-content-name">
                      <p>
                        {user.fullName}
                        <a
                          id="icon-name"
                          onClick={() => setIsShowEditName(true)}
                        >
                          <BiEdit />
                        </a>
                      </p>
                    </div>
                    <div className="item-content-status">
                      <span className="date-john">Tham gia: 01/06/2021 </span>
                      <span className="count-trip">Chưa có chuyến</span>
                    </div>
                  </div>
                  <div className="item-points" id="box">
                    <span className="point">
                      <span className="icon-star">
                        <GiAlliedStar />
                      </span>
                      0 Điểm
                      <span className="icon-ques">
                        <AiOutlineQuestionCircle />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="profile__content__header-infor-footing">
                  <div className="date-of-birth" id="box">
                    <span className="" id="lable">
                      Ngày sinh
                    </span>
                    <span className="" id="ctn">
                     {formatDateTime(user.dob,false)}
                    </span>
                  </div>
                  <div className="gender" id="box">
                    <span className="" id="lable">
                      Giới tính
                    </span>
                    <span className="" id="ctn">
                      {user.gender==="M"?"Nam":user.gender==="F"?"Nữ":null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__content__body">
              <div className="profile__content__body-infor">
                <div className="profile__content__body-infor-inside">
                  <ul id="ul">
                    <li id="li">
                      <span className="" id="lable">
                        Điện thoại
                      </span>
                      <span className="" id="ctn">
                        {user.phone}
                        <a
                          id="icon"
                          onClick={() => setIsShowEditTelephone(true)}
                        >
                          <BiEdit />
                        </a>
                      </span>
                    </li>
                    <li id="li">
                      <span className="" id="lable">
                        GPLX
                      </span>
                      <span className="" id="ctn">
                        {user.drivingLincense.confirmed ? (
                          <span className="text-primary">Đã xác thực <AiFillCheckCircle/></span>
                        ) : (
                          <span className="text-primary">Chưa xác thực <AiFillWarning/></span>
                        )}
                        <a id="icon" onClick={() => setIsShowGPLX(true)}>
                          <BiEdit />
                        </a>
                      </span>
                    </li>
                    <li id="li">
                      <span className="" id="lable">
                        Email
                      </span>
                      <span className="" id="ctn">
                        {user.email}
                        <a id="icon" onClick={() => setIsShowEditEmail(true)}>
                          <BiEdit />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__footer"></div>
        </div>
      </div>

      <EditName
        showEditName={isShowEditName}
        handleClose={() => setIsShowEditName(false)}
      />
      <EditTelephone
        showEditTelephone={isShowEditTelephone}
        handleClose={() => setIsShowEditTelephone(false)}
      />
      <EditEmail
        showEditEmail={isShowEditEmail}
        handleClose={() => setIsShowEditEmail(false)}
      />
      <EditGoogle
        showGoogle={isShowGoogle}
        handleClose={() => setIsShowGoogle(false)}
      />
      <GPLX showGPLX={isShowGPLX} gplx handleClose={() => setIsShowGPLX(false)} />
    </>
  );
}
