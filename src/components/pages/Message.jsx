import { useEffect, useState } from "react";
import { Bell, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { toast } from "react-hot-toast";
import { getUserMessages } from "../../api/userService";

const iconMap = {
  success: <CheckCircle size={18} className="text-green-400" />,
  info: <Info size={18} className="text-blue-400" />,
  warning: <AlertTriangle size={18} className="text-yellow-400" />,
};

export default function Message() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getUserMessages();
        const parsed = data.map((msg, index) => ({
          id: index,
          type: "info",
          title: "Notification",
          message: msg,
        }));
        setMessages(parsed);
      } catch (error) {
        toast.error("Failed to load messages");
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="bg-[#1a1a2f]/70 backdrop-blur-md border border-cyan-500/20 p-6 rounded-2xl shadow-lg text-white">
      <div className="flex items-center gap-2 mb-4">
        <Bell size={20} className="text-cyan-400" />
        <h3 className="text-xl font-bold">Notifications</h3>
      </div>

      <ul className="space-y-4">
        {messages.map((note) => (
          <li
            key={note.id}
            className="flex items-start gap-4 bg-[#22223a]/60 border border-gray-700 p-4 rounded-lg shadow-sm hover:bg-[#29294b]/60 transition"
          >
            <div>{iconMap[note.type]}</div>
            <div className="flex-1">
              <div className="font-semibold text-white">{note.title}</div>
              <div className="text-sm text-gray-400">{note.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
