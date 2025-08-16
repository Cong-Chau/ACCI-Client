import { Phone, Mail, TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const formattedTime =
    `${days[time.getDay()]}, ${time.getDate().toString().padStart(2, "0")}/${(
      time.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${time.getFullYear()} - ` +
    time.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-sky-700 flex flex-row justify-between px-4 py-1.5 text-white text-sm">
      <div className="flex flex-row items-center gap-4">
        <p className="flex flex-row items-center gap-1">
          <Phone className="h-4 w-4" /> 070 898 8989
        </p>
        <p className="flex flex-row items-center gap-1">
          <Mail className="h-4 w-4" /> acci@gmail.com
        </p>
      </div>

      <div className="flex flex-row items-center gap-1">
        <TimerIcon className="h-4 w-4" /> {formattedTime}
      </div>
    </div>
  );
}

export default TopBar;
