import PropTypes from "prop-types";

function Admin({ handleLogout }) {
  return (
    <div className="container">
      Admin
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

Admin.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
export default Admin;
