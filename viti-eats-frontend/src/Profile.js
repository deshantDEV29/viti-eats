import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReactSpinner from "./ReactSpinner";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let navigate = useNavigate();

  let base64String = "";

  let id = localStorage.getItem("userid");
  

  useEffect(() => {
    async function fetchdata() {
      let userid = { id };
      console.log("userid", userid);
      let result = await fetch("http://localhost:8000/api/getprofile", {
        method: "POST",
        body: JSON.stringify(userid),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      result = await result.json();
      console.log("result", result);
      setData(result);
      console.log("user", data);

      setLoading(false);
    }
    fetchdata();
  }, []);

  function imageUploaded() {
    var file = document.querySelector("input[type=file]")["files"][0];
    var reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      setImage(base64String);
    };
    reader.readAsDataURL(file);
  }

  async function SaveImage(e) {
    e.preventDefault();
    let pic = {
      id,
      image,
    };
    console.log(pic);

    let result = await fetch("http://localhost:8000/api/setprofileimage", {
      method: "POST",
      body: JSON.stringify(pic),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      console.log(result);
      navigate("/profile");
      window.location.reload(false);
    } else {
      console.log("profile pic add unsuccessful");
    }
    

    e.target.reset();
  }

  async function updatename(e) {
    e.preventDefault();
    let updateprofile = {
      id,
      name,
    };

    console.log(updateprofile)

    let result = await fetch("http://localhost:8000/api/updatename", {
      method: "POST",
      body: JSON.stringify(updateprofile),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result)
     localStorage.setItem("username", JSON.stringify(name));
    if (result) {
      navigate("/profile");
      window.location.reload(false);
    } else {
      console.log("profile update unsuccessful");
    }
     navigate("/profile");
     window.location.reload(false);
    
    e.target.reset();
  }

  async function updateemail(e) {
    e.preventDefault();
    let updateprofile = {
      id,
      email,
    };

    let result = await fetch("http://localhost:8000/api/updateemail", {
      method: "POST",
      body: JSON.stringify(updateprofile),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      navigate("/profile");
      window.location.reload(false);
    } else {
      console.log("profile update unsuccessful");
    }
    e.target.reset();
  }

  async function updatephone(e) {
    e.preventDefault();
    let updateprofile = {
      id,
      phone,
    };

    let result = await fetch("http://localhost:8000/api/updatephone", {
      method: "POST",
      body: JSON.stringify(updateprofile),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    if (result) {
      navigate("/profile");
      window.location.reload(false);
    } else {
      console.log("profile update unsuccessful");
    }
    e.target.reset();
  }

  const DisplayData = data.map((userdetails) => {
    return (
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                key={userdetails.profile_image}
                src={"data:image/png;base64," + userdetails.profile_image}
              ></img>

              <div className="small font-italic text-muted mb-4">
                {/* JPG or PNG no larger than 5 MB */}
              </div>

              <div className="container">
                <Popup
                  trigger={
                    <p className="btn btn-primary" type="submit">
                      Update Profile Picture
                    </p>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="p-2">
                      <div
                        className="d-flex justify-content-between mb-4 "
                        style={{
                          borderBottom: "1px solid",
                          borderColor: "grey",
                        }}
                      >
                        <h5>Choose An Image</h5>
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
                          <div className="p-3">
                            <input
                              type="file"
                              id="shortimage"
                              onChange={imageUploaded}
                              className="form-control m-auto p-1 m-2 border-0"
                              required="required"
                            />
                          </div>

                          <button
                            className="btn btn-primary"
                            onClick={SaveImage}
                          >
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1 d-flex">Name</label>
                    <input
                      className="form-control"
                      key={userdetails.name}
                      value={userdetails.name}
                      disabled
                    ></input>
                    <Popup
                      trigger={
                        <p
                          className="btn btn-primary mt-2 float-center"
                          type="submit"
                          style={{ cursor: "pointer" }}
                        >
                          Edit
                        </p>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="p-2">
                          <div
                            className="d-flex justify-content-between mb-4 "
                            style={{
                              borderBottom: "1px solid",
                              borderColor: "grey",
                            }}
                          >
                            <h5>Update Name</h5>
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
                              <label className="form-label row">Name</label>
                              <input
                                type="text"
                                className="row rounded bg-light border mb-4 w-100"
                                style={{ boxShadow: "none", outline: "none" }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />

                              <button
                                className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                                onClick={updatename}
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1 d-flex">Email</label>
                    <input
                      className="form-control"
                      key={userdetails.email}
                      value={userdetails.email}
                      disabled
                    ></input>
                    <Popup
                      trigger={
                        <p
                          className="btn btn-primary mt-2 float-center"
                          type="submit"
                          style={{ cursor: "pointer" }}
                        >
                          Edit
                        </p>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="p-2">
                          <div
                            className="d-flex justify-content-between mb-4 "
                            style={{
                              borderBottom: "1px solid",
                              borderColor: "grey",
                            }}
                          >
                            <h5>Update Email</h5>
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
                              <label className="form-label row">Email</label>
                              <input
                                type="text"
                                className="row rounded bg-light border mb-4 w-100"
                                style={{ boxShadow: "none", outline: "none" }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />

                              <button
                                className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                                onClick={updateemail}
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1 d-flex">Phone</label>
                    <input
                      className="form-control"
                      value={userdetails.phone}
                      disabled
                    ></input>
                    <Popup
                      trigger={
                        <p
                          className="btn btn-primary mt-2 float-center"
                          type="submit"
                          style={{ cursor: "pointer" }}
                        >
                          Edit
                        </p>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="p-2">
                          <div
                            className="d-flex justify-content-between mb-4 "
                            style={{
                              borderBottom: "1px solid",
                              borderColor: "grey",
                            }}
                          >
                            <h5>Update Phone</h5>
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
                              <label className="form-label row">Phone</label>
                              <input
                                type="text"
                                className="row rounded bg-light border mb-4 w-100"
                                style={{ boxShadow: "none", outline: "none" }}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                maxLength={7}
                              />

                              <button
                                className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                                onClick={updatephone}
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      {!isLoading ? (
        <div>
          <nav className="nav nav-borders">
            <a
              className="nav-link active ms-0"
              href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
              target="__blank"
            >
              Profile
            </a>
          </nav>

          {DisplayData}
        </div>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default Profile;
