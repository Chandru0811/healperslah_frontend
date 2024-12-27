import { useFormik } from "formik";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";

function AssignModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    formik.resetForm();
  };

  const validationSchema = yup.object().shape({
    helper_id: yup.string().required("*Helper Id required"),
  });

  const formik = useFormik({
    initialValues: {
      helper_id: "",
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
        Assign
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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

export default AssignModal;
