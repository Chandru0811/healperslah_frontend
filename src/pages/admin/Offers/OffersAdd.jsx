import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Cropper from "react-easy-crop";
import toast from "react-hot-toast";
import api from "../../../config/URL";

function OffersAdd() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    expiry_date: Yup.string().required("*Expiry Date is required"),
    discount_percent: Yup.number()
      .typeError("*Discount Percent must be a number")
      .required("*Discount Percent is required")
      .positive("*Please enter a valid number")
      .integer("*Discount Percent must be a whole number"),
    discount_amount: Yup.number()
      .typeError("*Discount Amount must be a number")
      .required("*Discount Amount is required")
      .positive("*Please enter a valid number")
      .integer("*Discount Amount must be a whole number"),
    description: Yup.string()
      .required("*Description is a required field")
      .max(200, "*The maximum length is 200 characters"),
  });

  const formik = useFormik({
    initialValues: {
      expiry_date: "",
      discount_percent: "",
      discount_amount: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async () => {},
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div className="container-fluid px-0">
      <ol
        className="breadcrumb my-3 px-2"
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
          &nbsp;Offers Add
        </li>
      </ol>
      <form
        onSubmit={formik.handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !formik.isSubmitting) {
            e.preventDefault();
          }
        }}
      >
        <div className="card">
          <div className="d-flex justify-content-between align-items-center card_header p-1 mb-4 px-4">
            <div class="d-flex align-items-center">
              <div class="d-flex">
                <div class="dot active"></div>
              </div>
              <span class="me-2 text-muted">Add Offers</span>
            </div>
            <div className="my-2 pe-3 d-flex align-items-center">
              <Link to="/offers">
                <button type="button " className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-button">
                Save
              </button>
            </div>
          </div>
          <div className="container-fluid px-4">
            <div className="row py-4">
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Expiry Date<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.expiry_date && formik.errors.expiry_date
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("expiry_date")}
                />
                {formik.touched.expiry_date && formik.errors.expiry_date && (
                  <div className="invalid-feedback">
                    {formik.errors.expiry_date}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Discount Percent<span className="text-danger">*</span>
                </label>
                <input
                  className={`form-control ${
                    formik.touched.discount_percent &&
                    formik.errors.discount_percent
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("discount_percent")}
                />
                {formik.touched.discount_percent &&
                  formik.errors.discount_percent && (
                    <div className="invalid-feedback">
                      {formik.errors.discount_percent}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Discount Amount<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.discount_amount &&
                    formik.errors.discount_amount
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("discount_amount")}
                />
                {formik.touched.discount_amount &&
                  formik.errors.discount_amount && (
                    <div className="invalid-feedback">
                      {formik.errors.discount_amount}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea
                  rows={5}
                  className={`form-control ${
                    formik.touched.description && formik.errors.description
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("description")}
                  maxLength={825}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="invalid-feedback">
                    {formik.errors.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OffersAdd;
