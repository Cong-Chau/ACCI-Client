function InforDetail({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div
      onClick={onClose} // bấm ngoài → đóng popup
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-6 w-[400px]"
        onClick={(e) => e.stopPropagation()} // bấm trong → không đóng
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Thông tin nhân viên</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:cursor-pointer hover:text-red-500 font-bold"
          >
            X
          </button>
        </div>

        {/* Nội dung (ví dụ) */}
        <p>Chi tiết nhân viên sẽ hiển thị ở đây...</p>
      </div>
    </div>
  );
}

export default InforDetail;
