import { Routes, Route } from "react-router-dom";
import RoleRoute from "./RoleRoute";
import LoginPage from "../pages/LoginPage";
import Unauthorized from "../pages/Unauthorized";

import DashboardAdmin from "../pages/admin/DashboardAdmin";
import DashboardReceptionist from "../pages/receptionist/DashboardReceptionist";
import DashboardAccountant from "../pages/accountant/DashboardAccountant";
import DashboarDataEntry from "../pages/data_entry/DashboarDataEntry";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route
        path="/admin/dashboard"
        element={
          <RoleRoute allowedRoles={["ADMIN"]}>
            <DashboardAdmin />
          </RoleRoute>
        }
      />
      <Route
        path="/receptionist/dashboard"
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_TIEP_NHAN"]}>
            <DashboardReceptionist />
          </RoleRoute>
        }
      />
      <Route
        path="/accountant/dashboard"
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_KE_TOAN"]}>
            <DashboardAccountant />
          </RoleRoute>
        }
      />
      <Route
        path="/  "
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_NHAP_LIEU"]}>
            <DashboarDataEntry />
          </RoleRoute>
        }
      />
    </Routes>
  );
}
