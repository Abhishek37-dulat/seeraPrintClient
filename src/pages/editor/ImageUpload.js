import React, { useState } from "react";

const ImageUpload = ({ setImageUploadData }) => {
  const [imgdata, setImgdata] = useState([]);
  function handleFileChange(event) {
    const imag = event.target.files;
    const tempdt = [];
    for (let x = 0; x < imag.length; x++) {
      const reader = new FileReader();

      reader.onload = () => {
        // setImageUpload();
        tempdt.push(reader.result);
      };
      reader.readAsDataURL(imag[x]);
    }
    console.log(tempdt);
    setImgdata(tempdt);
  }

  const handleImage = () => {
    setImageUploadData(imgdata);
  };
  console.log(imgdata);
  return (
    <>
      <div className="card">
        <h3>Images</h3>
        <hr />
        <span>Accepted formats</span>
        <span>.jpg, .jpeg, .png, .gif, .svg</span>
        <label
          style={{
            background: "#000",
            color: "#fff",
            borderRadius: "25px",
            height: "40px",
            fontWeight: 500,
            marginTop: "7px",
            display: "inline-block",
            padding: "10px 20px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            name="image"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          Upload logo or image
        </label>
        <div style={{ display: "flex", width: "100%", cursor: "pointer" }}>
          <div>
            {imgdata.length > 0
              ? imgdata?.map((data) => {
                  return (
                    <img
                      src={data}
                      style={{ width: "70px", margin: "4px" }}
                      alt="fetchImagesasa"
                      onClick={() => handleImage()}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
