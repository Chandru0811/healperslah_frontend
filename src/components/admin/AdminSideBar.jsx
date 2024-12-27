import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import helperlogo from "../../assets/helperlah_logo_side.png";
import { BsBagCheckFill, BsBarChartFill } from "react-icons/bs";
import { BiLogOut, BiSolidPackage } from "react-icons/bi";
import PropTypes from "prop-types";
import { MdAssignmentInd, MdHomeRepairService, MdMiscellaneousServices, MdSubscriptions } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";

function AdminSideBar({ handleLogout }) {
  const navigate = useNavigate();
  const handelLogOutClick = () => {
    handleLogout();
    navigate("/");
  };

  const [leadMenuOpen] = useState(false);

  const [activeSubmenu] = useState(null);

  return (
    <nav
      className="navbar show navbar-vertical navbar-expand-lg p-0 navbar-light border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler mx-2 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink
          className={`navbar-brand nav-logo logo_ats py-lg-2 px-lg-6 m-0 d-flex align-items-center justify-content-center gap-3 ${
            leadMenuOpen || activeSubmenu ? "active" : ""
          }`}
          to="/"
        >
          <img
            src={helperlogo}
            alt="deals"
            className="img-fluid sidebar-logo"
            style={{
              background: "#fff",
              borderRadius: "5px",
            }}
          />
        </NavLink>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/dashboard"
              >
                <BsBarChartFill className="sidebar_icon" />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/servicegroup"
              >
                <MdHomeRepairService className="sidebar_icon" />
                Service Group
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/service"
              >
                <MdMiscellaneousServices className="sidebar_icon" />
                Service
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/subscription"
              >
                <MdSubscriptions className="sidebar_icon" />
                Subscription
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/custompackage"
              >
                <BiSolidPackage className="sidebar_icon" />
                Custom Packages
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/user"
              >
                <FaUserCircle className="sidebar_icon" />
                User
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/order"
              >
                <BsBagCheckFill className="sidebar_icon" />
                Orders
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/assignment"
              >
                <MdAssignmentInd className="sidebar_icon" />
                Service Assignments
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/payment"
              >
                <PiContactlessPaymentFill className="sidebar_icon" />
                Payment
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                className="nav-link"
                style={{ borderRadius: "5px" }}
                to="/paymentType"
              >
                <RiSecurePaymentFill className="sidebar_icon" />
                Payment Type
              </NavLink>
            </li>
          </ul>
          <div className="ps-4 mt-auto w-100 mb-4">
            <div className="navbar-nav">
              <div className="nav-item">
                <button
                  to={"#"}
                  style={{ width: "100%" }}
                  className="nav-link ps-6 logout_button"
                  onClick={handelLogOutClick}
                >
                  <BiLogOut />
                  &nbsp;&nbsp; Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
AdminSideBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
export default AdminSideBar;
