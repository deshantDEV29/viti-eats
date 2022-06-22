import React from "react";
import group from "../assets/group.jpg";
import ethics from "../assets/ethics.png";
import service from "../assets/service.png";
import delivery from "../assets/delivery.png";

function About() {
  return (
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
      <h1>About Us</h1>
      <br />
      <div class="clearfix">
        <img
          src={group}
          class="col-md-3 float-md-end mb-3 ms-md-3 pr-5"
          alt="group"
        ></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>

      <br />

      <div class="container px-5">
        <div class="row gx-5">
          <div class="col">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
              <h2> Our Mission </h2>
              <p>THIS COLUMN STATES OUR MISSION</p>
            </div>
          </div>
          <div class="col">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">
              <h2>Our Vision</h2>
              <p>THIS COLUMN STATES OUR VISION</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <h2>Our Core Values</h2>

        <div class="container">
          <div class="row">
            <div class="col shadow p-3 mb-5 bg-body rounded">
              <img src={ethics} alt="ethics"></img>
              <h3>Ethics</h3>
              <p class="text-justify">
                We strive to do the right thing all the time. We‘re principled
                and fair in all of our dealings. We take personal responsibility
                to do our very best. Promises made are promises kept.
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded">
              <img src={service} alt="quality service"></img>
              <h3>Quality Service</h3>
              <p class="text-justify">
                We recognize our success is tied to the success of our valued
                customers. Despite our size and scale, we pay attention to the
                small details that matter. When our customers need help, we
                strive to be surprisingly responsive problem solvers.
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded">
              <img src={delivery} alt="delivery"></img>
              <h3>Outstanding Delivery</h3>
              <p class="text-justify">
                Great food can only be complete with great delivery experience.
                With every single of our drivers trained in customer service,
                minimise disruption to your business to perfect every delivery.
                We can customise our deliveries to your needs, just ask your
                sales agent when ordering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
