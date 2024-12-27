import React, { useState } from "react";
import { Link } from "react-router-dom";

function ServiceView() {
  const [data, setData] = useState({
    service_group_id: 1,
    name: "House Cleaning",
    describtion: "Test",
    image: "",
    order: "100",
    base_price: "500",
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
          <Link to="/service" className="custom-breadcrumb">
            &nbsp;Service
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Service View
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
            <span class="me-2 text-muted">View Service</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/service">
              <button type="button " className="btn btn-sm btn-border">
                Back
              </button>
            </Link>
            &nbsp;&nbsp;
            <button type="button " className="btn btn-sm btn-border">
              Activate
            </button>
          </div>
        </div>
        <div className="container-fluid px-4">
          <div className="row pb-3">
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Service Group Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.service_group_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Name</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.name}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Order</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.order}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Best Price</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.base_price}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Image</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.image}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Description</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.describtion}
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

export default ServiceView;
