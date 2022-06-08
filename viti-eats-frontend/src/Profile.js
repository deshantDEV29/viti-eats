import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);

  let navigate = useNavigate();

  let base64String = "";

  let userid = localStorage.getItem("userid");


  useEffect(() => {
    async function fetchdata() {
      userid = userid.replaceAll('"', "");
       let id = userid;
       let user_id={id};
       console.log(user_id);

      let result = await fetch("http://localhost:8000/api/getprofile", {
        method: "POST",
        body: JSON.stringify(user_id),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      console.result('result',result);
      setData(result);
      console.log(data);
    }
    fetchdata();
  }, []);

  const DisplayData = data.map((userdetails) => {
    return (
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
                  value={"email@gmail.com"}
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
                  value={"8976568"}
                  disabled
                ></input>
              </div>
            </div>

            <button class="btn btn-primary" type="button">
              Edit
            </button>
          </form>
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
      <div class="row">
        <div class="col-xl-4">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <img src="https://media.newyorker.com/photos/59097b6c8b51cf59fc423c4b/master/w_300,c_limit/mcgrath-ben.png"></img>

              <div class="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>

              <div class="container">
                <label class="custom-file" for="customInput">
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
                  ></input>
                  <span class="custom-file-control form-control-file"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">{DisplayData}</div>
      </div>
    </div>
  );
}

export default Profile;
