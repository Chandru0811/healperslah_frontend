import React, { useState } from "react";
import logo from "../../../assets/Logo_3_Final_7.png";
import PlayStore from "../../../assets/play_store_badge.png";
import AppStore from "../../../assets/app_store_badge.png";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { IoCloseSharp, IoMail } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Company() {
  const [fields, setFields] = useState([{ experience: "", service: "" }]);

  const handleAddField = () => {
    setFields([...fields, { experience: "", service: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  return (
    <>
      {/* ==== NAV bar ==== */}
      <section className="header">
        <nav className="navbar navbar-expand-lg py-0 px-0">
          <div className="container-fluid px-0 py-md-2 py-lg-0 py-2">
            <a
              href="/"
              className="text-light text-decoration-none ps-2 ps-md-3 d-flex align-items-center"
            >
              <img
                src={logo}
                alt="Logo"
                className="me-2 my-1 my-md-2 img-fluid"
                style={{ height: "60px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto me-3 text-light ps-2">
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Join as partner
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Cantact Us
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    Login/Register
                  </a>
                </li>
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="#">
                    <i className="fas fa-bell"></i>
                  </a>
                </li>
              </ul>
              <div className="py-5 num text-center">
                <a href="tel:+6588941306" className="text-decoration-none">
                  <button
                    className="btn register_button mx-3 mx-md-0 mx-lg-3 text-light"
                    type="button"
                  >
                    <i className="fas fa-phone me-1"></i> +65 88941306
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <section className="container-fluid px-0">
        {/* <!--==== Hero Section ====-->  */}
        <section
          className="partner_top"
          style={{ paddingTop: "80px", paddingBottom: "30px" }}
        >
          <div className="cta-container pb-5">
            <h1 className="h1-tag pt-5 pb-4">
              Earn More, Join as Helper Partner Today !
            </h1>
            <h2 className="h2-tag">
              Need more reasons to be happy? Join us and we promise you will
              have a lot
            </h2>
          </div>

          <div className="container text-end mt-5 pe-1 pe-md-0 pt-5">
            <img src={PlayStore} alt="Play store" className="link_img me-4" />
            <img src={AppStore} alt="App store" className="link_img" />
          </div>
        </section>

        {/* <!--==== Application Section Start ====-->  */}
        <section className="form-container">
          <div className="container">
            <h3 className="text-center my-5 py-5">
              Please enter the necessary details to process your application
            </h3>
            <div className="container custum-width">
              <div className="row d-flex justify-content-between">
                <div className="col-md-5 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Company Name"
                    aria-label="Company Name"
                  />
                </div>
                <div className="col-md-5 col-12">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Owner Name"
                    aria-label="Owner Name"
                  />
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="col-md-12 col-12 mb-3">
                  <textarea
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Address"
                    aria-label="Address"
                    rows="8"
                  ></textarea>
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <select
                    className="form-select my-3 form-select-lg w-100 custom-select"
                    style={{ fontSize: "90%" }}
                  >
                    <option value="">Select a Nation</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                </div>

                <div className="col-md-5 col-12 mb-3">
                  <select
                    type="text"
                    className="form-select my-3 form-select-lg w-100 custom-select"
                    aria-label="Nationality of the owner"
                    style={{ fontSize: "90%" }}
                  >
                    <option value="">Select a Nationality</option>

                    <option value="Singaporen">Singaporen</option>
                    <option value="Singaporen PR">Singaporen PR</option>
                  </select>
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Company Registration Number"
                    aria-label="Company Registration Number"
                    rows="8"
                  ></input>
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <input
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="No of Employees  pledging"
                    aria-label="No of Employees  pledging"
                  />
                </div>
                <div className="col-md-5 col-12 mb-3"></div>
                <div className="col-md-12 col-12 mb-3">
                  <textarea
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Services offering"
                    aria-label="Services offering"
                    rows="8"
                  ></textarea>
                </div>
                <div className="col-md-12 col-12 mb-3">
                  <textarea
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Availability"
                    aria-label="Availability"
                    rows="8"
                  ></textarea>
                </div>
                <div className="col-md-12 col-12 mb-3">
                  <textarea
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Working Hours"
                    aria-label="Working Hours"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              {/* <!--==== Service Offered Start ====--> */}
              <div className="row">
                <div className="col-12 mb-2 mt-5">
                  <h4 className="text-start">Services Offered</h4>
                </div>
                {fields.map((field, index) => (
                  <div className="row mb-3" key={index}>
                    <div className="col-5">
                      <input
                        type="text"
                        className="form-control my-3 form-control-lg w-100"
                        placeholder="Experience"
                        aria-label="Experience"
                        name="experience"
                        value={field.experience}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    <div className="col-1 d-flex justify-content-start align-items-center">
                      <p className="fs-4"></p>
                    </div>
                    <div className="col-5">
                      <input
                        type="text"
                        className="form-control my-3 form-control-lg w-100"
                        placeholder="Service"
                        aria-label="Service"
                        name="service"
                        value={field.service}
                        onChange={(e) => handleChange(index, e)}
                      />
                    </div>
                    {index === fields.length - 1 && (
                      <div className="col-1 d-flex flex-column">
                        <p
                          className="my-2"
                          style={{
                            cursor: fields.length > 1 ? "pointer" : "",
                            opacity: fields.length > 1 ? 1 : 0.5,
                          }}
                          onClick={() => {
                            if (fields.length > 1) handleRemoveField(index);
                          }}
                        >
                          <IoCloseSharp style={{ fontSize: "20px" }} />
                        </p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={handleAddField}
                        >
                          <FiPlus style={{ fontSize: "20px" }} />
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="col-md-5 col-12">
                  <select
                    type="text"
                    className="form-select my-3 form-select-lg w-100 custom-select"
                    aria-label="Details of preferred payment mode"
                    style={{ fontSize: "90%" }}
                  >
                    <option value="">Select a Payment Mode</option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Bank Tranfer">Bank Tranfer</option>
                  </select>
                </div>
                <div className="col-md-5 col-12"></div>
                <div className="col-12">
                  <textarea
                    type="text"
                    className="form-control my-3 form-control-lg w-100"
                    placeholder="Other Details"
                    aria-label="Other Details"
                    rows="8"
                  ></textarea>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="fw-medium submit_btn"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* <!--==== Service Offered End ====--> */}
            </div>
          </div>
        </section>

        {/* <!-- FAQ and CTA Start --> */}
        <div className="container">
          <div className="row mt-0 mt-md-5">
            <div className="col-12 my-5 d-flex justify-content-center">
              <h2 className="text-ff4397 py-5">Frequently Asked Questions</h2>
            </div>
            <div className="col-12 accorardian">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3 mb-md-5">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What types of cleaning services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We offer a variety of cleaning services, including general
                      home cleaning, deep cleaning, kitchen cleaning, bathroom
                      cleaning, and move-in/move-out cleaning.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion Item 2 --> */}
                <div className="accordion-item mb-3 mb-md-5">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do I need to provide cleaning supplies?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      No, our team brings all the necessary cleaning supplies
                      and equipment. If you prefer us to use your specific
                      products, just let us know during booking.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion Item 3 --> */}
                <div className="accordion-item mb-3 mb-md-5">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How long does a cleaning session take?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The duration of the cleaning session depends on the size
                      of your home and the type of cleaning required. A typical
                      session takes between 2 to 4 hours.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion Item 4 --> */}
                <div className="accordion-item mb-3 mb-md-5">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Are your cleaners background-checked?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, all our cleaners are thoroughly vetted and
                      background-checked to ensure your safety and peace of
                      mind.
                    </div>
                  </div>
                </div>
                {/* <!-- Accordion Item 5 --> */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I reschedule or cancel a booking?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, you can reschedule or cancel your booking. Please
                      note that we require at least 24 hours' notice to avoid
                      cancellation fees.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3 my-md-5">
          <div className="card bottom_card py-4 px-2">
            <div className="row">
              <div className="col-md-1 col-12 pe-0"></div>
              <div className="col-md-7 col-12 py-2 py-md-4 ps-4 ps-md-0 pe-3 pe-md-0">
                <p className="text-light fw-small bottom_card_ptag">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="col-md-4 py-4 py-md-0 pe-0 pe-md-4 pe-lg-0 col-lg-3 col-12 d-flex justify-content-md-end justify-content-center align-items-center">
                <img
                  src={PlayStore}
                  alt="Play store"
                  className="link_img me-3"
                />
                <img src={AppStore} alt="App store" className="link_img" />
              </div>
              <div className="col-md-1 col-12"></div>
            </div>
          </div>
        </div>
        {/* <!-- FAQ and CTA End --> */}

        {/* <!--==== Footer Section ====--> */}
        <section class="container-fluid footer">
          <div class="container">
            <div class="row m-0 m-0">
              <div class="col-md-4 col-12 text-md-start text-center mt-4">
                <div class="ps-2">
                  <p class="footer-title">Contact</p>
                </div>
                <div class="footer-links">
                  <div class="links">
                    <a
                      href="https://www.google.com/maps/place/The+Alexcier/@1.2916847,103.8111868,17z/data=!3m2!4b1!5s0x31da1a2cf1b2be13:0x7b0f9d88a36fdfbb!4m6!3m5!1s0x31da1bb95520771b:0xf2b9dfa378aa9a6e!8m2!3d1.2916793!4d103.8137617!16s%2Fg%2F11gyxjfkjk?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                      class="text-decoration-none d-flex justify-content-md-start justify-content-center align-items-center"
                      style={{ fontSize: "16px", color: "#ffffff" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <FaLocationDot />
                        <span>
                          The Alexcier, <br />
                          237 Alexandra Road, #04-10,
                          <br />
                          Singapore-159929.
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-12 text-md-start text-center mt-4">
                <div class="ps-2">
                  <p class="footer-title">Email</p>
                </div>
                <div class="footer-links">
                  <div class="links">
                    <a
                      href="mailto:info@trucklah.com"
                      class="text-decoration-none"
                      style={{ fontSize: "16px", color: "#ffffff" }}
                    >
                      <IoMail />
                      info@helperlah.com
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-12 text-md-start text-center mt-4">
                <div class="ps-2">
                  <p class="footer-title">Contact</p>
                </div>
                <div class="footer-links">
                  <div class="links">
                    <a
                      href="tel:+6588941306"
                      class="text-decoration-none"
                      style={{ fontSize: "16px", color: "#ffffff" }}
                    >
                      <FaPhoneAlt />
                      +65 8894 1306
                    </a>
                  </div>
                </div>
                <div className="list-unstyled d-flex flex-wrap gap-lg-1 gap-md-0 gap-0 justify-content-center align-items-center">
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our facebook page"
                    >
                      <FaFacebook
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our twitter page"
                    >
                      <FaTwitter
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our instagram page"
                    >
                      <FaInstagram
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our linkedin page"
                    >
                      <FaLinkedin
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our youtube page"
                    >
                      <FaYoutube
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none line-divider"
                      aria-label="Visit our tiktok page"
                    >
                      <FaTiktok
                        size={50}
                        className="p-2"
                        style={{ color: "#ffff" }}
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr class="text-light" />
          <div class="copyrights">
            <p class="text-center text-light m-0 pb-3">
              2024 © Copyright Helperlah Pte Ltd. All Rights Reserved.
            </p>
          </div>
        </section>
        {/* <!--==== Footer End ====--> */}
      </section>
    </>
  );
}

export default Company;
