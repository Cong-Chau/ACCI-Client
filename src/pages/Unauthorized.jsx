function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold text-red-500">403</h1>
      <h2 className="text-3xl mt-4">Không có quyền truy cập</h2>
      <p className="mt-2 text-gray-400">
        Bạn không có quyền truy cập vào trang này.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
      >
        Quay lại
      </button>
    </div>
  );
}

export default Unauthorized;
