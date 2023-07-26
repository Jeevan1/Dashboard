import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./callender.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Buttons from "../Button/Button";
import BigCalendarComponent from "./Day";

function Callender() {
  return (
    <div className="callender p-2 m-4">
      <div className="container-fluid">
        <div className="callender__1">
          <div className="row py-2">
            <div className="col-lg-6">
              <p className="title pb-2">Calender</p>
              <div className="type d-flex gap-3">
                <p>
                  <span className="bg-primary"></span>Work
                </p>
                <p>
                  <span className="bg-success"></span>Travel
                </p>
                <p>
                  <span className="bg-danger"></span>Personal
                </p>
                <p>
                  <span className="bg-info"></span>Important
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <button className="py-2 px-3 text-white bg-primary rounded-2 d-flex align-items-center gap-2">
                <AiOutlinePlus />
                <span>Create Event</span>
              </button>
            </div>
          </div>
          {/* <div className="row py-2">
            <div className="col-lg-5 d-flex gap-2">
              <BsChevronLeft className="icon border border-3 rounded-2" />
              <BsChevronRight className="icon border border-3 rounded-2" />
              <button className="time border px-3 border-primary fw-bold opacity-75 rounded-2">
                Today
              </button>
            </div>
            <div className="col-lg-2 d-flex justify-content-center">
                <h5 className=" fw-lighter">July 2023</h5>
            </div>
            <div className="col-lg-5 d-flex justify-content-end gap-2">
                <button className="px-3 rounded-2 border border-2  bg-white active">Month</button>
                <button className="px-3 rounded-2 border border-2  bg-white">Week</button>
                <button className="px-3 rounded-2 border border-2  bg-white">Day</button>
            </div>
          </div> */}
        </div>
        <div className="callender__2 py-3">
            <BigCalendarComponent />
        </div>
      </div>
    </div>
  );
}

export default Callender;
