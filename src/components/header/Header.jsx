import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu, IoIosNotificationsOutline } from "react-icons/io";
import { BsFillCalendarEventFill, BsChat } from "react-icons/bs";
import { BiEdit, BiSun, BiLock } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { TbMail } from "react-icons/tb";
import { RxExit } from "react-icons/rx";

import "./header.scss";
import HeaderMessage from "../headerMessage/headerMessage";
import HeaderNoti from "../headerNoti/HeaderNoti";
import { countries } from "../../data";

function Header({ toggle, show, w }) {
  const [language, setLanguage] = useState("");
  const [subnav, setSubnav] = useState({
    language: false,
    message: false,
    noti: false,
    profile: false,
  });
  const divRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickOutside = divRef.every(
        (divReff) => !divReff.current || !divReff.current.contains(event.target)
      );

      if (isClickOutside) {
        setSubnav({
          language: false,
          message: false,
          noti: false,
          profile: false,
        });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const togglerNav = () => {};
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  const handleClick = () => {
    toggle(true);
  };
  return (
    <div className="header row py-0">
      <div className="header_1 col-lg-6 col-md-12">
        {!show && (
          <>
            {w > 800 ? (
              <img src="./img/logo/logo.png" alt="logo" className="logo" />
            ) : (
              ""
            )}
            {w < 800 && (
              <img src="./img/logo/logo2.png" alt="logo" className="logo" />
            )}
            <div className="menu">
              <IoMdMenu className="icon" onClick={handleClick} />
            </div>
          </>
        )}
        {w > 800 && (
          <>
            <div className="callender">
              <BsFillCalendarEventFill className="icon" />
            </div>
            <div className="todolist">
              <BiEdit className="icon" />
            </div>
            <div className="chat">
              <BsChat className="icon" />
            </div>
            <div className="search">
              <FiSearch className="icon" />
              {w > 500 && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="searchInput"
                />
              )}
            </div>
          </>
        )}
      </div>
      <div className="header_2 col-lg-6">
        <div className="mode" ref={divRef[0]}>
          <BiSun className="icon" />
        </div>
        <div className="language" ref={divRef[1]}>
          {language ? (
            <strong
              className="icon text-danger d-flex justify-content-center align-items-center"
              style={{ fontSize: "18px",
              width : '35px' ,
              height: '35px',
              fontWeight : 900,
             }}
              onClick={() =>
                setSubnav((prevState) => ({
                  prevState,
                  language: !prevState.language,
                }))
              }
            >
              {language}
            </strong>
          ) : (
            <FaEarthAfrica
              className="icon"
              onClick={() =>
                setSubnav((prevState) => ({
                  prevState,
                  language: !prevState.language,
                }))
              }
            />
          )}
          {subnav.language && (
            <div className="language_layout border bg-white rounded">
              <div className="language_layout-1 d-flex row flex-wrap p-3">
                {countries.map((data, idx) => (
                  <div
                    className="country-item col-6 d-flex gap-2 "
                    key={idx}
                    onClick={() => {
                      setLanguage(data.icon);
                      setSubnav({
                        language: false,
                        message: false,
                        noti: false,
                        profile: false,
                      });
                    }}
                  >
                    <p
                      className="country-icon"
                      style={{
                        backgroundColor: getRandomColor(),
                        color: "white",
                      }}
                    >
                      {data.icon}
                    </p>
                    <p className="country-name">{data.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="headerMessages" ref={divRef[2]}>
          <MdMarkEmailUnread
            className="icon"
            onClick={() =>
              setSubnav((prevState) => ({
                prevState,
                message: !prevState.message,
              }))
            }
          />
          {subnav.message && (
            <div className="message_layout border bg-white rounded">
              <HeaderMessage className="message_layout" />
            </div>
          )}
        </div>
        <div className="headerNotification" ref={divRef[3]}>
          <IoIosNotificationsOutline
            className="icon"
            onClick={() =>
              setSubnav((prevState) => ({
                prevState,
                noti: !prevState.noti,
              }))
            }
          />
          {subnav.noti && (
            <div className="notification_layout border bg-white rounded">
              <HeaderNoti className="notification_layout" />
            </div>
          )}
        </div>
        <div className="userIcon" ref={divRef[4]}>
          <img
            src="./img/user/user.jpg"
            alt=""
            className="userimg"
            onClick={() =>
              setSubnav((prevState) => ({
                prevState,
                profile: !prevState.profile,
              }))
            }
          />
          {subnav.profile && (
            <div className="userIconProfile border bg-white rounded pt-3">
              <div className="userIconProfile-1 px-3 d-flex align-items-center gap-3">
                <img
                  src="./img/user/user.jpg"
                  alt="user"
                  className="left rounded"
                />
                <div className="right">
                  <h5>
                    John Doe{" "}
                    <small className="bg-success bg-opacity-25 text-success rounded-2">
                      Pro
                    </small>
                  </h5>
                  <p className="">johndoe@gmail.com</p>
                </div>
              </div>
              <div className="userIconProfile-2 pt-3">
                <div className="link px-3">
                  <HiOutlineUser className="link-icon" />
                  <p>Profile</p>
                </div>
                <div className="link px-3">
                  <TbMail className="link-icon" />
                  <p>Inbox</p>
                </div>
                <div className="link px-3">
                  <BiLock className="link-icon" />
                  <p>Lock Screen</p>
                </div>
                <div className="link px-3">
                  <RxExit className="link-icon" />
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
