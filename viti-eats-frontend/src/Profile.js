import React from 'react'
import "./Profile.css";
import userprofile from "./assets/harshadc.jpg";

function Profile() {
  return (
    <div class="container">
      {/* <!-- Account page navigation--> */}
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
              {/* @*@Html.TextBox("UserPhoto", "", new { @class = "form-control2 input-md", type = "file", @required = "required" })*@ */}
              <button class="btn btn-primary" type="submit">
                Update Image
              </button>
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
                      value={"Ben"}
                      disabled
                    ></input>
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1 d-flex" for="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      value={"Smith"}
                      disabled
                    ></input>
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1 d-flex" for="inputFirstName">
                      Email
                    </label>
                    <input
                      className="form-control"
                      value={"ben@gmail.com"}
                      disabled
                    ></input>
                  </div>
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
                {/* <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1 d-flex" for="inputFirstName"  >First name</label>
                                <input className='form-control' value={'Harshad'} disabled></input>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1 d-flex" for="inputLastName">Last name</label>
                                <input className='form-control' value={'Harshad'} disabled></input>
                            </div>
                        </div>
                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1 d-flex" for="inputFirstName"  >First name</label>
                                <input className='form-control' value={'Harshad'} disabled></input>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1 d-flex" for="inputLastName">Last name</label>
                                <input className='form-control' value={'Harshad'} disabled></input>
                            </div>
                        </div> */}

                {/* <!-- Save changes button--> */}
                <button class="btn btn-primary" type="button">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile