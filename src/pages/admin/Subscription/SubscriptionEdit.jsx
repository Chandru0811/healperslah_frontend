import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { MultiSelect } from "react-multi-select-component";

function SubscriptionEdit() {
  const serviceOption = [
    { label: "Service A", value: "1" },
    { label: "Service B", value: "2" },
    { label: "Service C", value: "3" },
  ];
  const [selectedService, setSelectedService] = useState([]);

  const validationSchema = Yup.object().shape({
    serviceId: Yup.array()
      .min(1, "*At least one service must be selected")
      .required("*Service Id is required"),
    name: Yup.string().required("*Name is required"),
    startDate: Yup.string().required("*Start Date is required"),
    endDate: Yup.string().required("*End Date is required"),
    recurrence: Yup.string().required("*Recurrence is required"),
    propertyType: Yup.string().required("*Property Type is required"),
    propertySize: Yup.string().required("*Property Size is required"),
    cleaning_hours: Yup.string().required("*Cleaning Hours is required"),
    range: Yup.string().required("*Range is required"),
    basicPrice: Yup.number()
      .typeError("*Price must be a number")
      .required("*Price is required")
      .positive("*Please enter a valid number")
      .integer("*Price must be a whole number"),
    description: Yup.string()
      .notRequired()
      .max(200, "*The maximum length is 200 characters"),
  });

  const formik = useFormik({
    initialValues: {
      serviceId: [],
      name: "",
      startDate: "",
      endDate: "",
      recurrence: "",
      propertyType: "",
      propertySize: "",
      cleaning_hours: "",
      range: "",
      basicPrice: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
    },
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
          <Link to="/subscription" className="custom-breadcrumb">
            &nbsp;Subscription
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Subscription Edit
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
              <span class="me-2 text-muted">Edit Subscription</span>
            </div>
            <div className="my-2 pe-3 d-flex align-items-center">
              <Link to="/subscription">
                <button type="button " className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
              &nbsp;&nbsp;
              <button type="submit" className="btn btn-button btn-sm">
                <span className="fw-medium">Update</span>
              </button>
            </div>
          </div>
          <div className="container-fluid px-4">
            <div className="row py-4">
              <div className="col-md-6 col-12 mb-4">
                <label className="form-label">
                  Service Id<span className="text-danger">*</span>
                </label>
                <MultiSelect
                  options={serviceOption}
                  value={selectedService}
                  onChange={(selected) => {
                    setSelectedService(selected);
                    formik.setFieldValue(
                      "serviceId",
                      selected.map((option) => option.value)
                    );
                  }}
                  labelledBy="Select Service"
                  className={`form-multi-select ${
                    formik.touched.serviceId && formik.errors.serviceId
                      ? "is-invalid"
                      : ""
                  }`}
                  style={{
                    height: "37.6px !important",
                    minHeight: "37.6px",
                  }}
                />
                {formik.touched.serviceId && formik.errors.serviceId && (
                  <div className="invalid-feedback">
                    {formik.errors.serviceId}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Start Date<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.startDate && formik.errors.startDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("startDate")}
                />
                {formik.touched.startDate && formik.errors.startDate && (
                  <div className="invalid-feedback">
                    {formik.errors.startDate}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  End Date<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.endDate && formik.errors.endDate
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("endDate")}
                />
                {formik.touched.endDate && formik.errors.endDate && (
                  <div className="invalid-feedback">
                    {formik.errors.endDate}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Recurrence<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.recurrence && formik.errors.recurrence
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("recurrence")}
                >
                  <option value=""></option>
                  <option value="Weekly">Weekly</option>
                  <option value="Alternate Week">Alternate Week</option>
                </select>
                {formik.touched.recurrence && formik.errors.recurrence && (
                  <div className="invalid-feedback">
                    {formik.errors.recurrence}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Property Type<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.propertyType && formik.errors.propertyType
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("propertyType")}
                >
                  <option value=""></option>
                  <option value="Office">Office</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Resenditial">Resenditial</option>
                </select>
                {formik.touched.propertyType && formik.errors.propertyType && (
                  <div className="invalid-feedback">
                    {formik.errors.propertyType}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Property Size<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.propertySize && formik.errors.propertySize
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("propertySize")}
                >
                  <option value=""></option>
                  <option value="Below 100 sqm">Below 100 sqm</option>
                  <option value="100 - 500 sqm">100 - 500 sqm</option>
                  <option value="Above 500 sqm">Above 500 sqm</option>
                </select>
                {formik.touched.propertySize && formik.errors.propertySize && (
                  <div className="invalid-feedback">
                    {formik.errors.propertySize}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Cleaning Hours<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.cleaning_hours &&
                    formik.errors.cleaning_hours
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("cleaning_hours")}
                >
                  <option value=""></option>
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                {formik.touched.cleaning_hours &&
                  formik.errors.cleaning_hours && (
                    <div className="invalid-feedback">
                      {formik.errors.cleaning_hours}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Range<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.range && formik.errors.range
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("range")}
                >
                  <option value=""></option>
                  <option value="Per Hour">Per Hour</option>
                  <option value="Per Day">Per Day</option>
                </select>
                {formik.touched.range && formik.errors.range && (
                  <div className="invalid-feedback">{formik.errors.range}</div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">Offer Id</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.offer_id && formik.errors.offer_id
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("offer_id")}
                />
                {formik.touched.offer_id && formik.errors.offer_id && (
                  <div className="invalid-feedback">
                    {formik.errors.offer_id}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Price<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.basicPrice && formik.errors.basicPrice
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("basicPrice")}
                />
                {formik.touched.basicPrice && formik.errors.basicPrice && (
                  <div className="invalid-feedback">
                    {formik.errors.basicPrice}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">Description</label>
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

export default SubscriptionEdit;
