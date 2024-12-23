import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles/common.css";
import "./styles/custom.css";
import Admin from "./layouts/Admin";
import Vendor from "./layouts/Vendor";
import Auth from "./layouts/Auth";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isVendorAuthenticated, setIsVendorAuthenticated] = useState(false);

  const loginAsAdmin = () => {
    localStorage.setItem("isAdminAuthenticated", true);
    setIsAdminAuthenticated(true);
  };

  const loginAsVendor = () => {
    localStorage.setItem("isVendorAuthenticated", true);
    setIsVendorAuthenticated(true);
  };

  const logout = async () => {
    try {
      toast.success("Logged out successfully");
      setIsAdminAuthenticated(false);
      setIsVendorAuthenticated(false);
      localStorage.removeItem("isAdminAuthenticated");
      localStorage.removeItem("isVendorAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("active");
    } catch (e) {
      toast.error("Logout unsuccessful", e?.response?.data?.message);
    }
  };

  useEffect(() => {
    const isAdminAuthFromStorage = localStorage.getItem("isAdminAuthenticated");
    const isVendorAuthFromStorage = localStorage.getItem(
      "isVendorAuthenticated"
    );

    if (isAdminAuthFromStorage === "true") {
      setIsAdminAuthenticated(true);
    } else if (isVendorAuthFromStorage === "true") {
      setIsVendorAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#fff",
          },
        }}
      />
      {isAdminAuthenticated ? (
        <Admin handleLogout={logout} />
      ) : isVendorAuthenticated ? (
        <Vendor handleLogout={logout} />
      ) : (
        <Auth
          handleLogout={logout}
          loginAsAdmin={loginAsAdmin}
          loginAsVendor={loginAsVendor}
        />
      )}
    </div>
  );
}

export default App;
