import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import './Order.css'
import { Link } from "react-router-dom";

function Orders() {
 return (
   <>
     <h1>Orders</h1>
     <div className="float-left">
       {" "}
       <br />
       <div className=".myDiv" style={{ marginLeft: "50px" }}>
         <button className="button button1">Export orders to.CSV </button>
       </div>
       <br />
     </div>

     <br />

     <div class="row">
       <div class="col-md-auto">
         <text className="Text1"> Type:</text>
         <text class="format">Order</text>
       </div>

       <div class="col">
         <form>
           <label className="Text2">
             {" "}
             Order Number: {""}
             <input type="text" name="name" />
           </label>
           <input type="submit" value="Submit" />
         </form>

         <br />
         <br />
       </div>
     </div>
     <br></br>
     <br></br>

     <div>
       <table className="table">
         <tr>
           <th>ORDER NUMBER</th>
           <th>TOTAL</th>
           <th>PAYMENT METHOD</th>
           <th>STATUS</th>
           <th></th>
         </tr>
         <tr>
           <td>1</td>
           <td>19</td>
           <td>MPAISA</td>
           <td>DELIVERED</td>
           <Link to="/ordertrack" style={{ textDecoration: "none" }}>
             <td>
               <button className="button button2">track order</button>
             </td>
           </Link>
         </tr>
         <tr>
           <td>2</td>
           <td>1</td>
           <td>CASH</td>
           <td>IN PROGRESS</td>
           <Link to="/ordertrack" style={{ textDecoration: "none" }}>
             <td>
               <button className="button button2">track order</button>
             </td>
           </Link>
         </tr>
         <tr>
           <td>3</td>
           <td>5</td>
           <td>CASH</td>
           <td>IN PROGRESS</td>
           <Link to="/ordertrack" style={{ textDecoration: "none" }}>
             <td>
               <button className="button button2">track order</button>
             </td>
           </Link>
         </tr>
       </table>
     </div>
   </>
 );
}

export default Orders;
