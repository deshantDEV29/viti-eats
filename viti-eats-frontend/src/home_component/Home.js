import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import "./Home.css";
import ReactSpinner from "../ReactSpinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/c1.jpg";
import logo2 from "../assets/c2.jpg";
import logo3 from "../assets/c3.jpg";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  let user_id = localStorage.getItem("userid");
  useEffect(() => {
    async function fetchdata() {
      let result = await fetch("http://localhost:8000/api/displayrestaurant");
      result = await result.json();
      setData(result);
      setLoading(false);
      console.log(result);
      console.log("data", data);
    }
    fetchdata();
    if (user_id === null) {
      // alert("Please Login to access full service");
    }
  }, []);

  const DisplayData = data.map((restaurant) => {
    const toComponentMenu = () => {
      navigate("/menu", { state: { id: restaurant.id } });
    };
    return (
      <div className="d-sm-flex justify-content-center p-2 col-xl-3 col-sm-5 col-md-4">
        <div
          className="rounded-lg"
          onClick={() => {
            toComponentMenu();
          }}
        >
          <Restaurant
            id={restaurant.id}
            restaurant_name={restaurant.restaurantname}
            image={restaurant.shortimage}
            rating={restaurant.rating}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      {!isLoading ? (
        <>
          <div
            style={{
              height: "340px",
              marginTop: "-50px",
              marginBottom: "150px",
            }}
            id="carouselExampleIndicators"
            className="carousel slide rounded-circle container mt-0"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 rounded-lg"
                  src={logo}
                  style={{ height: "300px" }}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 rounded-lg"
                  src={logo2}
                  style={{ height: "300px" }}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 rounded-lg"
                  src={logo3}
                  style={{ height: "300px" }}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="container-fluid">
            <div className="bg-white m-5 rounded row">{DisplayData}</div>
          </div>
        </>
      ) : (
        <ReactSpinner />
      )}
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";
// import Restaurant from "./Restaurant";
// import "./Home.css";
// import ReactSpinner from "../ReactSpinner";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/c1.jpg";
// import logo2 from "../assets/c2.jpg";
// import logo3 from "../assets/c3.jpg";

// function Home() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchdata() {
//       let result = await fetch("http://localhost:8000/api/displayrestaurant");
//       result = await result.json();
//       setData(result);
//       setLoading(false);
//       console.log(result);
//       console.log("data", data);
//     }
//     fetchdata();
//   }, []);

//   const DisplayData = data.map((restaurant) => {
//     const toComponentMenu = () => {
//       navigate("/menu", { state: { id: restaurant.id } });
//     };
//     return (
//       <div
//         className="d-sm-flex justify-content-center p-2 col-xl-3 col-sm-5 col-md-4"
//         style={{ width: "auto" }}
//       >
//         <div
//           className="rounded-lg"
//           onClick={() => {
//             toComponentMenu();
//           }}
//         >
//           <Restaurant
//             id={restaurant.id}
//             restaurant_name={restaurant.restaurantname}
//             image={restaurant.shortimage}
//             rating={restaurant.rating}
//           />
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <div
//         style={{ height: "540px", marginTop: "-50px", marginBottom: "150px" }}
//         id="carouselExampleIndicators"
//         className="carousel slide rounded-circle container mt-0"
//         data-ride="carousel"
//       >
//         <ol className="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             className="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100 rounded-lg"
//               src={logo}
//               style={{ height: "600px" }}
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100 rounded-lg"
//               src={logo2}
//               style={{ height: "600px" }}
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100 rounded-lg"
//               src={logo3}
//               style={{ height: "600px" }}
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//       <div className="container-fluid">
//         <div className="bg-white m-5 mt-5 rounded row">
//           {!isLoading ? DisplayData : <ReactSpinner />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
