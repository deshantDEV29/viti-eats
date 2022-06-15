import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function AddressDetails() {
  const [address, setAddress] = useState("");

  useEffect(() => {
    setAddress(localStorage.getItem("address"));
  }, []);

  function saveaddress() {
    localStorage.setItem("address", address);
  }
  return (
    <div className=" p-3  bg-light rounded mb-1 ml-2 mr-2 shadow" >
      <h6>Address Details</h6>

      <div>
        <p>{address}</p>
      </div>

      <Popup
        trigger={
          <p
            className="text-danger font-weight-bold"
            style={{ cursor: "pointer" }}
          >
            Add New Address
          </p>
        }
        modal
        nested
      >
        {(close) => (
          <div className="p-2">
            <div
              className="d-flex justify-content-between mb-4 "
              style={{ borderBottom: "1px solid", borderColor: "grey" }}
            >
              <h5>Address</h5>
              <a
                className="close"
                onClick={close}
                style={{ cursor: "pointer" }}
              >
                &times;
              </a>
            </div>
            <div>
              <form className="container">
                <label className="form-label row">Complete Address</label>
                <input
                  type="text"
                  className="row rounded bg-light border mb-4 w-100"
                  style={{ boxShadow: "none", outline: "none" }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <button
                  className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                  onClick={saveaddress}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default AddressDetails;
