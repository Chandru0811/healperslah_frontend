import PropTypes from "prop-types";

function Auth({ handleLogout, loginAsAdmin, loginAsVendor }) {
  return (
    <div className="container">
      Auth
      <button className="btn btn-success" onClick={loginAsAdmin}>Login as Admin</button>
      <button onClick={loginAsVendor}>Login as Vendor</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

Auth.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  loginAsAdmin: PropTypes.func.isRequired,
  loginAsVendor: PropTypes.func.isRequired,
};

export default Auth;
