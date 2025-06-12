
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'gia' | 'user';
  timestamp: Date;
  quickReplies?: string[];
}

interface ChatMessageProps {
  message: Message;
  onQuickReply: (reply: string) => void;
}

const ChatMessage = ({ message, onQuickReply }: ChatMessageProps) => {
  const isGia = message.sender === 'gia';

  return (
    <div className={`flex items-start gap-3 animate-fade-in ${isGia ? '' : 'flex-row-reverse'}`}>
      {isGia && (
        <div className="w-8 h-8 bg-[#C53E5E] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">G</span>
        </div>
      )}
      
      <div className={`flex flex-col gap-2 max-w-xs ${isGia ? '' : 'items-end'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isGia
              ? 'bg-gray-100 text-gray-900 rounded-bl-md'
              : 'bg-[#C53E5E] text-white rounded-br-md'
          }`}
        >
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>

        {/* Quick Reply Buttons */}
        {isGia && message.quickReplies && (
          <div className="flex flex-col gap-2 w-full">
            {message.quickReplies.map((reply, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => onQuickReply(reply)}
                className="justify-start text-left border-[#C53E5E] text-[#C53E5E] hover:bg-[#C53E5E] hover:text-white transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {reply}
              </Button>
            ))}
          </div>
        )}

        <span className={`text-xs text-gray-500 ${isGia ? 'text-left' : 'text-right'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {!isGia && (
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-gray-600 font-bold text-sm">A</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
