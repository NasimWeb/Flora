import React from "react";
import "./Comments.css";
import { PiHeartStraightBold } from "react-icons/pi";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function Comments({img}) {
  return (
    <div>
      <div className="d-flex align-items-center gap-2">
        <div>
          <img
            src={img}
            style={{ width: "32px", height: "32px" }}
          />
        </div>
        <div>
          <span>lazyinterface</span>
          <span> great work ♥️🔥</span>
        </div>
      </div>
      <div className="d-flex gap-5 mt-2">
        <span>37w</span>
        <span>Reply</span>
        <span>
          <PiHeartStraightBold />
        </span>
        <span>
          <AiOutlineEllipsis />
        </span>
      </div>
    </div>
  );
}
