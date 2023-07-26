import React, { useState, useEffect } from "react";
import { FaNotesMedical } from "react-icons/fa";
import { PiStarBold, PiDotsThreeOutlineVertical } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { TbSquareRotatedFilled, TbPlus } from "react-icons/tb";

import "./note.scss";

//get the local storage data bachk
const getLocalData = () => {
  const lists = localStorage.getItem("Notes");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function Notes() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [display, setDisplay] = useState(false);

  //    add notes function
  const addItem = () => {
    if (
      inputTitle === "" ||
      inputName === "" ||
      inputTag === "" ||
      inputDesc === ""
    ) {
      alert("plz fill the data..");
    } else {
      const date = new Date();
      const newItemData = {
        id: new Date().getTime().toString(),
        title: inputTitle,
        name: inputName,
        tag: inputTag,
        desc: inputDesc,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        status: "",
      };
      setItems([...items, newItemData]);
      setDisplay(false);
        setInputTag("");
        setInputTitle("");
        setInputName("");
        setInputDesc("");
    }
  };

  //adding local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="Notes p-3 bg-light">
        <div className="container-fluid row  my-4 m-auto">
          <div className="Notes-1 col-lg-2 border rounded-2 py-3">
            <div className="Notes-1-top">
              <div className="Notes-1-top-1 d-flex gap-2">
                <FaNotesMedical className="icon" />
                <h5 className="m-0">Notes</h5>
              </div>
              <hr />
              <div className="Notes-1-top-2">
                <div className="note-nav active">
                  <TfiWrite className="icon" />
                  <p>All Notes</p>
                </div>
                <div className="note-nav">
                  <PiStarBold className="icon" />
                  <p>Favourites</p>
                </div>
              </div>
              <hr />
              <div className="Notes-1-top-2">
                <p className=" px-2 text-secondary">Tags</p>
                <div className="note-nav text-primary">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Personal</p>
                </div>
                <div className="note-nav text-warning">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Work</p>
                </div>
                <div className="note-nav text-info">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Social</p>
                </div>
                <div className="note-nav text-danger">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Important</p>
                </div>
              </div>
            </div>
            <div className="Notes-1-bottom">
              <button
                className="w-100 p-2 rounded-2 bg-primary text-white d-flex align-items-center justify-content-center gap-2 fw-medium"
                onClick={() => setDisplay(!display)}
              >
                <TbPlus />
                <span>Add New Note</span>
              </button>
            </div>
          </div>
          <div className="Notes-2 col-lg-10">
            <div className="container-fluid ">
              <div className="row">
                {/* dispalying notes  */}
                {items.map((item, idx) => (
                  <div className={` col-lg-3 col-md-4 col-sm-12 mb-4`} key={idx}>
                    <div
                      className={`note-item p-3 rounded-2 ${
                        (item.tag === "Personal" &&
                          "bg-primary bg-opacity-25") ||
                        (item.tag === "Important" && "bg-danger bg-opacity-25") || 
                        (item.tag === "Work" && "bg-warning bg-opacity-25") || 
                        (item.tag === "Social" && "bg-info bg-opacity-25")
                      }`}
                      style={{
                        boxShadow: `${
                          (item.tag === "Personal" && "blue 0px 0px 3px") ||
                          (item.tag === "Important" && "red 0px 0px 3px") ||
                          (item.tag === "Work" && "red 0px 0px 3px") || 
                          (item.tag === "Social" && "cyan 0px 0px 3px")
                        }`,
                      }}
                    >
                      <div className="note-item-1 d-flex justify-content-between">
                        <div className="note-item-1-1 d-flex gap-2 align-items-center">
                          <img src="./img/user/user.jpg" alt="user" />
                          <small className=" text-secondary">
                            <strong className=" text-dark">{item.name}</strong>{" "}
                            <br /> {item.date}
                          </small>
                        </div>
                        <div className="note-item-1-2">
                          <PiDotsThreeOutlineVertical className=" text-info" />
                        </div>
                      </div>
                      <div className="note-item-2 py-3">
                        <strong className="note-item-2-1 d-block">
                          {item.title}
                        </strong>
                        <small>{item.desc}</small>
                      </div>
                      <div className="note-item-3 d-flex align-items-center justify-content-between">
                        <TbSquareRotatedFilled
                          className={`note-item-3-1 text-primary ${
                            (item.tag === "Personal" && "text-primary") ||
                            (item.tag === "Work" && "text-warning") ||
                            (item.tag === "Social" && "text-info") ||
                            (item.tag === "Important" && "text-danger") ||
                            "text-secondary"
                          }`}
                        />
                        <div className="note-item-3-2 d-flex gap-2">
                          <RiDeleteBin5Line className="text-danger" />
                          <PiStarBold className="text-warning" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* //form  */}
        {display && (
          <form
            className="add-note-form bg-dark bg-opacity-50"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-wrapper border rounded-2">
              <div className="add-note-form-1 d-flex align-items-center justify-content-between bg-light py-2 px-3">
                <p className="title">Add Note</p>
                <RxCross1
                  className="remove-icon"
                  onClick={() => setDisplay(!display)}
                />
              </div>
              <div className="add-note-form-2 py-2 px-3">
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlInput1">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    style={{ outline: "none" }}
                    id="exampleFormControlInput1"
                    placeholder="Enter Title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                </div>
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlInput1">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    style={{ outline: "none" }}
                    id="exampleFormControlInput1"
                    placeholder="Enter User Name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </div>
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlSelect1">
                    Tag
                  </label>
                  <select
                    class="form-control"
                    style={{ outline: "none !important" }}
                    id="exampleFormControlSelect1"
                    value={inputTag}
                    onChange={(e) => setInputTag(e.target.value)}
                  >
                    <option>None</option>
                    <option>Personal</option>
                    <option>Work</option>
                    <option>Social</option>
                    <option>Important</option>
                  </select>
                </div>
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlTextarea1">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    style={{ outline: "none" }}
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter Description"
                    value={inputDesc}
                    onChange={(e) => setInputDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="add-note-form-3 py-3 px-3 d-flex gap-3 justify-content-end">
                <button
                  className="border border-danger px-3 py-1 rounded-2"
                  onClick={() => setDisplay(!display)}
                >
                  Cancel
                </button>
                <button
                  className=" bg-primary text-white px-3 py-1 rounded-2"
                  onClick={addItem}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Notes;
