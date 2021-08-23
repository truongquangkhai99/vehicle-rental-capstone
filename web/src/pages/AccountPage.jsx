import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import {
  AiOutlineQuestionCircle,
  AiFillCheckCircle,
  AiFillWarning,
} from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";
import EditName from "components/account/EditName";
import EditTelephone from "components/account/EditTelephone";
import EditEmail from "components/account/EditEmail";
import EditGoogle from "components/account/EditGoogle";
import GPLX from "components/account/GPLX";
import userApi from "api/userApi";
import { formatDateTime } from "lib/Helper";
import EditAvatar from "components/account/EditAvatar";

export default function AccountPage() {
  const [user, setUser] = useState({
    email: "",
    emailVerified: false,
  });
  const [drivingLincense, setDrivingLincense] = useState({
    id: 0,
    number: "",
    name: "",
    dob: "",
    imageLink: "",
    confirmed: false,
  });
  const [avatarLink, setAvatarLink] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState({ fullName: "", dob: null, gender: "" });
  const [isShowEditName, setIsShowEditName] = React.useState(false);
  const [isShowEditTelephone, setIsShowEditTelephone] = React.useState(false);
  const [isShowGPLX, setIsShowGPLX] = React.useState(false);
  const [isShowEditEmail, setIsShowEditEmail] = React.useState(false);
  const [isShowEditAvatar, setIsShowEditAvatar] = React.useState(false);
  const [isShowGoogle, setIsShowGoogle] = React.useState(false);
  const updatePhone = (number) => {
    setPhone(number);
  };
  const updateInfo = (info) => {
    setInfo(info);
  };
  const updateAvatarLink = (link) => {
    setAvatarLink(link);
  };
  const updateGPLX = (gplx) => {
    setDrivingLincense(gplx);
  };
  const updateEmail = (data) => {
    setUser(data);
  };
  useEffect(() => {
    userApi.getInfo().then((res) => {
      // @ts-ignore
      setUser(res);
      setInfo({ fullName: res.fullName, dob: res.dob, gender: res.gender });
      setPhone(res.phone);
      setAvatarLink(res.avatarLink);
      if (res.drivingLincense) {
        setDrivingLincense(res.drivingLincense);
      }
      console.log(res);
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
                <div
                  className="avatar"
                  onClick={() => setIsShowEditAvatar(true)}
                >
                  <img src={avatarLink} alt=""></img>
                </div>
              </div>
              <div className="profile__content__header-infor">
                <div className="profile__content__header-infor-heading">
                  <div className="item-content">
                    <div className="item-content-name">
                      <p>
                        {info.fullName}
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
                </div>
                <div className="profile__content__header-infor-footing">
                  <div className="date-of-birth" id="box">
                    <span className="" id="lable">
                      Ngày sinh
                    </span>
                    <span className="" id="ctn">
                      {info.dob ? formatDateTime(info.dob, false) : null}
                    </span>
                  </div>
                  <div className="gender" id="box">
                    <span className="" id="lable">
                      Giới tính
                    </span>
                    <span className="" id="ctn">
                      {info.gender}
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
                        {phone}
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
                        {drivingLincense.confirmed ? (
                          <span className="text-primary">
                            Đã xác thực <AiFillCheckCircle className="icon" />
                          </span>
                        ) : (
                          <span className="text-danger">
                            Chưa xác thực <AiFillWarning className="icon" />
                          </span>
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
                        {user.email}{" "}
                        {user.emailVerified ? (
                          <span className="text-primary">
                            <AiFillCheckCircle className="icon" />
                          </span>
                        ) : (
                          <span className="text-danger">
                            <AiFillWarning className="icon" />
                          </span>
                        )}
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
        info={info}
        update={updateInfo}
      />
      <EditTelephone
        update={updatePhone}
        phone={phone}
        showEditTelephone={isShowEditTelephone}
        handleClose={() => setIsShowEditTelephone(false)}
      />
      {isShowEditEmail ? (
        <EditEmail
          update={updateEmail}
          data={user}
          showEditEmail={isShowEditEmail}
          handleClose={() => setIsShowEditEmail(false)}
        />
      ) : null}
      {isShowGPLX ? (
        <GPLX
          update={updateGPLX}
          showGPLX={isShowGPLX}
          gplx={drivingLincense}
          handleClose={() => setIsShowGPLX(false)}
        />
      ) : null}
      <EditAvatar
        update={updateAvatarLink}
        showEditAvatar={isShowEditAvatar}
        handleClose={() => setIsShowEditAvatar(false)}
      />
    </>
  );
}
