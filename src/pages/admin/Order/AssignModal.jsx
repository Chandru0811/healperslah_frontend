import { useFormik } from "formik";
import React, { useState } from "react";
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
import PropTypes from "prop-types";
import { FiAlertTriangle } from "react-icons/fi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function AssignModal({ orderId }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [loadIndicator, setLoadIndicator] = useState(false);

  const handleOpenDialog = () => {
    setDeleteDialogOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    setDeleteDialogOpen(false);
    document.body.style.overflow = "";
    formik.resetForm();
  };

  const validationSchema = yup.object().shape({
    // helper_id: yup.string().required("*Helper Id required"),
  });

  const formik = useFormik({
    initialValues: {
      order_id: "",
      company_id: "1",
      helper_id: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoadIndicator(true);
        const payload = {
          ...values,
          order_id: orderId,
        };
        const response = await api.post("admin/serviceAssignment", payload);
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

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-border"
        onClick={handleOpenDialog}
      >
        Assign
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
            width: "50%",
            maxHeight: "90vh",
          },
        }}
      >
        <DialogTitle>Assign</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
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
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AssignModal.propTypes = {
  orderId: PropTypes.func.isRequired,
};

export default AssignModal;
