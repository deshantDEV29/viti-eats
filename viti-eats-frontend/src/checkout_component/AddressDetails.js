import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function AddressDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setAddress(localStorage.getItem("address"));
    setContact(localStorage.getItem("contact"));
  }, []);

  function saveaddress() {
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("contact", contact);
  }
  return (
    <div className="d-flex flex-column justify-content-between p-3 bg-light border border-secondary rounded mb-1">
      <h6>Address Details</h6>

      <div>
        <p>{name}</p>
        <p>{address}</p>
        <p>{contact}</p>
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
                <label className="form-label mt-2 row">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="row rounded bg-light border mb-4 w-100"
                  style={{ boxShadow: "none", outline: "none" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required="required"
                />
                <label className="form-label row">Complete Address</label>
                <input
                  type="text"
                  className="row rounded bg-light border mb-4 w-100"
                  style={{ boxShadow: "none", outline: "none" }}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="form-label row">Contact Number</label>
                <input
                  type="text"
                  className="row rounded bg-light border mb-4 w-100"
                  style={{ boxShadow: "none", outline: "none" }}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />

                {/* <button
                  className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                  onClick={saveaddress}
                >
                  Add
                </button> */}
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default AddressDetails;
