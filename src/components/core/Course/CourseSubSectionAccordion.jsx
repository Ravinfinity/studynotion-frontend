import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi";

function CourseSubSectionAccordion({ SubSec }) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className={`flex items-center gap-2`}>
          <span>
            <HiOutlineVideoCamera />
          </span>
          <p>{SubSec?.title}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseSubSectionAccordion;
