import React from "react";
import group from "../assets/group.jpg";
import ethics from "../assets/ethics.png";
import service from "../assets/service.png";
import delivery from "../assets/delivery.png";
import anurag from "../assets/anurag.jpg";
import deshant from "../assets/deshant.jpg";
import aliyah from "../assets/aliya.jpg";
import shahil from "../assets/shahilDP.jpg";
import shahil2 from "../assets/shahil.jpg";
import shiva from "../assets/harshadc.jpg";
import aboutus from "../assets/aboutus.jpg";
import { height } from "@mui/system";

function About() {
  return (
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
      <img
        src={aboutus}
        style={{ width: "100%", height: "8%" }}
        alt="quality service"
      ></img>
      <br />
      <div class="clearfix">
        <p
          className="mx-5"
          style={{ justifyContent: "center", fontStyle: "italic" }}
        >
          Viti Eats, Organizer, Craig Stephen, opened the first ‘Organization
          Name’ Restaurant in Los Alamitos, California on September 27, 1977.
          Today, there are 37 areas all through Arizona, California, Illinois,
          Louisiana, Nevada, Oregon, Tennessee, and Washington. ‘Organization
          Name’ Restaurants are well known with a substantial gathering of
          people including families, kids, seniors, and business experts. Our
          benevolent condition is perfect for praising unique events,
          facilitating a business lunch, or assembling for a flavorful dinner
          with loved ones. Open day by day for lunch and dinner,’ Company Name’
          offers a choice of naturally arranged things utilizing just the best
          fixings accessible. Top picks incorporate Certified Angus Beef®, crisp
          fish, rotisserie chicken, infant back pork ribs. New prepared pot pie,
          strength plates of mixed greens, wood-let go pizzas, pasta,
          sandwiches, burgers, and more.’Company Name’s heated merchandise and
          treats including our Six-Layer Chocolate Motherlode Cake, Scratch
          Carrot Cake, and delectably rich cream cheddar pies are prevalent top
          choices with our visitors.
        </p>
      </div>

      <br />
      {/* 
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
      </div> */}
      <br />
      <div>
        <h2 style={{ fontStyle: "italic" }}>Our Core Values</h2>

        <div class="container">
          <div class="row">
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={ethics} alt="ethics"></img>
              <h3 style={{ fontStyle: "italic" }}>Ethics</h3>
              <p class="" style={{ fontStyle: "italic" }}>
                We strive to do the right thing all the time. We‘re principled
                and fair in all of our dealings. We take personal responsibility
                to do our very best. Promises made are promises kept.
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={service} alt="quality service"></img>
              <h3 style={{ fontStyle: "italic" }}>Quality Service</h3>
              <p class="" style={{ fontStyle: "italic" }}>
                We recognize our success is tied to the success of our valued
                customers. Despite our size and scale, we pay attention to the
                small details that matter. When our customers need help, we
                strive to be surprisingly responsive problem solvers.
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={delivery} alt="delivery"></img>
              <h3 style={{ fontStyle: "italic" }}>Outstanding Delivery</h3>
              <p class="" style={{ fontStyle: "italic" }}>
                Great food can only be complete with great delivery experience.
                With every single of our drivers trained in customer service,
                minimise disruption to your business to perfect every delivery.
                We can customise our deliveries to your needs, just ask your
                sales agent when ordering.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <h2 style={{ fontStyle: "italic" }}> Developers</h2>

          <div class="row">
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={deshant} alt="ethics"></img>
              <h5 className="mt-4">Dehant Singh</h5>
              <p class="" style={{ fontStyle: "italic" }}>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.”{" "}
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img
                src={aliyah}
                style={{ width: "149px" }}
                alt="quality service"
              ></img>
              <h5 className="mt-4">Aliyah Hussien</h5>
              <p class="" style={{ fontStyle: "italic" }}>
                "Always code as if the guy who ends up maintaining your code
                will be a violent psychopath who knows where you live"
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={shahil} alt="delivery"></img>
              <h5 className="mt-4">Shahil Kumar</h5>
              <p class="" style={{ fontStyle: "italic" }}>
                "The best error message is the one that never shows up"
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={shiva} alt="delivery"></img>
              <h5 className="mt-4">Harshad Chand</h5>
              <p class="" style={{ fontStyle: "italic" }}>
                "Give a man a program, frustrate him for a day. Teach a man to
                program, frustrate him for a lifetime."
              </p>
            </div>
            <div class="col shadow p-3 mb-5 bg-body rounded mx-3">
              <img src={anurag} alt="delivery"></img>
              <h5 className="mt-4">Anuraag Raj</h5>
              <p class="" style={{ fontStyle: "italic" }}>
                "Sometimes it pays to stay in bed on Monday, rather than
                spending the rest of the week debugging Monday’s code"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
