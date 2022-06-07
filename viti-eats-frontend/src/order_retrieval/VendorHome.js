import React from 'react'

function VendorHome() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-primary">
              <h5 class="card-title">Total Product</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-info">
              <h5 class="card-title">Total Sales</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body bg-danger">
              <h5 class="card-title">Total category</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-9 mt-5">
        <table class="table">
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col"></th>
            <th scope="col">Order Process</th>
          </tr>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <a class="btn btn-primary" href="/vendor/order" role="button">
                  Process
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>
                <a class="btn btn-primary" href="/vendor/order" role="button">
                  Process
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>
                <a class="btn btn-primary" href="/vendor/order" role="button">
                  Process
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VendorHome