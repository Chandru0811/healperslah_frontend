import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import headerlogo from "../../assets/Helperlah Logo.png";
import "../../styles/custom.css";
import api from "../../config/URL";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FiAlertTriangle } from "react-icons/fi";

function Login({ loginAsVendor, loginAsAdmin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loadIndicator, setLoadIndicator] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email_or_mobile: Yup.string().required("Email or Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .max(8, "Password must not exceed 8 characters")
      .matches(/^\S*$/, "Password must not contain spaces"),
  });

  const formik = useFormik({
    initialValues: {
      email_or_mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoadIndicator(true);
        let payload;
        if (
          values.email_or_mobile === "admin@gmail.com" ||
          values.email_or_mobile === "8976543210"
        ) {
          payload = { ...values, role: "1" };
        } else {
          payload = { ...values, role: "2" };
        }
        const response = await api.post(`login`, payload);
        if (response.status === 200) {
          toast.success(response.data.message);

          localStorage.setItem("helperlah_token", response.data.data.token);
          localStorage.setItem(
            "helperlah_name",
            response.data.data.userDetails.name
          );
          localStorage.setItem(
            "helperlah_id",
            response.data.data.userDetails.id
          );
          localStorage.setItem(
            "helperlah_email",
            response.data.data.userDetails.email
          );
          localStorage.setItem(
            "helperlah_role",
            response.data.data.userDetails.role
          );
          localStorage.setItem(
            "helperlah_mobile",
            response.data.data.userDetails.mobile
          );

          if (response.data.data.userDetails.role === "1") {
            loginAsAdmin();
          } else if (response.data.data.userDetails.role === "2") {
            navigate("/");
            loginAsVendor();
          } else {
            toast(
              "Oops! You don't have access to this page, but feel free to check out our amazing website! 😊",
              {
                icon: "😊",
              }
            );
            setTimeout(() => {
              window.location.href = "https://ecsaio.com";
            }, 5000);
          }
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage) {
            toast(errorMessage, {
              icon: <FiAlertTriangle className="text-warning" />,
            });
          }
        } else {
          console.error("API Error", error);
          toast.error("An unexpected error occurred.");
        }
      } finally {
        setLoadIndicator(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid m-0" style={{ backgroundColor: "#fcfcfc" }}>
      <div className="d-flex justify-content-center align-items-center m-0 pt-5">
        <img src={headerlogo} className="img-fluid" alt="img" />
      </div>
      <div className=" d-flex  justify-content-center align-items-center mt-5">
        <div
          className="card shadow-lg p-3 mb-5 mt-0 rounded"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="d-flex justify-content-around ">
            <h3
              className={`cursor-pointer py-2`}
              style={{
                borderBottom: "2px solid #e10064",
                paddingBottom: "5px",
                width: "100%",
                textAlign: "center",
                color: "#e10064",
              }}
            >
              Login
            </h3>
          </div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3 pt-4">
              <Form.Label>Email or Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or mobile number"
                {...formik.getFieldProps("email_or_mobile")}
                isInvalid={
                  formik.touched.email_or_mobile &&
                  formik.errors.email_or_mobile
                }
              />
              {formik.touched.email_or_mobile &&
              formik.errors.email_or_mobile ? (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email_or_mobile}
                </Form.Control.Feedback>
              ) : null}
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center py-2">
              <Form.Label>Password</Form.Label>
              <Link
                to="/forgot"
                className="ml-auto"
                style={{
                  fontSize: "0.9em",
                  textDecoration: "none",
                  color: "#e10064",
                }}
              >
                Forgot Password?
              </Link>
            </div>
            <Form.Group controlId="formPassword" className="mb-3">
              <div style={{ position: "relative" }}>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  {...formik.getFieldProps("password")}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
                {formik.values.password && (
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
                {formik.touched.password && formik.errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                ) : null}
              </div>
            </Form.Group>

            <Button
              type="submit"
              className="w-100 mt-4 common-button"
              disabled={loadIndicator}
            >
              {loadIndicator && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  aria-hidden="true"
                ></span>
              )}
              Login
            </Button>

            <div className="text-center mt-4">
              <p className="mb-3">or</p>
              <Link to="/register">
                <Button
                  variant="light"
                  className="border shadow-none"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  Register as a Vendor
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  loginAsAdmin: PropTypes.func.isRequired,
  loginAsVendor: PropTypes.func.isRequired,
};

export default Login;
