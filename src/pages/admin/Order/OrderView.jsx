import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AssignModal from "./AssignModal";
import api from "../../../config/URL";
import { toast } from "react-toastify"; 

function OrderView() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`admin/order/${id}`);
      if (response.data.success) {
        setData(response.data.data);
      } else {
        toast.error("Error Fetching Data");
      }
    } catch (error) {
      toast.error("Error Fetching Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          <Link to="/order" className="custom-breadcrumb">
            &nbsp;Order
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Order View
        </li>
      </ol>
      <div className="card vh-100" style={{ border: "1px solid #dbd9d0" }}>
        <div
          className="d-flex px-4 justify-content-between align-items-center p-1 mb-4"
          style={{ background: "#f5f7f9" }}
        >
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <div className="dot active"></div>
            </div>
            <span className="me-2 text-muted">View Order</span>
          </div>
          <div className="my-2 pe-3 d-flex align-items-center">
            <Link to="/order">
              <button type="button" className="btn btn-sm btn-border">
                Back
              </button>
            </Link>
            &nbsp;&nbsp;
            <AssignModal />
          </div>
        </div>
        {loading ? (
          <div className="loader-container">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <div className="container-fluid px-4">
              <div className="row pb-3">
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Order Number</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.order_number || " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Customer Id</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.customer_id || " --"}
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
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.total_amount !== null ? data.total_amount : " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Paid Amount</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        : {data.paid_amount !== null ? data.paid_amount : " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Balance Amount</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm">
                        :{" "}
                        {data.balance_amount !== null
                          ? data.balance_amount
                          : " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Paid At</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm text-break ">
                        : {data.paid_at || " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Paid For</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm text-break ">
                        : {data.paid_for || " --"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 my-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="fw-medium text-sm">Offer Id</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted text-sm text-break ">
                        : {data.offer_id || " --"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 my-4">
                  <h4>Booking Details</h4>
                </div>

                {data.order_details && data.order_details.length > 0 ? (
                  <>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Booking Id</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.booking_id || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Booking Type</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.booking_type || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Date Time</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.date_time || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Duration</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.duration || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Start Date</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.start_date || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">End Date</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.end_date || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 my-2">
                      <div className="row">
                        <div className="col-6">
                          <p className="fw-medium text-sm">Specifications</p>
                        </div>
                        <div className="col-6">
                          <p className="text-muted text-sm text-break ">
                            : {data.order_details[0]?.specifications || " --"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div>No booking details available</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderView;
