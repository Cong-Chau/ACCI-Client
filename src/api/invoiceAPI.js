import axiosInstance from "./axiosInstance";

export const getRevenue = async () => {
  try {
    const data = await axiosInstance.get("/invoice/monthly-revenue");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy doanh thu: ", error);
    throw error;
  }
};
