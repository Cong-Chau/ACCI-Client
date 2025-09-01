import axiosInstance from "./axiosInstance";

export const getCountCertificate = async () => {
  try {
    const data = await axiosInstance.get("/certificate/count");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy số lượng chứng chỉ: ", error);
    throw error;
  }
};
