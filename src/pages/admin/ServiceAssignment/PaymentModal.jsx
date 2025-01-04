import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as yup from "yup";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import api from "../../../config/URL";
import { FiAlertTriangle } from "react-icons/fi";
import fetchAllOrderWithIds from "../../List/OrderList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function PaymentModal() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [loadIndicator, setLoadIndicator] = useState(false);
  const [orders, setOrders] = useState([]);
  console.log("Orders", orders);

  const handleOpenDialog = () => {
    setDeleteDialogOpen(true);
    document.body.style.overflow = "hidden";

    formik.setFieldValue("total_amount", "5000");
  };

  const handleCloseDialog = () => {
    setDeleteDialogOpen(false);
    document.body.style.overflow = "";
  };

  const validationSchema = yup.object().shape({
    order_id: yup.string().required("*Order Id required"),
    helper_id: yup.string().required("*Helper Id required"),
    company_id: yup.string().required("*Company Id required"),
    booking_type: yup.string().required("*Booking Type required"),
    amount_paid: yup.string().required("*Amount Paid required"),
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
      try {
        setLoadIndicator(true);
        const response = await api.post("admin/payment", values);
        if (response.status === 200) {
          toast.success(response?.data?.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors;
          if (errors) {
            Object.keys(errors).forEach((key) => {
              errors[key].forEach((errorMsg) => {
                toast(errorMsg, {
                  icon: <FiAlertTriangle className="text-warning" />,
                });
              });
            });
          }
        } else {
          toast.error("Error while assigning");
        }
      } finally {
        handleCloseDialog();
        setLoadIndicator(false);
      }
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  const fetchOrders = async () => {
    try {
      const order = await fetchAllOrderWithIds();
      setOrders(order);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (formik.values.amount_paid && formik.values.total_amount) {
      const balanceAmount = parseFloat(formik.values.total_amount) - parseFloat(formik.values.amount_paid);
      formik.setFieldValue("balance_amount", balanceAmount.toFixed(2));
    }
  }, [formik.values.amount_paid, formik.values.total_amount]);

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-border"
        onClick={handleOpenDialog}
      >
        Payment
      </button>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiDialog-paper": {
            margin: "0 auto",
            top: "10%",
            position: "absolute",
            width: "80%",
            maxHeight: "90vh",
          },
        }}
      >
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
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
                    {orders &&
                      orders.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.order_number}
                        </option>
                      ))}
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
                    Company Id<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.company_id && formik.errors.company_id
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("company_id")}
                  >
                    <option value=""></option>
                    <option value="1">ECS</option>
                    <option value="2">CloudECS</option>
                  </select>
                  {formik.touched.company_id && formik.errors.company_id && (
                    <div className="invalid-feedback">
                      {formik.errors.company_id}
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
                  {formik.touched.booking_type &&
                    formik.errors.booking_type && (
                      <div className="invalid-feedback">
                        {formik.errors.booking_type}
                      </div>
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
                    <div className="invalid-feedback">
                      {formik.errors.amount_paid}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Balance Amount<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.balance_amount &&
                      formik.errors.balance_amount
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("balance_amount")}
                    readOnly
                  />
                  {formik.touched.balance_amount &&
                    formik.errors.balance_amount && (
                      <div className="invalid-feedback">
                        {formik.errors.balance_amount}
                      </div>
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
                    readOnly
                  />
                  {formik.touched.total_amount &&
                    formik.errors.total_amount && (
                      <div className="invalid-feedback">
                        {formik.errors.total_amount}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Payment Mode<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.payment_mode && formik.errors.payment_mode
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("payment_mode")}
                  >
                    <option value=""></option>
                    <option value="1">Online</option>
                    <option value="2">Cash</option>
                  </select>
                  {formik.touched.payment_mode && formik.errors.payment_mode && (
                    <div className="invalid-feedback">
                      {formik.errors.payment_mode}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Payment Status<span className="text-danger">*</span>
                  </label>
                  <select
                    aria-label="Default select example"
                    className={`form-select ${
                      formik.touched.payment_status && formik.errors.payment_status
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("payment_status")}
                  >
                    <option value=""></option>
                    <option value="1">Paid</option>
                    <option value="2">Not Paid</option>
                    <option value="3">Partially Paid</option>
                  </select>
                  {formik.touched.payment_status && formik.errors.payment_status && (
                    <div className="invalid-feedback">
                      {formik.errors.payment_status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            className="btn btn-secondary btn-sm"
          >
            Cancel
          </Button>
          <Button
            disabled={loadIndicator}
            className="btn btn-button"
            type="submit"
            onClick={formik.handleSubmit}
          >
            {loadIndicator && (
              <span
                className="spinner-border spinner-border-sm me-2"
                aria-hidden="true"
              ></span>
            )}
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PaymentModal;
