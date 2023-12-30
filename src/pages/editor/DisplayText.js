import React, { useEffect, useState } from "react";
import interact from "interactjs";

const DisplayText = ({ textInput, colorText }) => {
  const [color, setColor] = useState("#000");
  useEffect(() => {
    const imgArray = [textInput];

    const dragMoveListener = (event) => {
      const target = event.target;
      let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      target.style.transform = `translate(${x}px, ${y}px)`;

      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    };

    interact(".resize-drag")
      .draggable({
        onmove: dragMoveListener,
        restrict: {
          restriction: "parent",
          elementRect: { top: 1, left: 1, bottom: 1, right: 1 },
        },
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },

        preserveAspectRatio: true,

        restrictEdges: {
          outer: "parent",
          endOnly: true,
        },

        restrictSize: {
          min: { width: 100, height: 50 },
        },

        inertia: true,
      })
      .on("resizemove", (event) => {
        const target = event.target;
        let x = parseFloat(target.getAttribute("data-x")) || 0;
        let y = parseFloat(target.getAttribute("data-y")) || 0;

        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      });

    return () => {
      interact(".resize-drag").unset();
    };
  }, []);
  useEffect(() => {
    setColor(colorText);
  }, [colorText]);

  return (
    <div className="resize-container">
      {Array.from(Array(textInput).keys()).map((i) => (
        <div key={i} className="resize-drag">
          <p
            className="resize-drag"
            style={{ color }}
            onMouseDown={(e) => e.stopPropagation()}
            onDoubleClick={(e) => e.stopPropagation()}
          >
            {textInput}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayText;
