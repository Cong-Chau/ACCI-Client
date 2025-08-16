import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import TopBar from "../components/TopBar";
import logo from "../assets/images/logo.jpg";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  console.log("Tải trang login");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.password.value;

    console.log(userName, password);
    // Gọi đên thao tác đăng nhập trong Store/Slice
    dispatch(login({ userName, password }))
      .unwrap()
      .then((res) => {
        if (res.user.role == "ADMIN") {
          console.log(1);
          navigate("/admin/dashboard");
        } else if (res.user.role == "NHAN_VIEN_TIEP_NHAN") {
          console.log(2);
          navigate("/receptionist/dashboard");
        } else if (res.user.role == "NHAN_VIEN_KE_TOAN") {
          console.log(3);
          navigate("/accountant/dashboard");
        } else if (res.user.role == "NHAN_VIEN_NHAP_LIEU") {
          console.log(4);
          navigate("/data-entry/dashboard");
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <TopBar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-1/3 rounded-2xl shadow-lg bg-white border border-gray-200"
      >
        <img
          className="w-64 h-64"
          src={logo}
          alt="ACCI - Trung tâm tổ chức thi chứng chỉ tiếng anh"
        />
        <label className="w-2/3">
          <p>Tên đăng nhập</p>
          <input
            type="text"
            name="userName"
            className="w-full h-12 border border-gray-200 rounded px-3 py-2 mb-4"
          />
        </label>
        <label className="w-2/3">
          <p>Mật khẩu</p>
          <input
            type="password"
            name="password"
            className="w-full h-12 border border-gray-200 rounded px-3 py-2 mb-4"
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-2/3 h-12 bg-blue-300 rounded py-2 hover:bg-blue-400 mt-4 mb-12"
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
