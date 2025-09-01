import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/login": "Đăng nhập",
  "/unauthorized": "Không có quyền",
  "/admin/dashboard": "Trang chủ Admin",
  "/admin/employee-management": "Admin: Quản lý nhân viên",
  "/admin/exam-management": "Admin: Quản lý lịch thi",
  "/admin/certificate-management": "Admin: Quản lý chứng chỉ",
};

export default function TitleManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.title = routeTitles[pathname] || "Ứng dụng ACCI";
  }, [pathname]);

  return null;
}
