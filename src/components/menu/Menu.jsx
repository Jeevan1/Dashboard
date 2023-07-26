import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import {FcTodoList} from "react-icons/fc";
import {GiNotebook} from "react-icons/gi";
import {BsClipboardData, BsCalendar2Check} from "react-icons/bs";
import {LuContact} from "react-icons/lu";
import {LiaFileInvoiceDollarSolid} from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import {HiChevronDoubleLeft} from "react-icons/hi";
import {BiSolidChevronDown, BiMailSend} from "react-icons/bi"
import "./menu.scss";

function Menu({toggle, toggleContent, change}) {
    const [data, showData] = useState(true);
    const hideMenu =() => {
        toggle(false);
    }
    const changeContent = (data) => {
        toggleContent(data);
    }

  return (
    <div className="mobile-menu">
      <div className="container-fluid">
        <div className="menu-1">
            <img src="./img/logo/logo.png" alt="" />
            <HiChevronDoubleLeft className='menu-icon ' onClick={hideMenu}/>
        </div>
        <div className="menu-2 my-2">
            <div className="heading bg-light p-2 mx-3 rounded-2 d-flex align-items-center justify-content-between">
                <div className="left d-flex">
                    <TbSmartHome className="icon bg-light me-1"/>
                    <span> Dashboard</span>
                </div>
                    <BiSolidChevronDown  className='right' onClick={() => showData(!data)}/>
            </div>
            <div className={`data m-auto ${data ? 'showData' : 'hideDatas'}`}>
                <p className={`${change.body && 'active text-primary'}`}  onClick={() =>changeContent('body')}>- &nbsp;Sales</p>
                <p>-&nbsp; Analytic</p>
                <p>- &nbsp;Finance</p>
                <p>- &nbsp;Crypto</p>
            </div>
        </div>
        <div className="menu-3">
        <div className="heading bg-light p-2">
                <p >APPS</p>
            </div>
            <ul className="">
                <li >
                    <AiFillMessage  className='icon'/>
                    <p>Chat</p>
                </li>
                <li>
                    <BiMailSend  className='icon'/>
                    <p>Mailbox</p>
                </li>
                <li className={`${change.todo && 'active text-white bg-primary'}`}  onClick={() =>changeContent('todo')} >
                    <FcTodoList  className='icon'/>
                    <p>Todo List</p>
                </li>
                <li className={`${change.note && 'active text-white bg-primary'}`}  onClick={() =>changeContent('note')}>
                    <GiNotebook  className='icon'/>
                    <p>Notes</p>
                </li>
                <li>
                    <BsClipboardData  className='icon'/>
                    <p>Scrumboard</p>
                </li>
                <li className={`${change.contacts && 'active text-white bg-primary'}`}  onClick={() =>changeContent('contacts')}>
                    <LuContact  className='icon'/>
                    <p>Contacts</p>
                </li>
                <li>
                    <LiaFileInvoiceDollarSolid  className='icon'/>
                    <p>Invoice</p>
                </li>
                <li className={`${change.calender && 'active text-white bg-primary'}`}  onClick={() =>changeContent('calender')}>
                    <BsCalendar2Check  className='icon'/>
                    <p>Callender</p>
                </li>
            </ul>
        </div>
        <div className="menu-3">
        <div className="heading bg-light p-2">
                <p>APPS</p>
            </div>
            <ul className="w-100 m-0">
                <li >
                    <AiFillMessage  className='icon' />
                    <p>Chat</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Mailbox</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Todo List</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Notes</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Scrumboard</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Contacts</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Invoice</p>
                </li>
                <li>
                    <AiFillMessage  className='icon'/>
                    <p>Callender</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
