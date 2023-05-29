import React from "react";
import "./DestinationStyles.css";

const DestinationData=(props)=>{
  return(
    <>
    <div className={props.className}>
     <div className="des-text">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
     </div>
     <div className="des-img">
      <img src={props.img1} alt="content" />
      <img src={props.img2} alt="content" />
     </div>
     </div>
    </>
  )
}

export default DestinationData;
