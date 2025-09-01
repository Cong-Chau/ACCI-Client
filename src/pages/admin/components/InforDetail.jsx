function InforDetail({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px]">
        <h1>Thông tin nhân viên</h1>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 font-bold"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default InforDetail;
