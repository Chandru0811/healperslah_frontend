import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaymentView() {
  const [data, setData] = useState({
    order_id: 1,
    helper_id: 1,
    company_id: 1,
    booking_type: "Service Group",
    amount_paid: "150",
    balance_amount: "0",
    total_amount: "150",
    payment_mode: "UPI",
  });

  return (
    <div className="container-fluid px-0">
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
          <Link to="/payment" className="custom-breadcrumb">
            &nbsp;Payment
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Payment View
        </li>
      </ol>
      <div className="card vh-100" style={{ border: "1px solid #dbd9d0" }}>
        <div
          className="d-flex px-4 justify-content-between align-items-center p-1 mb-4"
          style={{ background: "#f5f7f9" }}
        >
          <div class="d-flex align-items-center">
            <div class="d-flex">
              <div class="dot active"></div>
            </div>
            <span class="me-2 text-muted">View Payment</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/payment">
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
                  <p className="fw-medium text-sm">Order Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.order_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Helper Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.helper_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Company Id</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.company_id}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Booking Type</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.booking_type}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Amount Paid</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.amount_paid}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Balance Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.balance_amount}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Total Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.total_amount}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Payment Mode</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm text-break ">
                    : {data.payment_mode}
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

export default PaymentView;
