import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h4 className="font-bold text-lg">Support Chat</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-white font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
              Hi! How can we help you today?
            </div>
            {/* Example user message */}
            <div className="bg-blue-600 text-white p-3 rounded-lg self-end">
              I have a question about AssetVerse.
            </div>
          </div>

          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
