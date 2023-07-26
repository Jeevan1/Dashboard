import React from "react";
import "./contact.scss";
import { LiaUserPlusSolid } from "react-icons/lia";
import { PiListChecksDuotone } from "react-icons/pi";
import { BsUiChecksGrid } from "react-icons/bs";
import Buttons from "../Button/Button";
import Search from "../search/Search";
import { contactsData } from "../../data";

function Contacts() {
  return (
    <div className="contact m-3 py-3">
      <div className="container-fluid">
        <div className="contact__header">
          <div className="row">
            <div className="col-lg-3 col-sm-2">
              <span className=" fs-4 fw-normal">Contacts</span>
            </div>
            <div className="col-lg-9 col-sm-10 d-flex justify-content-end gap-3">
              <button className=" bg-primary text-white px-4 py-2 rounded-2 d-flex align-items-center gap-2">
                <LiaUserPlusSolid className="icon" style={{ fontSize: "20px" }} />
                <span className=" fs-6">Add Contacts</span>
              </button>
              <button className=" bg-primary text-white px-2 py-1 rounded-2 d-flex align-items-center gap-2">
                <PiListChecksDuotone className="icon" style={{ fontSize: "22px" }} />
              </button>
              <button className=" bg-white border border-primary text-primary px-2 py-1 rounded-2 d-flex align-items-center gap-2">
                <BsUiChecksGrid className="icon" style={{ fontSize: "22px" }} />
              </button>
              <Search
                placeholder={"Search Contacts"}
                color={"text-secondary"}
              />
            </div>
          </div>
        </div>
        <div className="contact__body my-4">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="name">Name</th>
                <th className="email">Email</th>
                <th className="location">Location</th>
                <th className="phone">Phone</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((item, idx) => (
                <tr key={item.id}>
                  <td className="name">
                    <img src={item.img} alt="username" />
                    <span>{item.name}</span>
                  </td>
                  <td className="email">{item.email}</td>
                  <td className="location">{item.location}</td>
                  <td className="phone">{item.phone}</td>
                  <td className="action">
                    <button className="border border-primary py-1 px-2 text-primary rounded-2">
                      Edit
                    </button>
                    <button className="border border-danger py-1 px-2 text-danger rounded-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
