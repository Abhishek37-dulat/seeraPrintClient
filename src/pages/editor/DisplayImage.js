import React, { useEffect } from "react";
import interact from "interactjs";

const DisplayImage = ({ imageUplaoadData }) => {
  useEffect(() => {
    // const imgArray = [setImageUpload];

    const dragMoveListener = (event) => {
      const target = event.target;
      let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.transform = `translate(${x}px, ${y}px)`;

      // update the position attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    };

    interact(".resize-drag")
      .draggable({
        onmove: dragMoveListener,
        restrict: {
          restriction: "parent",
          elementRect: { top: 2, left: 0.8, bottom: 1, right: 0.7 },
        },
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        // keep aspect ratio
        preserveAspectRatio: true,

        // keep the edges inside the parent
        restrictEdges: {
          outer: "parent",
          endOnly: true,
        },

        // minimum size
        restrictSize: {
          min: { width: 100, height: 50 },
          max: { width: 400, height: 200 },
        },

        inertia: true,
      })
      .on("resizemove", (event) => {
        const target = event.target;
        let x = parseFloat(target.getAttribute("data-x")) || 0;
        let y = parseFloat(target.getAttribute("data-y")) || 0;

        // update the element's style
        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      });

    // Cleanup function
    return () => {
      interact(".resize-drag").unset();
    };
  }, []);
  console.log(imageUplaoadData);
  return (
    <>
      <div className="resize-container">
        {/* {Array.from(Array(3).keys()).map((i) => ( */}
        <div className="resize-drag">
          {imageUplaoadData ? (
            <img
              src={
                imageUplaoadData
                  ? imageUplaoadData?.length > 0
                    ? imageUplaoadData[0]
                    : null
                  : null
              }
              alt={`Image`}
              style={{ border: "1px solid #000" }}
            />
          ) : null}
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default DisplayImage;
