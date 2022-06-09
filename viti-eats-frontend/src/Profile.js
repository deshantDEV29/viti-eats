import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
      console.log(base64String);
      setImage(base64String);
      console.log(image);
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

  async function updateprofile(e) {
    e.preventDefault();
    let updateprofile = {
      id,
      name,
      email,
      phone,
    };
    console.log(updateprofile);

    let result = await fetch("http://localhost:8000/api/setprofiledetails", {
      method: "POST",
      body: JSON.stringify(updateprofile),
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
      console.log("profile update unsuccessful");
    }
    e.target.reset();
  }

  const DisplayData = data.map((userdetails) => {
    let image = "data:image/png;base64," + userdetails.profile_image;
    console.log(image);
    

    return (
      <div class="row">
        <div class="col-xl-4">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <img src={image}></img>

              <div class="small font-italic text-muted mb-4">
                {/* JPG or PNG no larger than 5 MB */}
              </div>

              <div class="container">
                {/* <label class="custom-file" for="customInput">
                  <p class="btn btn-primary" type="submit">
                    Upload new image
                  </p>

                  <input
                    type="file"
                    for="UserPhoto"
                    name="UserPhoto"
                    class="custom-file-input"
                    id="customInput"
                    aria-describedby="fileHelp"
                    onChange={imageUploaded}
                  ></input>
                  <span class="custom-file-control form-control-file"></span>
                </label> */}
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
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1 d-flex" for="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      value={userdetails.name}
                      disabled
                    ></input>
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1 d-flex" for="inputLastName">
                      Email
                    </label>
                    <input
                      className="form-control"
                      value={userdetails.email}
                      disabled
                    ></input>
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1 d-flex" for="inputLastName">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      value={userdetails.phone}
                      disabled
                    ></input>
                  </div>
                </div>

                <Popup
                  trigger={
                    <p
                      className="btn btn-primary"
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
                        <h5>Details</h5>
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
                            value={userdetails.name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label className="form-label row">Email</label>
                          <input
                            type="text"
                            className="row rounded bg-light border mb-4 w-100"
                            style={{ boxShadow: "none", outline: "none" }}
                            defaultValue={userdetails.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label row">Phone</label>
                          <input
                            type="text"
                            className="row rounded bg-light border mb-4 w-100"
                            style={{ boxShadow: "none", outline: "none" }}
                            defaultValue={userdetails.phone}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />

                          <button
                            className="mt-2 bg-danger text-white rounded border-0 pl-2 pr-2"
                            onClick={updateprofile}
                          >
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </Popup>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div class="container">
      <nav class="nav nav-borders">
        <a
          class="nav-link active ms-0"
          href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
          target="__blank"
        >
          Profile
        </a>
      </nav>

      {DisplayData}
    </div>
  );
}

export default Profile;
