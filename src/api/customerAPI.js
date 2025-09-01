import axiosInstance from "./axiosInstance";

export const getCountCustomer = async () => {
  try {
    const data = await axiosInstance.get("/customer/count");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy số lượng khách hàng: ", error);
    throw error;
  }
};
