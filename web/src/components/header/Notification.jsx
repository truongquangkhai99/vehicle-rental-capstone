import notiApi from "api/notiApi";
import { formatDateTime } from "lib/Helper";
import React, { useEffect, useRef, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Notification(props) {
  const [show, setShow] = useState(false);
  const [listNoti, setListNoti] = useState([]);
  const [updateNoti, setUpdateNoti] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setShow(false);
  });
  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const handleRead = (item) => {
    listNoti.forEach((element) => {
      if (element.id === item.id) {
        element.readed = true;
      }
    });
    notiApi.readNoti({ id: item.id });
    setListNoti([...listNoti]);
    setShow(false);
  };
  useEffect(() => {
    if (!listNoti.length) {
      notiApi.getAllNoti().then((res) => {
        setListNoti(res);
      });
    }
    if (updateNoti) {
      setUpdateNoti(false);
      const interval = setInterval(() => {
        notiApi.getAllNoti().then((res) => {
          setListNoti(res);
        });
      }, 10000);
      return  () => clearInterval(interval);
    }
  }, []);
  return (
    <div ref={wrapperRef} className="me-2 nav-item dropdown">
      <span
        className="dropdown-toggle nav-link cursor--pointer"
        onClick={handleShow}
      >
        <IoMdNotifications className="icon fs--1" />
        {(() => {
          const len =
            listNoti.filter((item) => {
              return item.readed === false;
            }).length || 0;
          return (len?<span className="noti--unread">{len}</span>:null)
        })()}
      </span>
      <div
        className={`dropdown-menu dropdown-menu-light ${show ? "show" : ""}`}
      >
        <ul id="noti">
          {listNoti.length ? (
            listNoti.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`noti ${item.readed ? "" : "not-read"}`}
                  onClick={() => {
                    handleRead(item);
                  }}
                >
                  <Link draggable="false" to={item.link}>
                    <div className="d-flex">
                      <div className="noti__avatar">
                        <img src={item.imgLink} alt="from avatar" />
                      </div>
                      <div className="noti__desc">
                        <p className="noti__desc--tittle">{item.title}</p>
                        <p className="noti__desc--content">{item.content}</p>
                        <p className="noti__desc--time">
                          {formatDateTime(item.createTime, true)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })
          ) : (
            <li className="text-center d-block">Không có thông báo nào</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Notification);

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
