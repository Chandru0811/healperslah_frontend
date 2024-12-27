import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Cropper from "react-easy-crop";

function ServiceEdit() {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [originalFileName, setOriginalFileName] = useState("");
  const [originalFileType, setOriginalFileType] = useState("");
  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const SUPPORTED_FORMATS = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

  const validationSchema = Yup.object().shape({
    service_group_id: Yup.string().required("*Service Group Id is required"),
    name: Yup.string().required("*Name is required"),
    order: Yup.string().required("*Order is required"),
    basicPrice: Yup.number()
      .typeError("*Basic Price must be a number")
      .required("*Basic Price is required")
      .positive("*Please enter a valid number")
      .integer("*Basic Price must be a whole number"),
    image: Yup.mixed()
      .required("*Image is required")
      .test("fileFormat", "Unsupported format", (value) =>
        value ? SUPPORTED_FORMATS.includes(value.type) : true
      )
      .test("fileSize", "File size is too large. Max 2MB.", (value) =>
        value ? value.size <= MAX_FILE_SIZE : true
      ),
    description: Yup.string()
      .required("*Description is a required field")
      .max(200, "*The maximum length is 200 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      order: "",
      basicPrice: "",
      image: null,
      description: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        formik.setFieldError("image", "File size is too large. Max 2MB.");
        return;
      }
      if (!SUPPORTED_FORMATS.includes(file.type)) {
        formik.setFieldError("image", "Unsupported format.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setOriginalFileName(file.name);
        setOriginalFileType(file.type);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const getCroppedImg = async (imageSrc, croppedAreaPixels) => {
    const image = new Image();
    image.src = imageSrc;
    await new Promise((resolve) => (image.onload = resolve));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const targetWidth = 300;
    const targetHeight = 300;
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      targetWidth,
      targetHeight
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          blob.name = "croppedImage.jpeg";
          resolve(blob);
        } else {
          reject(new Error("Canvas is empty"));
        }
      }, "image/jpeg");
    });
  };

  const handleCropSave = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
      const file = new File([croppedImageBlob], originalFileName, {
        type: originalFileType,
      });
      formik.setFieldValue("image", file);
      setShowCropper(false);
    } catch (error) {
      console.error("Error cropping the image:", error);
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setImageSrc(null);
    formik.setFieldValue("image", "");
    document.querySelector("input[type='file']").value = "";
  };

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
          <Link to="/service" className="custom-breadcrumb">
            &nbsp;Service
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Service Edit
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
              <span class="me-2 text-muted">Edit Service</span>
            </div>
            <div className="my-2 pe-3 d-flex align-items-center">
              <Link to="/service">
                <button type="button " className="btn btn-sm btn-border">
                  Back
                </button>
              </Link>
              &nbsp;&nbsp;
              <button
                type="submit"
                className="btn btn-button btn-sm"
              >
                <span className="fw-medium">Update</span>
              </button>
            </div>
          </div>
          <div className="container-fluid px-4">
            <div className="row py-4">
            <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Service Group Id<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.service_group_id &&
                    formik.errors.service_group_id
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("service_group_id")}
                >
                  <option></option>
                  <option value="1">Home Cleaning</option>
                  <option value="2">Plumber</option>
                </select>
                {formik.touched.service_group_id &&
                  formik.errors.service_group_id && (
                    <div className="invalid-feedback">
                      {formik.errors.service_group_id}
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
                  Order<span className="text-danger">*</span>
                </label>
                <select
                  aria-label="Default select example"
                  className={`form-select ${
                    formik.touched.order &&
                    formik.errors.order
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("order")}
                >
                  <option value=""></option>
                  {Array.from({ length: 50 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                {formik.touched.order &&
                  formik.errors.order && (
                    <div className="invalid-feedback">
                      {formik.errors.order}
                    </div>
                  )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Basic Price<span className="text-danger">*</span>
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
                  <div className="invalid-feedback">{formik.errors.basicPrice}</div>
                )}
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label">
                  Image
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  accept=".png,.jpeg,.jpg,.svg,.webp"
                  className={`form-control ${
                    formik.touched.image && formik.errors.image
                      ? "is-invalid"
                      : ""
                  }`}
                  name="image"
                  onChange={handleFileChange}
                  onBlur={formik.handleBlur}
                />
                <p style={{ fontSize: "13px" }}>
                  Note: Maximum file size is 2MB. Allowed: .png, .jpg, .jpeg,
                  .svg, .webp.
                </p>
                {formik.touched.image && formik.errors.image && (
                  <div className="invalid-feedback">{formik.errors.image}</div>
                )}

                {showCropper && imageSrc && (
                  <div className="crop-container">
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={300 / 300}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                      cropShape="rect"
                      showGrid={false}
                    />
                  </div>
                )}

                {showCropper && (
                  <div className="d-flex justify-content-start mt-3 gap-2">
                    <button
                      type="button"
                      className="btn btn-primary mt-3"
                      onClick={handleCropSave}
                    >
                      Save Cropped Image
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-3"
                      onClick={handleCropCancel}
                    >
                      Cancel
                    </button>
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

export default ServiceEdit;
