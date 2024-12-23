import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "../components/auth/Register/Company";
import Individual from "../components/auth/Register/Individual";
import Login from "../components/auth/Login";
import ForgotPage from "../components/auth/ForgotPage";
import Register from "../components/auth/Register/Register";
import ResetPage from "../components/auth/ResetPage";

function Auth({ handleLogout, loginAsAdmin, loginAsVendor }) {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login
                loginAsVendor={loginAsVendor}
                />
              }
            />
            <Route
              path="*"
              element={
                <Login
                  loginAsVendor={loginAsVendor}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPage />} />
            <Route path="/resetpassword" element={<ResetPage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/individual" element={<Individual />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Auth;
