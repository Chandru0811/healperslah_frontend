import { useState } from "react";
import { Link } from "react-router-dom";

function OffersView() {
  
  const [data] = useState({
    expiry_date: "2024-12-31",
    discount_percent: 10,
    discount_amount: 20,
    description: "Hurry Up!",
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
          <Link to="/offers" className="custom-breadcrumb">
            &nbsp;Offers
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Offers View
        </li>
      </ol>
      <div className="card vh-100" style={{ border: "1px solid #dbd9d0" }}>
        <div className="d-flex px-4 justify-content-between align-items-center card_header p-1 mb-4">
          <div class="d-flex align-items-center">
            <div class="d-flex">
              <div class="dot active"></div>
            </div>
            <span class="me-2 text-muted">View Offers</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/offers">
              <button type="button " className="btn btn-sm btn-border">
                Back
              </button>
            </Link>
            &nbsp;&nbsp;
          </div>
        </div>
        <div className="container-fluid px-4">
          <div className="row pb-3">
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Expiry Date</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.expiry_date}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Discount Percent</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">
                    : {data.discount_percent}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Discount Amount</p>
                </div>
                <div className="col-6">
                  <p className="text-muted text-sm">: {data.discount_amount}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 my-2">
              <div className="row">
                <div className="col-6">
                  <p className="fw-medium text-sm">Description</p>
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

export default OffersView;
