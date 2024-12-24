import React, { useState } from "react";
import user from "../../assets/user_profile.jpg";
import { Link } from "react-router-dom";

function VendorHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="border-bottom py-3 sticky-top-header">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0 admin-settings"></div>
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1 position-relative">
                <span
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={toggleDropdown}
                  className="d-flex align-items-center"
                >
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
                  <i
                    className={`bi bi-caret-down-fill ms-2 ${
                      isDropdownOpen ? "rotate-icon" : ""
                    }`}
                    style={{ fontSize: "16px" }}
                  ></i>
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
                        Signed in as<br />
                      </span>
                      <span>Tahlia Mooney</span>
                    </div>
                    <Link to="/settings" className="dropdown-item">
                      Home
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                      Settings
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                      Logout
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

export default VendorHeader;
