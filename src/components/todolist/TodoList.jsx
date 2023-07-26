import React, { useState, useEffect } from "react";
import { LuLayoutList } from "react-icons/lu";
import { FcTodoList } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { HiOutlineTrash } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { PiStarBold, PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { TbSquareRotatedFilled, TbPlus } from "react-icons/tb";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./TodoList.scss";
import Buttons from "../Button/Button";
import Search from "../search/Search";

//get the local storage data bachk
const getLocalData = () => {
  const lists = localStorage.getItem("TodoNote");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function TodoList() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAssignee, setInputAssignee] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [todos, setTodos] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [display, setDisplay] = useState(false);

  //    add notes function
  const addTask = () => {
    if (inputTitle === "" || inputAssignee === "" || inputDesc === "") {
      alert("plz fill the data..");
    } else {
      const date = new Date();
      const newItemData = {
        id: new Date().getTime().toString(),
        title: inputTitle,
        assignee: inputAssignee,
        tag: inputTag,
        desc: inputDesc,
        priority: inputPriority,
        date: `${date.getMonth()}, ${date.getDate()} ${date.getFullYear()}`,
        status: "incomplete",
      };
      setTodos([...todos, newItemData]);
      setDisplay(false);
      setInputTag("");
      setInputTitle("");
      setInputAssignee("");
      setInputDesc("");
      setInputPriority("");
    }
  };

  //adding local storage
  useEffect(() => {
    localStorage.setItem("TodoNote", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="TodoList p-3 bg-light">
        <div className="container-fluid row  my-4 m-auto">
          <div className="TodoList-1 col-lg-2 col-sm-12 border rounded-2 py-3">
            <div className="TodoList-1-top">
              <div className="TodoList-1-top-1 d-flex gap-2">
                <LuLayoutList className="icon" />
                <h5 className="m-0">Todo List</h5>
              </div>
              <hr />
              <div className="TodoList-1-top-2">
                <div className="note-nav active">
                  <div className="d-flex">
                    <FcTodoList className="icon" />
                    <p>Inbox</p>
                  </div>
                <span className="">23</span>
                </div>
                <div className="note-nav ">
                  <div className="d-flex">
                    <SlLike className="icon" />
                    <p>Done</p>
                  </div>
                <span className="">3</span>
                </div>
                <div className="note-nav">
                  <div className="d-flex">
                    <PiStarBold className="icon" />
                    <p>Import</p>
                  </div>
                <span className="">2</span>
                </div>
                <div className="note-nav">
                  <div className="d-flex">
                    <HiOutlineTrash className="icon" />
                    <p>Trash</p>
                  </div>
                <span className="">6</span>
                </div>
              </div>
              <hr />
              <div className="TodoList-1-top-3">
                <p className=" px-2 text-secondary">Tags</p>
                <div className="note-nav text-primary">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Team</p>
                </div>
                <div className="note-nav text-warning">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Low</p>
                </div>
                <div className="note-nav text-info">
                  <TbSquareRotatedFilled className="icon" />
                  <p>Medium</p>
                </div>
                <div className="note-nav text-danger">
                  <TbSquareRotatedFilled className="icon" />
                  <p>High</p>
                </div>
              </div>
            </div>
            <div className="TodoList-1-bottom">
              <button
                className="w-100 p-2 rounded-2 bg-primary text-white d-flex align-items-center justify-content-center gap-2 fw-medium"
                onClick={() => setDisplay(!display)}
              >
                <TbPlus />
                <span>Add New Task</span>
              </button>
            </div>
          </div>
          <div className="TodoList-2 col-lg-10 col-sm-12 px-3 ">
            <div className="container-fluid bg-white rounded-2 overflow-hidden">
              <div className="todo-topbar p-3 bg-white ">
                <div className="row">
                  <div className="todo-topbar-1 col-6">
                    <Search width={200} />
                  </div>
                  <div className="todo-topbar-2 col-6 d-flex justify-content-end align-items-center gap-2">
                    <p>1-10 of 23</p>
                    <BsChevronLeft className="icon bg-dark bg-opacity-25 rounded-2" />
                    <BsChevronRight className="icon bg-dark bg-opacity-25 rounded-2" />
                  </div>
                  <div className="todo-topbar-2"></div>
                </div>
              </div>
              <div className="todo-item p-3 bg-white ">
                {todos.map((item, idx) => (
                  <div className="row border-top py-3" key={idx}>
                    <div className="col-lg-7 col-md-6 d-flex align-items-center gap-5">
                      <div className="todo-item-1 ">
                        <input type="checkbox" />
                      </div>
                      <div className="todo-item-2">
                        <p className=" fw-medium">
                          {item.status === "incomplete" ? (
                            item.title
                          ) : (
                            <del>{item.title}</del>
                          )}
                        </p>
                        <small className=" text-secondary">
                          {item.status === "complete" ? (
                            <del>{item.desc}</del>
                          ) : (
                            <span>{item.desc}</span>
                          )}
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-end gap-5">
                      <div className="todo-item-3 d-flex gap-3">
                        {item.tag && (
                          <Buttons name={item.tag} style="danger" size={14} />
                        )}
                        {item.priority && (
                          <Buttons
                            name={item.priority}
                            style="primary"
                            size={14}
                          />
                        )}
                      </div>
                      <div className="todo-item-4 ">
                        <del>{item.date}</del>
                      </div>
                      <div className="todo-item-5 d-flex align-items-center justify-content-center gap-3">
                        <img
                          src="./img/user/user.jpg"
                          alt="user"
                          className=""
                        />
                        <PiDotsThreeOutlineVerticalDuotone className="icon" />
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
            className="add-task-form bg-dark bg-opacity-50"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-wrapper border rounded-2">
              <div className="add-task-form-1 d-flex align-items-center justify-content-between bg-light py-2 px-3">
                <p className="title">Add task</p>
                <RxCross1
                  className="remove-icon"
                  onClick={() => setDisplay(!display)}
                />
              </div>
              <div className="add-task-form-2 py-2 px-3">
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlInput1">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    style={{ outline: "none" }}
                    id="exampleFormControlInput1"
                    placeholder="Enter Task Title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                </div>
                <div class="form-group py-2">
                  <label className="py-1" for="exampleFormControlSelect1">
                    Assignee
                  </label>
                  <select
                    class="form-control"
                    style={{ outline: "none !important" }}
                    id="exampleFormControlSelect1"
                    value={inputTag}
                    onChange={(e) => setInputAssignee(e.target.value)}
                  >
                    <option>Select Assignee</option>
                    <option>John Smith</option>
                    <option>Kia Vega</option>
                    <option>Jane Foster</option>
                    <option>Donna Frank</option>
                  </select>
                </div>
                <div className="row">
                  <div class="form-group col-lg-6 py-2">
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
                      <option>Select Tag</option>
                      <option>Team</option>
                      <option>Update</option>
                    </select>
                  </div>
                  <div class="form-group col-lg-6 py-2">
                    <label className="py-1" for="exampleFormControlSelect1">
                      Priority
                    </label>
                    <select
                      class="form-control"
                      style={{ outline: "none !important" }}
                      id="exampleFormControlSelect1"
                      value={inputPriority}
                      onChange={(e) => setInputPriority(e.target.value)}
                    >
                      <option>Select Priority</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
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
              <div className="add-task-form-3 py-3 px-3 d-flex gap-3 justify-content-end">
                <button
                  className="border border-danger px-3 py-1 rounded-2"
                  onClick={() => setDisplay(!display)}
                >
                  Cancel
                </button>
                <button
                  className=" bg-primary text-white px-3 py-1 rounded-2"
                  onClick={addTask}
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

export default TodoList;
