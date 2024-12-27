import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ServiceAssignmentEdit() {
  const validationSchema = Yup.object().shape({
    order_id: Yup.string().required("*Order Id is required"),
    company_id: Yup.string().required("*Company Id is required"),
    helper_id: Yup.string().required("*Helper Id is required"),
    assigned_at: Yup.string().required("*Assigned At is required"),
  });

  const formik = useFormik({
    initialValues: {
      order_id: "",
      company_id: "",
      helper_id: "",
      assigned_at: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div className="container-fluid">
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
          <Link to="/assignment" className="custom-breadcrumb">
            &nbsp;Service Assignment
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Service Assignment Edit
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
              <span class="me-2 text-muted">Edit Service Assignment</span>
            </div>
            <div className="my-2 pe-3 d-flex align-items-center">
              <Link to="/assignment">
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
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Order Id<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.order_id && formik.errors.order_id
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("order_id")}
                />
                {formik.touched.order_id && formik.errors.order_id && (
                  <div className="invalid-feedback">
                    {formik.errors.order_id}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Company Id<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.company_id && formik.errors.company_id
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("company_id")}
                />
                {formik.touched.company_id && formik.errors.company_id && (
                  <div className="invalid-feedback">
                    {formik.errors.company_id}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Helper Id<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.helper_id && formik.errors.helper_id
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("helper_id")}
                />
                {formik.touched.helper_id && formik.errors.helper_id && (
                  <div className="invalid-feedback">
                    {formik.errors.helper_id}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Assigned At<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className={`form-control ${
                    formik.touched.assigned_at && formik.errors.assigned_at
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("assigned_at")}
                />
                {formik.touched.assigned_at && formik.errors.assigned_at && (
                  <div className="invalid-feedback">
                    {formik.errors.assigned_at}
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

export default ServiceAssignmentEdit;
