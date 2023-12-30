import React, { useEffect, useRef } from "react";

function useDragger({ imgRef }) {
  const isClicked = useRef(false);

  const startX = useRef(null);
  const startY = useRef(null);
  const lastX = useRef(null);
  const lastY = useRef(null);

  useEffect(() => {
    const target = imgRef.current;
    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;
    if (!container) throw new Error("target element must have a parent");

    const onMouseDown = (e) => {
      isClicked.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      lastX.current = target.offsetLeft;
      lastY.current = target.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - startX.current + lastX.current;
      const nextY = e.clientY - startY.current + lastY.current;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, [imgRef]);
}

export default useDragger;
