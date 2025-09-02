import { Link } from "react-router-dom";
function AdminNav() {
  // lấy đường dẫn
  const getLinkClass = (path) => {
    return window.location.pathname === path
      ? "flex-1 text-center font-bold underline underline-offset-16"
      : "flex-1 text-center";
  };

  return (
    <div className="p-4 w-full h-12 bg-gray-200 flex flex-row justify-between items-center">
      <Link
        to={"/admin/employee-management"}
        className={`${getLinkClass("/admin/employee-management")} `}
      >
        Quản lý nhân viên
      </Link>
      <Link
        to={"/admin/exam-management"}
        className={`${getLinkClass(
          "/admin/exam-management"
        )} border-l border-r px-4`}
      >
        Quản lý lịch thi
      </Link>
      <Link
        to={"/admin/certificate-management"}
        className={getLinkClass("/admin/certificate-management")}
      >
        Quản lý chứng chỉ
      </Link>
    </div>
  );
}

export default AdminNav;
