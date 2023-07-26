import React from "react";
import "./HeaderNoti.scss";

function HeaderNoti() {
  return (
    <div className="HeaderNoti">
      <div className="HeaderNoti-1 d-flex justify-content-between align-items-center py-2 px-3">
        <h5 className="title d-flex align-items-center">Notification</h5>
        <small className=" bg-primary bg-opacity-75 rounded text-white">
          3New
        </small>
      </div>
      <div className="HeaderNoti-2 border-top">
        <ul className="noti px-3 pb-0">
          <li className=" d-flex align-items-center py-2 gap-2 border-bottom">
            <img src="./img/user/user.jpg" alt="" className="left" />
            <div className="right">
              <p>
                <strong>John Doe</strong> invited you to 
                <strong> Prototyping</strong>
              </p>
              <p className="time">45 min ago</p>
            </div>
          </li>
          <li className=" d-flex align-items-center py-2 gap-2 border-bottom">
            <img src="./img/user/user.jpg" alt="" className="left" />
            <div className="right">
              <p>
                <strong>Adam Nolan</strong> mentioned you to 
                <strong> UX Basics</strong>
              </p>
              <p className="time">3h ago</p>
            </div>
          </li>
          <li className=" d-flex align-items-center py-2 gap-2">
            <img src="./img/user/user.jpg" alt="" className="left" />
            <div className="right">
              <p>
                <strong>Anna Morgan</strong> Upload a file  
                <strong> </strong>
              </p>
              <p className="time">9h ago</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="HeaderNoti-3 d-flex align-items-center justify-content-center border-top">
        <button className=" bg-primary text-light py-2 rounded">Read All Notifications</button>
      </div>
    </div>
  );
}

export default HeaderNoti;
