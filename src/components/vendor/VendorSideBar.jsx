import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import helperlogo from "../../assets/helperlah_logo.svg";
import { BsBarChartFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import PropTypes from "prop-types";

function VendorSideBar({ handleLogout }) {
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
            className="img-fluid sidebar-logo rounded-circle"
            style={{
              background: "#fff",
              borderRadius: "5px",
              width: "45px",
              height: "45px",
            }}
          />
          <p className="text-white">Helperlah</p>
        </NavLink>
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">
                <BsBarChartFill />
                Dashboard
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
VendorSideBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
export default VendorSideBar;