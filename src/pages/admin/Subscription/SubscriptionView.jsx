import React, { useState } from "react";
import { Link } from "react-router-dom";

function SubscriptionView() {
  const [data, setData] = useState({
    serviceId: [1,2],
    name: "House Cleaning",
    startDate: "2025-01-01",
    endDate: "2025-01-15",
    recurrence: "Weekly",
    propertyType: "Apartment",
    propertySize: "100sqm",
    cleaningHours: "3",
    range: "Per Day",
    basicPrice: "1500",
    offer_id: "1",
    description: "500",
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
            &nbsp;Subscription
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Subscription View
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
            <span class="me-2 text-muted">View Subscription</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/subscription">
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
                  <p className="fw-medium">Service Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.serviceId}</p>
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
                  <p className="fw-medium">Start Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.startDate}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">End Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.endDate}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Recurrence</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.recurrence}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Property Type</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.propertyType}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Property Size</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.propertySize}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Cleaning Hours</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.cleaningHours}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Property Type</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.propertyType}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Range</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.range}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Basic Price</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.basicPrice}
                  </p>
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
                    : {data.description}
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

export default SubscriptionView;
