import React from 'react';
import { Link } from "react-router-dom";

import './Order.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

class App extends React.Component {
  componentDidMount() {

    $(document).ready(function () {
      $('#example').DataTable();
    });
  }
  render() {
    return (
      <div className="MainDiv">
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

        <div className="container">

          <table id="example" class="display">
            <thead>
              <tr>
                <th>ORDER NUMBER</th>
                <th>TOTAL</th>
                <th>PAYMENT METHOD</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>19</td>
                <td>MPAISA</td>
                <td>DELIVERED</td>

                <td>
                  <a className='btn btn-success' href="/ordertrack">Track Order</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>1</td>
                <td>CASH</td>
                <td>IN PROGRESS</td>
                <td>
                <a className='btn btn-success' href="/ordertrack">Track Order</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>5</td>
                <td>CASH</td>
                <td>IN PROGRESS</td>
                <td>
                <a className='btn btn-success' href="/ordertrack">Track Order</a>
                </td>
              </tr>

            </tbody>
            <tfoot>
              <tr>
                <th>ORDER NUMBER</th>
                <th>TOTAL</th>
                <th>PAYMENT METHOD</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </tfoot>
          </table>

        </div>
      </div>
    );
  }
}
export default App;