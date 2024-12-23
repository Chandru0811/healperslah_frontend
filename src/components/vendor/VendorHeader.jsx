import user from "../../assets/user.webp";
import { Link } from "react-router-dom";

function VendorHeader() {
  return (
    <header className="border-bottom py-3 sticky-top-header">
      <div className="container-fluid">
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0 admin-settings">
              {/* <span>
                <i className="bi bi-gear admin-icons"></i> Settings
              </span> */}
            </div>
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
                <span style={{ fontSize: "24px" }}>
                  <Link to={"/settings"}>
                    <img
                      src={user}
                      className="img-fluid header-user"
                      alt="img"
                      width={40}
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Shop"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default VendorHeader;
