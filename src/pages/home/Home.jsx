import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import Menu from "../../components/menu/Menu";
import Notes from "../notes/Notes";
import TodoList from "../../components/todolist/TodoList";
import Callender from "../../components/callender/Callender";
import Contacts from "../../components/contacts/Contacts";

function Home() {
  const [change, setChange] = useState({
    body: true,
    note: false,
    todo: false,
    calender: false,
    contacts: false,
  });

  const [menu, setMenu] = useState(false);
  const [w, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const showMenu = (show) => {
    setMenu(show);
  };
  const hideMenu = (show) => {
    setMenu(show);
  };
  const toggleContent = (data) => {
    setChange((prevState) => ({
      prevState,
      [data]: true,
    }));
  };

  return (
    <div
      className="home "
      style={
        menu && w > 1000
          ? {
              display: "grid",
              gridTemplateColumns: `${w > 1000 ? "300px" : "2fr"} ${
                w > 1000 ? "5fr" : "300px"
              }`,
            }
          : {
              display: "grid",
              gridTemplateColumns: "1fr",
            }
      }
    >
      {menu && (
        <div
          className={`leftMenu ${menu ? "show" : ""}`}
          style={{
            position: `${w < 1000 && "fixed"}`,
            left: 0,
            zIndex: 9999,
            width: "300px",
            backgroundColor: "white",
          }}
        >
          <Menu toggle={hideMenu} change={change} toggleContent={toggleContent} />
        </div>
      )}
      <div className={`rightComponent ${!menu ? "no-show" : ""} bg-light`}>
        <Header toggle={showMenu} show={menu} w={w} />
        {change.body && <Body />}
        {change.note && <Notes />}
        {change.todo && <TodoList />}
        {change.calender && <Callender />}
        {change.contacts && <Contacts />}
      </div>
    </div>
  );
}

export default Home;
