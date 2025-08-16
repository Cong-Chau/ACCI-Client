import axiosInstance from "./axiosInstance";

// login - logout
export const authAPI = {
  login: (userName, password) =>
    axiosInstance.post("/auth/login", { userName, password }), // body là object
  logout: () => Promise.resolve({ message: "Đăng xuất thành công" }),
};
