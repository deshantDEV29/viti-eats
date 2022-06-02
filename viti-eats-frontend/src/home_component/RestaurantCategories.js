import React from "react";
import { useStateValue } from "../StateProvider";

function RestaurantCategories({
  id,
  name,
  long_description,
  item_rating,
  item_price,
  item_image,
}) {
  item_image = "data:image/png;base64," + item_image;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        item_price: item_price,
        item_image: item_image,
      },
    });
  };

  return (
    <div className="">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body h-100">
              <div className="float-left w-25 h-50">
                {" "}
                <img className="rounded img-fluid" src={item_image} alt="" />
              </div>
              <div
                className="float-left w-75"
                style={{ fontWeight: "", fontSize: "18px", fontFamily: "" }}
              >
                <div className="float-left" style={{ fontWeight: "bold" }}>
                  {name} 
                </div>
                <br></br>
                <br></br>
                <div style={{ fontWeight: "lighter" }}>
                  <span
                    className="float-left"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    {long_description}
                  </span>
                  <span
                    className="float-right"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    ⭐{item_rating}
                  </span>
                </div>

                <br></br>
                <div style={{ fontWeight: "lighter" }}>
                  <span
                    className="float-left text-success"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    FJD$ {item_price}
                  </span>
                  <span
                    className="float-right"
                    style={{ fontSize: "14px", fontWeight: "lighter" }}
                  >
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={addToBasket}
                    >
                      ADD
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body h-100">
                            <div className='float-left w-25 h-50'> <img className='rounded img-fluid' src={filetburger} alt='' /></div>
                            <div className='float-left w-75' style={{ fontWeight: "", fontSize: "18px", fontFamily: "" }}>
                                <div className='float-left' style={{ fontWeight: "bold" }}>{name}</div>
                                <br></br>
                                <br></br>
                                <div style={{ fontWeight: "lighter" }}>
                                    <span className='float-left' style={{ fontSize: "14px", fontWeight: "lighter" }} >{long_description}</span>
                                    <span className='float-right' style={{ fontSize: "14px", fontWeight: "lighter" }}>⭐{item_rating}</span>
                                </div>

                                <br></br>
                                <div style={{ fontWeight: "lighter" }}>
                                    <span className='float-left text-success' style={{ fontSize: "14px", fontWeight: "bold" }} >FJD$ {item_price}</span>
                                    <span className='float-right' style={{ fontSize: "14px", fontWeight: "lighter" }}><button type="button" class="btn btn-danger">ADD</button>
                                    </span>
                                </div>


                            </div>

                        </div>
                    </div>
                </div> */}
      </div>
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default RestaurantCategories;
