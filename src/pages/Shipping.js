import React from "react";
import "./shipping.css";

const Shipping = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ top: "10px" }}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h3>Delivery Address</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  className="form-control input-field"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="First Name"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <br />
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Company"
                />
                <br />
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Phone"
                />
                <br />
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Address 1"
                />
                <br />
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Address 2"
                />
                <br />
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="City/ Towen"
                />
                <br />
                <select
                  className="form-select  input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default select example"
                >
                  <option selected>--State--</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control input-field"
                  style={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    padding: "15px 15px",
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Pin Code"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  India
                </span>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="card" style={{ background: "#F8F8F8" }}>
              <h3>GST Identification Number</h3>

              <p>
                For business use only, Company name and state listed in GST
                registration must match billing address. About GST
              </p>
              <hr />
              <h3>Order Summery</h3>
              <span className="d-flex flex-row">item Subtotal</span>
              <span
                className="d-flex flex-row-reverse"
                style={{ fontSize: "18px", fontWeight: 500 }}
              >
                ₹952.38
              </span>
              <br />
              <span className="d-flex flex-row">Shipping(estimated) IGST</span>
              <span
                className="d-flex flex-row-reverse"
                style={{ fontSize: "18px", fontWeight: 500 }}
              >
                ₹47.62
              </span>
              <hr />
              <h4 className="d-flex flex-row">Total</h4>
              <span
                className="d-flex flex-row-reverse"
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                ₹1000.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
