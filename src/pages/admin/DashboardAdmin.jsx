import {
  Users,
  DollarSign,
  Calendar,
  History,
  Shield,
  UserPlus,
} from "lucide-react";

import { getCountUser } from "../../api/userAPI";
import { getRevenue } from "../../api/invoiceAPI";
import { getNextExam, getLastExam } from "../../api/scheduleAPI";
import { getCountCertificate } from "../../api/certificateAPI";
import { getCountCustomer } from "../../api/customerAPI";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import AnalyticsCards from "../../components/AnalyticsCards";

function DashboardAdmin() {
  const [countUser, setCountUser] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [nextExam, setNextExam] = useState(null);
  const [lastExam, setLastExam] = useState(null);
  const [certificateCount, setCertificateCount] = useState(null);
  const [countCustomer, setCountCustomer] = useState(null);

  useEffect(() => {
    getCountUser().then((data) => {
      setCountUser(data);
    });
    getRevenue().then((data) => {
      setRevenue(data);
    });
    getNextExam().then((data) => {
      setNextExam(data);
    });
    getLastExam().then((data) => {
      setLastExam(data);
    });
    getCountCertificate().then((data) => {
      setCertificateCount(data);
    });
    getCountCustomer().then((data) => {
      setCountCustomer(data);
    });
  }, []);

  // Định dạng tiền tệ
  const formatVND = (value) => {
    if (value == null) return "";
    return Number(value).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="hover:cursor-default mb-16">
      <TopBar />
      <Header />
      {/* Content */}
      <div className=" flex flex-col justify-center items-center">
        {/* Thống kê */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-3/5 md:w-4/5 mx-auto mb-8">
          {/* user */}
          <AnalyticsCards
            title={"Tổng số nhân viên"}
            icon={Users}
            metric={countUser?.total_users}
            description={
              "+" + countUser?.percentage_new_users + "% so với tháng trước"
            }
          />
          {/* doanh thu */}
          <AnalyticsCards
            title="Doanh thu"
            icon={DollarSign}
            metric={formatVND(revenue?.current_month_revenue)}
            description={
              (revenue?.percent_change >= 0 ? "+" : "") +
              revenue?.percent_change +
              "% so với tháng trước"
            }
          />
          {/* Lịch thi kế tiếp */}
          <AnalyticsCards
            title={"Lịch thi tiếp đến"}
            icon={Calendar}
            metric={nextExam?.exam_schedule_count}
            description={"Trong 30 ngày tới"}
          />
          {/* Lịch thi đã qua */}
          <AnalyticsCards
            title={"Lịch thi gần đây"}
            icon={History}
            metric={lastExam?.exam_count_last_30d}
            description={"Trong 30 ngày qua"}
          />
          {/* Lượng chứng chỉ hiện tại */}
          <AnalyticsCards
            title={"Chứng chỉ hiện tại"}
            icon={Shield}
            metric={certificateCount?.total_certificates + " loại"}
            description={"Đang có hiệu lực"}
          />
          {/* Lượng khách hàng */}
          <AnalyticsCards
            title={"Khách hàng"}
            icon={UserPlus}
            metric={countCustomer?.total_customers}
            description={"Đã và đang hoạt động"}
          />
        </div>
        {/* Action */}
        <div className="flex flex-col w-3/5 md:w-4/5 p-4 border border-gray-100 rounded-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="font-bold">Hành động nhanh</h1>
          <p className="mb-4">Thực hiện tác vụ ngay tại đây</p>
          <Link
            to="/admin/employee-management"
            className="inline-block text-center bg-[#0F3A64] mb-4 py-2 rounded-xs font-bold text-white hover:bg-[#0C2C4D] transition-colors duration-200"
          >
            Quản lý nhân viên
          </Link>
          <Link
            to="/admin/exam-management"
            className="inline-block text-center bg-[#0F3A64] mb-4 py-2 rounded-xs font-bold text-white hover:bg-[#0C2C4D] transition-colors duration-200"
          >
            Quản lý lịch thi
          </Link>
          <Link
            to="/admin/certificate-management"
            className="inline-block text-center bg-[#0F3A64] mb-4 py-2 rounded-xs font-bold text-white hover:bg-[#0C2C4D] transition-colors duration-200"
          >
            Quản lý chứng chỉ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
