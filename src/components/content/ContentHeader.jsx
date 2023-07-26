import React from 'react';
import {PiDotsThreeOutlineLight} from "react-icons/pi";
import {AiFillDollarCircle} from "react-icons/ai";

function ContentHeader({title, display,sales,subtitle}) {
  return (
    <div className='content-header d-flex justify-content-between align-items-center bg-white'>
      <div style={{lineHeight: '10px'}}>
      <h4 className="title bg-white" >{title}</h4>
      <small className='text-secondary'>{subtitle}</small>
      </div>
      <PiDotsThreeOutlineLight className={`${display }`} style={{fontSize: '25px'}}/> 
      <AiFillDollarCircle className={`text-warning ${sales}`} style={{fontSize: '50px',}}/> 
    </div>
  )
}

export default ContentHeader;