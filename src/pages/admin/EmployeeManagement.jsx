import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import AdminNav from "./components/AdminNav";
import InforDetail from "./components/InforDetail";

import { Search, CirclePlus, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Json dữ liệu mẫu danh sách nhân viên
const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    userName: "nva@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
    userName: "nvb@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
    userName: "nvc@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
    userName: "nvd@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 5,
    name: "Nguyễn Văn E",
    userName: "nve@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 0,
  },
  {
    id: 6,
    name: "Nguyễn Văn F",
    userName: "nvf@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 7,
    name: "Nguyễn Văn G",
    userName: "nvg@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 0,
  },
  {
    id: 8,
    name: "Nguyễn Văn H",
    userName: "nvh@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 9,
    name: "Nguyễn Văn I",
    userName: "nvi@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 1,
  },
  {
    id: 10,
    name: "Nguyễn Văn J",
    userName: "nvj@gmail.com",
    role: "Nhân viên tiếp nhận",
    status: 0,
  },
];

function EmployeeManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="hover:cursor-default mb-16">
      <TopBar />
      <Header />
      <AdminNav />
      {/* Content */}
      <div>
        {/* content header */}
        <div className="px-44 py-8 flex flex-row justify-between items-center">
          <h1 className="font-bold text-4xl">Danh sách nhân viên</h1>
          <div className="flex flex-row space-x-4">
            {/* Tìm kiếm */}
            <div className="flex flex-row items-center h-12">
              <input
                type="text"
                placeholder="Tên nhân viên"
                className="px-2 h-full border border-gray-400 rounded-l-lg focus:outline-none focus:placeholder-transparent"
              />
              <button className="bg-blue-950 h-12 w-12 p-2 rounded-r-lg hover:cursor-pointer hover:opacity-90 justify-center items-center flex">
                <Search className="  text-white font-bold" />
              </button>
            </div>
            {/* Thêm nhân viên */}
            <button className="bg-blue-950 flex flex-row items-center rounded-lg text-white font-bold p-2 hover:cursor-pointer hover:opacity-90">
              <CirclePlus className="mr-2" />
              Thêm
            </button>
          </div>
        </div>
        {/* Bảng danh sách nhân viên */}
        <div className="w-full flex justify-center items-center px-44">
          <table className="w-full rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 text-center">MSNV</th>
                <th className="py-2 px-4 text-left">Họ và tên</th>
                <th className="py-2 px-4 text-left">Tài khoản</th>
                <th className="py-2 px-4 text-left">Vai trò</th>
                <th className="py-2 px-4 text-left">Trạng thái tài khoản</th>
                <th className="py-2 px-4 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-gray-200 hover:bg-gray-100 h-12"
                >
                  <td className="px-4 text-center">{employee.id}</td>
                  <td className="px-4">{employee.name}</td>
                  <td className="px-4">{employee.userName}</td>
                  <td className="px-4">{employee.role}</td>
                  <td className="px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        employee.status === 1
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {employee.status === 1
                        ? "Đang hoạt động"
                        : "Không hoạt động"}
                    </span>
                  </td>
                  <td className="px-4">
                    <div className="flex items-center justify-center h-full space-x-3">
                      <button
                        onClick={() => setSelectedEmployee(employee.id)}
                        className="p-2 rounded-full  text-gray-600 hover:cursor-pointer hover:bg-blue-300 hover:text-white"
                      >
                        <Pencil size={18} />
                      </button>
                      <button className="p-2 rounded-full  text-gray-600 hover:cursor-pointer hover:bg-red-300 hover:text-white">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedEmployee && (
        <InforDetail
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
}

export default EmployeeManagement;
