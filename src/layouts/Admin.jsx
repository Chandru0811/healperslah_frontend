import PropTypes from "prop-types";
import VendorDashboard from "../pages/vendor/VendorDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSideBar from "../components/admin/AdminSideBar";
import AdminHeader from "../components/admin/AdminHeader";
import AdminFooter from "../components/admin/AdminFooter";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ServiceGroup from "../pages/admin/ServiceGroup/ServiceGroup";
import ServiceGroupAdd from "../pages/admin/ServiceGroup/ServiceGroupAdd";
import ServiceGroupEdit from "../pages/admin/ServiceGroup/ServiceGroupEdit";
import ServiceGroupView from "../pages/admin/ServiceGroup/ServiceGroupView";

function Admin({ handleLogout }) {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-lg-row bg-surface-secondary">
        <AdminSideBar handleLogout={handleLogout} />
        <div className="flex-grow-1 h-screen overflow-y-auto">
          <AdminHeader handleLogout={handleLogout} />
          <main className="pt-2 bg-surface-secondary">
            <div style={{ minHeight: "90vh" }} className="px-2">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="*" element={<AdminDashboard />} />

                {/* Side Menu  */}
                <Route path="/servicegroup" element={<ServiceGroup />} />
                <Route path="/servicegroup/add" element={<ServiceGroupAdd />} />
                <Route path="/servicegroup/edit" element={<ServiceGroupEdit />} />
                <Route path="/servicegroup/view" element={<ServiceGroupView />} />
              </Routes>
            </div>
            <AdminFooter />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

Admin.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Admin;
