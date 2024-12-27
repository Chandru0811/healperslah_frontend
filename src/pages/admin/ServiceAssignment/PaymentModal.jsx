import { useFormik } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";

function PaymentModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    formik.resetForm();
  };

  const validationSchema = yup.object().shape({
    order_id: yup.string().required("*Order Id required"),
    helper_id: yup.string().required("*Helper Id required"),
    company_id: yup.string().required("*Company Id required"),
    booking_type: yup.string().required("*Booking Type required"),
    amount_paid: yup.string().required("*Amount Paid required"),
    balance_amount: yup.string().required("*Balance Amount required"),
    total_amount: yup.string().required("*Total Amount required"),
    payment_mode: yup.string().required("*Payment Mode required"),
    payment_status: yup.string().required("*Payment Status required"),
  });

  const formik = useFormik({
    initialValues: {
      order_id: "",
      helper_id: "",
      company_id: "",
      booking_type: "",
      amount_paid: "",
      balance_amount: "",
      total_amount: "",
      payment_mode: "",
      payment_status: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Form Submitted:", values);
      handleClose();
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-border"
        onClick={handleShow}
      >
        Payment
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Order Id<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.order_id && formik.errors.order_id
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("order_id")}
                  >
                    <option value=""></option>
                    <option value="1">Home Cleaning</option>
                    <option value="2">Plumbing</option>
                  </select>
                  {formik.touched.order_id && formik.errors.order_id && (
                    <div className="invalid-feedback">
                      {formik.errors.order_id}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Helper Id<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.helper_id && formik.errors.helper_id
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("helper_id")}
                  >
                    <option value=""></option>
                    <option value="1">Ramesh</option>
                    <option value="2">Saran</option>
                  </select>
                  {formik.touched.helper_id && formik.errors.helper_id && (
                    <div className="invalid-feedback">
                      {formik.errors.helper_id}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Comapny Id<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.helper_id && formik.errors.helper_id
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("helper_id")}
                  >
                    <option value=""></option>
                    <option value="1">ECS</option>
                    <option value="2">CloudECS</option>
                  </select>
                  {formik.touched.helper_id && formik.errors.helper_id && (
                    <div className="invalid-feedback">
                      {formik.errors.helper_id}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Booking Type<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.booking_type && formik.errors.booking_type
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("booking_type")}
                  />
                  {formik.touched.booking_type && formik.errors.booking_type && (
                    <div className="invalid-feedback">{formik.errors.booking_type}</div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                  Amount Paid<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.amount_paid && formik.errors.amount_paid
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("amount_paid")}
                  />
                  {formik.touched.amount_paid && formik.errors.amount_paid && (
                    <div className="invalid-feedback">{formik.errors.amount_paid}</div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                  Balance Amount<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.balance_amount && formik.errors.balance_amount
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("balance_amount")}
                  />
                  {formik.touched.balance_amount && formik.errors.balance_amount && (
                    <div className="invalid-feedback">{formik.errors.balance_amount}</div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                  Total Amount<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.total_amount && formik.errors.total_amount
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("total_amount")}
                  />
                  {formik.touched.total_amount && formik.errors.total_amount && (
                    <div className="invalid-feedback">{formik.errors.total_amount}</div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                  Payment Mode<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.payment_mode && formik.errors.payment_mode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("payment_mode")}
                  />
                  {formik.touched.payment_mode && formik.errors.payment_mode && (
                    <div className="invalid-feedback">{formik.errors.payment_mode}</div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;
