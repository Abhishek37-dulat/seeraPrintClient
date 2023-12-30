import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "100%",
        marginLeft: "0.75rem",
        padding: "0.75rem",
        width: "195px",
        height: "220px",
        borderRadius: "0.375rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          fontSize: "0.875rem",
          border: "1px solid #D1D5DB",
          padding: "0.5rem",
          outline: "none",
          flex: "1",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "3px" }}>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            style={{
              fontSize: "0.75rem",
            }}
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              style={{
                fontSize: "0.75rem",
              }}
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              style={{
                fontSize: "0.75rem",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
