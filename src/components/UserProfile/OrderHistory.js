import React, { useState } from "react";

const OrderHistory = () => {
  const [history, setHistory] = useState(true);
  const [buyAgain, setBuyAgain] = useState(true);

  const handleHistory = (event) => {
    setHistory(true);
    setBuyAgain(false);
  };
  const handleBuyAgain = (event) => {
    setHistory(false);
    setBuyAgain(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>Order History& Record</h2>
          </div>
        </div>
        <div className="row" style={{ position: "relative", top: "15px" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <span
              style={{ cursor: "pointer", fontWeight: 600 }}
              onClick={handleHistory}
            >
              Order History
            </span>
            <span
              className="mx-4"
              style={{ cursor: "pointer", fontWeight: 600 }}
              onClick={handleBuyAgain}
            >
              Buy It Again
            </span>
          </div>
        </div>
        <hr />
        {history ? (
          <>
            <div className="py-4">
              <span style={{ fontSize: "18px" }}>bishnugeteidea@gmail.com</span>
              <span className="mx-4" style={{ fontSize: "18px" }}>
                <u>Not Bishnu?</u>
              </span>
            </div>
            <div className="text-center py-4">
              <p style={{ fontSize: "26px", fontWeight: 600 }}>
                You don't have any orders yet.
              </p>
              <p style={{ fontSize: "18px" }}>
                When you’ve placed your first order, you’ll see it here.
              </p>
              <button
                style={{
                  border: "1px solid #000",
                  borderRadius: "50px",
                  height: "60px",
                  width: "200px",
                  background: "#000",
                  color: "#fff",
                }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="py-2" style={{ background: "#F8F8F8" }}>
              <p
                style={{
                  padding: "50px 50px",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                You do not have any products available for reorder yet.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderHistory;
