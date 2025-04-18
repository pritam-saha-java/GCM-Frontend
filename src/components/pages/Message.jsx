import { Bell, CheckCircle, Info, AlertTriangle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Deposit Successful",
    message: "Your deposit of 500 USDT was successful.",
    date: "2025-04-15 14:22",
  },
  {
    id: 2,
    type: "info",
    title: "System Update",
    message: "Scheduled maintenance will occur on April 20 at 2:00 AM.",
    date: "2025-04-14 08:10",
  },
  {
    id: 3,
    type: "warning",
    title: "Login Attempt",
    message: "New login from unknown device detected.",
    date: "2025-04-13 20:33",
  },
];

const iconMap = {
  success: <CheckCircle size={18} className="text-green-400" />,
  info: <Info size={18} className="text-blue-400" />,
  warning: <AlertTriangle size={18} className="text-yellow-400" />,
};

export default function Message() {
  return (
    <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg text-white">
      <div className="flex items-center gap-2 mb-4">
        <Bell size={20} className="text-cyan-400" />
        <h3 className="text-xl font-bold">Notifications</h3>
      </div>

      <ul className="space-y-4">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="flex items-start gap-4 bg-[#22223a]/60 border border-gray-700 p-4 rounded-lg shadow-sm hover:bg-[#29294b]/60 transition"
          >
            <div>{iconMap[note.type]}</div>
            <div className="flex-1">
              <div className="font-semibold text-white">{note.title}</div>
              <div className="text-sm text-gray-400">{note.message}</div>
              <div className="text-xs text-gray-500 mt-1">{note.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
