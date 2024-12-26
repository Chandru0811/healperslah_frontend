import React, { useState } from "react";
import { Link } from "react-router-dom";

function OrdersView() {
  const [data, setData] = useState({
    company_name: "New Company",
    order_id: 1,
    helper_id: 1,
    helper_name: "Helper",
    assigned_at: "2024-12-16 18:47:25",
    status: "Completed",
    availablity: '["Monday","Tuesday","Wednesday"]',
    specialized_in: '["Electrician","Plumbing"]',
    customer_name: "Customer",
    customer_email: "customer@gmail.com",
    customer_mobile: "9876543212",
    booking_type: "Service",
    date: "2024-12-16 18:47:25",
    start_date: "2024-12-16",
    end_date: "2024-12-16",
    service_name: "Home Cleaning",
  });

  return (
    <div className="container-fluid">
      <ol
        className="breadcrumb my-2 px-2"
        style={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        <li>
          <Link to="/" className="custom-breadcrumb">
            Home
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li>
          <Link to="/orders" className="custom-breadcrumb">
            &nbsp;Orders
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Order View
        </li>
      </ol>
      <div className="card" style={{ border: "1px solid #dbd9d0" }}>
        <div
          className="d-flex px-4 justify-content-between align-items-center p-1 mb-4"
          style={{ background: "#f5f7f9" }}
        >
          <div class="d-flex align-items-center">
            <div class="d-flex">
              <div class="dot active"></div>
            </div>
            <span class="me-2 text-muted">View Order</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/orders">
              <button type="button " className="btn btn-sm btn-border">
                Back
              </button>
            </Link>
          </div>
        </div>
        <div className="container-fluid px-4">
          <div className="row pb-3">
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Company Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.company_name}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Order Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.order_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Helper Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.helper_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Helper Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.helper_name}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.date.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Assigned At</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    : {data.assigned_at.substring(0, 10)}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Start Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.start_date}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">End Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.end_date}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6  ">
                  <p className="fw-medium">Status</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.status}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 my-2">
              <div className="row">
                <div className="col-3">
                  <p className="fw-medium">Availablity</p>
                </div>
                <div className="col-9">
                  <p className="text-muted text-sm">: {data.availablity}</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-12 my-2">
              <div className="row">
                <div className="col-3">
                  <p className="fw-medium">Specialized In</p>
                </div>
                <div className="col-9">
                  <p className="text-muted text-sm">: {data.specialized_in}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Customer Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.customer_name}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Customer Email</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.customer_email}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Customer Mobile</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.customer_mobile}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Booking Type</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.booking_type}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Service Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.service_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersView;
