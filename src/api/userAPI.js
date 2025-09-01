import axiosInstance from "./axiosInstance";

export const getCountUser = async () => {
  try {
    const data = await axiosInstance.get("/user/growth");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy số lượng user: ", error);
    throw error;
  }
};
