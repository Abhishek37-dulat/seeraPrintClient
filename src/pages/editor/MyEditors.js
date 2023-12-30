import React, { useState, useRef, useEffect } from "react";

const MyEditors = () => {
  const [image, setImage] = useState(null);
  const [textInput, setTextInput] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image
    if (image) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText(textInput, 20, 50); // Adjust position for text
      };
      img.src = image;
    }
  }, [image, textInput]);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1>Image Text Editor</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br />
            <input
              type="text"
              value={textInput}
              onChange={handleTextChange}
              placeholder="Enter text here..."
            />
            <br />
            {image && (
              <div style={{ position: "relative", display: "inline-block" }}>
                <canvas
                  ref={canvasRef}
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEditors;
