import React, { useState } from "react";
import user from "../../assets/user_profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { GoBellFill, GoPencil } from "react-icons/go";
import { TbLogout2 } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

function AdminHeader({ handleLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handelLogOutClick = () => {
    handleLogout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      className="border-bottom py-3 sticky-top"
      style={{ backgroundColor: "#f5f9fc" }}
    >
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0 admin-settings"></div>
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1 position-relative">
                <span style={{ cursor: "pointer" }} onClick={toggleDropdown}>
                  <FaBell className="me-3" style={{color: "#8b99b5"}}/>
                  <img
                    src={user}
                    className="img-fluid header-user"
                    alt="User"
                    width={40}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Shop"
                    style={{ cursor: "pointer" }}
                  />
                  <span
                    style={{
                      marginLeft: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Admin
                  </span>
                  <IoIosArrowDown
                    style={{ fontSize: "16px" }}
                    className={`ms-1 ${isDropdownOpen ? "rotate-icon" : ""}`}
                  />
                </span>

                {isDropdownOpen && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <div
                      className="dropdown-item"
                      style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: "8px",
                      }}
                    >
                      <span style={{ color: "#bfbebb" }}>
                        Signed in as
                        <br />
                      </span>
                      <span>Admin</span>
                    </div>
                    <Link
                      to="/settings"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <IoHomeOutline className="me-2" />
                      <span>Home</span>
                    </Link>

                    <Link
                      to="/settings"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <GoPencil className="me-2" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <IoSettingsOutline className="me-2" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      onClick={handelLogOutClick}
                    >
                      <TbLogout2 className="me-2" />
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

AdminHeader.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default AdminHeader;
