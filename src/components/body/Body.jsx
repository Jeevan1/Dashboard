import React from 'react'
import Nav from '../navbar/Nav';
import Content from '../content/Content';
import "./body.scss";

function Body() {
  return (
    <div className='body'>
        <div className="container-fluid py-3">
            <Nav />
            <Content />
        </div>
    </div>
  )
}

export default Body;