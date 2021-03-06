import * as React from "react";
import "./resizeBar.css";
import { useRef, useEffect } from "react";
const resizeBar = function (props) {
  let mouseDowned = false;
  let mouseX = undefined;
  const dom = useRef();
  const mouseMove = function (e) {
    if (mouseDowned) {
      const dx = mouseX - e.pageX;
      if (typeof props.onResize === "function") {
        props.onResize(dx);
      }
    }
  };
  const mouseUp = function (e) {
    if (typeof props.onResizeEnd === "function" && mouseDowned) {
      document.getElementsByTagName("html")[0].style.userSelect = "auto";
      mouseDowned = false;
      const dx = mouseX - e.pageX;
      props.onResizeEnd(dx);
    }
  };

  const mouseDown = function (e) {
    if (e.target === dom.current) {
      document.getElementsByTagName("html")[0].style.userSelect = "none";
      mouseDowned = true;
      mouseX = e.pageX;
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return <div ref={dom} className="fileInfoView-resizeBar"></div>;
};
export const ResizeBar = resizeBar;
