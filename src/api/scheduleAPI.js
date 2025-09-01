import axiosInstance from "./axiosInstance";

// lấy số lượng lịch thi kế tiếp
export const getNextExam = async () => {
  try {
    const data = await axiosInstance.get("/schedule/count-next-exam");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy lịch thi kế tiếp: ", error);
    throw error;
  }
};

// lấy số lượng lịch thi vừa qua
export const getLastExam = async () => {
  try {
    const data = await axiosInstance.get("/schedule/count-last-exam");
    return data[0];
  } catch (error) {
    console.error("Lỗi khi lấy số lượng lịch thi vừa qua: ", error);
    throw error;
  }
};
