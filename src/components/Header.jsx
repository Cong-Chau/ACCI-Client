import { useSelector, useDispatch } from "react-redux";
import logo2 from "../assets/images/logo2.png";
import banner from "../assets/images/banner.png";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => state.auth.user.role);
  const userFullname = useSelector((state) => state.auth.user.fullName);
  let roleText = "";
  let dashboardURL = "";
  if (role == "ADMIN") {
    roleText = "Quản trị viên: ";
    dashboardURL = "/admin/dashboard";
  } else if (role == "NHAN_VIEN_TIEP_NHAN") {
    roleText = "Nhân viên viên tiếp nhận: ";
    dashboardURL = "/admin/employee-management";
  } else if (role == "NHAN_VIEN_KE_TOAN") {
    roleText = "Nhân viên kế toán: ";
    dashboardURL = "/admin/invoice-management";
  } else if (role == "NHAN_VIEN_NHAP_LIEU") {
    roleText = "Nhân viên nhập liệu: ";
    dashboardURL = "/admin/data-entry";
  }

  const handleLogout = () => {
    // Gọi đến thao tác logout trong store/slice
    dispatch(logout());
    navigate("/login");
  };

  // Đưa về trang dashboard
  const goToDashboard = () => {
    navigate(dashboardURL);
  };

  return (
    <header className="mt-8 w-full flex flex-col">
      <div className="h-12 flex flex-row justify-between items-center px-4">
        <img
          onClick={goToDashboard}
          src={logo2}
          alt=""
          className="h-8 w-auto rounded-lg hover:cursor-pointer"
        />
        <div className="flex flex-row">
          <p className="mr-8">
            {roleText} {userFullname}
          </p>
          <button
            onClick={handleLogout}
            className="font-bold mr-4 hover:cursor-pointer  hover:scale-102 hover:text-red-600"
          >
            Đăng xuất
          </button>
        </div>
      </div>
      <img src={banner} alt="" />
    </header>
  );
}

export default Header;
