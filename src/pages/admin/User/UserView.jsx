import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserView() {
  const [data, setData] = useState({
    name: "Raja",
    email: "raja@gmail.com",
    mobile: "9123456780",
    social_id: "",
    social_provider: "",
    email_verified_at: "",
    role: 2,
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
          <Link to="/user" className="custom-breadcrumb">
            &nbsp;User
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;User View
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
            <span class="me-2 text-muted">View User</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/user">
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
                  <p className="fw-medium">Email</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.email}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Role</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Social Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.social_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Social Provider</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.social_provider}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium">Email Verified At</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.email_verified_at}
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

export default UserView;
