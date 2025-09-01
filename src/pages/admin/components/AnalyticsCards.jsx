function AnalyticsCards({ title, icon: Icon, metric, description }) {
  return (
    <div className="flex flex-col justify-between border border-gray-100 p-4 rounded-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-row items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <Icon className="w-5 h-5 text-gray-500" />
      </div>

      {/* Metric */}
      <p className="text-2xl font-bold text-gray-900">
        {metric ? metric : "Chưa có doanh thu"}
      </p>

      {/* Description */}
      <p className="text-xs text-gray-400 mt-1">{metric ? description : ""}</p>
    </div>
  );
}

export default AnalyticsCards;
