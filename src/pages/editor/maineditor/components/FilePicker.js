import React from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "100%",
        marginLeft: "0.75rem",
        padding: "0.75rem",
        width: "195px",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "0.375rem",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label
          htmlFor="file-upload"
          style={{
            border: "1px solid #D1D5DB",
            padding: "0.375rem 0.5rem",
            borderRadius: "0.375rem",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            fontSize: "0.75rem",
            color: "#4B5563",
            outline: "none",
            ring: "1px solid #3B82F6",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          Upload File
        </label>

        <p
          style={{
            marginTop: "0.5rem",
            color: "#6B7280",
            fontSize: "0.75rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          style={{
            fontSize: "0.75rem",
          }}
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          style={{
            fontSize: "0.75rem",
          }}
        />
      </div>
    </div>
  );
};

export default FilePicker;
