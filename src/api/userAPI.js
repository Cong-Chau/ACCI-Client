import axiosInstance from "./axiosInstance";

// lấy số lượng user
export const getCountUser = async () => {
  try {
    const data = await axiosInstance.get("/user/growth");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy số lượng user: ", error);
    throw error;
  }
};

// lấy danh sách user
export const getAllUsers = async () => {
  try {
    const data = await axiosInstance.get("/user/all");
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách user:", error);
    throw error;
  }
};

// lấy danh sách theo tìm kiếm
export const searchUsers = async (query) => {
  try {
    const data = await axiosInstance.get(`/user/search?keyword=${query}`);
    return data;
  } catch (error) {
    console.error("Lỗi khi tìm kiếm user:", error);
    throw error;
  }
};
