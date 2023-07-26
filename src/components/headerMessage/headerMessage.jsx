import React from 'react';
import "./headerMessage.scss";
import {FiShield, FiInfo} from "react-icons/fi";
import {RxCross2, RxCrossCircled} from "react-icons/rx";
import {PiWarningCircleLight} from "react-icons/pi"
import { headerMessages } from '../../data';
import {BsArrowRight} from 'react-icons/bs';

function HeaderMessage() {
  return (
    <div className='headerMessage'>
        <div className="top">
            <h5 className='px-4 py-4'>Messages</h5>
        </div>
        <div className="bottom mx-1">
        {headerMessages.map((data,idx) => (
            <div className="m-4 d-flex justify-content-between" key={idx}>
            <div className="left d-flex align-items-center gap-3">
              {
                data.type==='success'&& <FiShield className='left-1 bg-opacity-10 bg-success text-success' /> || data.type==='question'&& <FiInfo className='left-1 bg-opacity-10 bg-info text-info' /> ||data.type==='error'&& <RxCross2 className='left-1 bg-opacity-10 bg-danger text-danger' /> || data.type==='warning'&& <PiWarningCircleLight className='left-1 bg-opacity-10 bg-warning text-warning' />
              }
              <div className="left-2 d-flex flex-column align-center">
                <small className="name  fw-medium">{data.name}</small>
                <small className="desc ">{data.desc}</small>
              </div>
            </div>
            <div className="right d-flex align-items-center gap-2">
            <small className=' bg-light p-1'>{data.time}</small>
                <RxCrossCircled  className='text-secondary remove'/>

            </div>
          </div>
        ))}
        </div>
        <div className="view-all_noti text-primary d-flex justify-content-center align-items-center  py-3 border-top">
            <small className=''>VIEW ALL ACTIVITIES</small>
            <span className='arrows'>
                <BsArrowRight />
            </span>
        </div>
    </div>
  )
}

export default HeaderMessage