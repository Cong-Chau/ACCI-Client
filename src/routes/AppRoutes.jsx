import { Routes, Route } from "react-router-dom";
import RoleRoute from "./RoleRoute";
import LoginPage from "../pages/LoginPage";
import Unauthorized from "../pages/Unauthorized";

import DashboardAdmin from "../pages/admin/DashboardAdmin";
import DashboardReceptionist from "../pages/receptionist/DashboardReceptionist";
import DashboardAccountant from "../pages/accountant/DashboardAccountant";
import DashboardDataEntry from "../pages/data_entry/DashboardDataEntry";

import EmployeeManagement from "../pages/admin/EmployeeManagement";
import ExamManagement from "../pages/admin/ExamManagement";
import CertificateManagement from "../pages/admin/CertificateManagement";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={
          <RoleRoute allowedRoles={["ADMIN"]}>
            <DashboardAdmin />
          </RoleRoute>
        }
      />
      <Route
        path="/admin/employee-management"
        element={
          <RoleRoute allowedRoles={["ADMIN"]}>
            <EmployeeManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/admin/exam-management"
        element={
          <RoleRoute allowedRoles={["ADMIN"]}>
            <ExamManagement />
          </RoleRoute>
        }
      />
      <Route
        path="/admin/certificate-management"
        element={
          <RoleRoute allowedRoles={["ADMIN"]}>
            <CertificateManagement />
          </RoleRoute>
        }
      />

      {/* Receptionist Routes */}
      <Route
        path="/receptionist/dashboard"
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_TIEP_NHAN"]}>
            <DashboardReceptionist />
          </RoleRoute>
        }
      />

      {/* Accountant Routes */}
      <Route
        path="/accountant/dashboard"
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_KE_TOAN"]}>
            <DashboardAccountant />
          </RoleRoute>
        }
      />

      {/* Data Entry Routes */}
      <Route
        path="/data-entry/dashboard"
        element={
          <RoleRoute allowedRoles={["NHAN_VIEN_NHAP_LIEU"]}>
            <DashboardDataEntry />
          </RoleRoute>
        }
      />
    </Routes>
  );
}
