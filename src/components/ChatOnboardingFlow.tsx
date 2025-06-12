
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import { MessageSquare, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'gia' | 'user';
  timestamp: Date;
  quickReplies?: string[];
}

const ChatOnboardingFlow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Conversation script for demo
  const conversationFlow = [
    {
      giaMessage: "Hi there Alice! 👋 Welcome to MVP Healthcare! I'm Gia, your personal health assistant. Can I ask you a couple of questions to help set up your account?",
      quickReplies: ["Yes, let's get started!", "Sure, I have a few minutes", "What do you need to know?"]
    },
    {
      giaMessage: "Perfect! First, let me confirm - are you looking to add family members to your plan, or is this just for you?",
      quickReplies: ["Just for me", "I have a spouse", "Family of 4"]
    },
    {
      giaMessage: "Great! Now, would you like me to help you find and add your current doctors to your account? I can search our network to see if they're covered.",
      quickReplies: ["Yes, that would be helpful", "I don't have a regular doctor", "Maybe later"]
    },
    {
      giaMessage: "Wonderful! What's your primary care doctor's name? I'll check if they're in our network.",
      quickReplies: ["Dr. Sarah Johnson", "Dr. Michael Chen", "I'll type it"]
    },
    {
      giaMessage: "Excellent news! 🎉 Dr. Sarah Johnson is in-network and accepting new patients. I've added her to your account. Would you like me to help you find a specialist too?",
      quickReplies: ["Yes, I need a dermatologist", "No, that's all for now", "What specialists are available?"]
    },
    {
      giaMessage: "Perfect! I found 3 highly-rated dermatologists near you. Dr. Emma Rodriguez has the earliest availability next week. Should I add her to your preferred providers?",
      quickReplies: ["Yes, add Dr. Rodriguez", "Show me other options", "I'll decide later"]
    },
    {
      giaMessage: "All set! 🌟 You're almost done. I've set up your provider network and your digital ID card will be ready in your app within 24 hours. Is there anything else I can help you with today?",
      quickReplies: ["How do I use my benefits?", "When do my benefits start?", "No, thank you!"]
    }
  ];

  const addGiaMessage = (text: string, quickReplies?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'gia',
        timestamp: new Date(),
        quickReplies
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleUserResponse = (response: string) => {
    addUserMessage(response);
    
    // Move to next step in conversation
    setTimeout(() => {
      if (currentStep < conversationFlow.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        const nextFlow = conversationFlow[nextStep];
        addGiaMessage(nextFlow.giaMessage, nextFlow.quickReplies);
      }
    }, 1000);
  };

  // Initialize conversation
  useEffect(() => {
    setTimeout(() => {
      const firstFlow = conversationFlow[0];
      addGiaMessage(firstFlow.giaMessage, firstFlow.quickReplies);
    }, 1000);
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white px-4 py-4 border-b border-border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#C53E5E] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">Gia by MVP</h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs text-muted-foreground">Online now</p>
            </div>
          </div>
          <MessageSquare className="w-5 h-5 text-[#C53E5E]" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* SMS Entry Simulation */}
        <div className="text-center py-4">
          <div className="inline-block bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600 mb-2">
            <span>📱 SMS from MVP Healthcare</span>
          </div>
          <p className="text-xs text-gray-500">Welcome message received • Tap to continue</p>
        </div>

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} onQuickReply={handleUserResponse} />
        ))}

        {isTyping && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#C53E5E] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="border-t border-border bg-white p-4">
        <ChatInput onSendMessage={handleUserResponse} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatOnboardingFlow;
