import React from "react";
import middlevideo from  "../Body/videos/middlevideo.mp4"
import "./Middle.css";

function Middle() {
  return (
<div className="main">
<video src={middlevideo} autoPlay loop muted/>
        <div className="content">Want to prepare for an interview?
            <p  >you are at the right place </p>
        </div>
       </div>
    
  );
}

export default Middle;
