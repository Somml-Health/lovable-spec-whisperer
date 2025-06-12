
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import { MessageSquare, Search } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'gia' | 'user';
  timestamp: Date;
  quickReplies?: string[];
  showSearch?: boolean;
}

interface Provider {
  name: string;
  specialty: string;
  location: string;
  inNetwork: boolean;
}

const ChatOnboardingFlow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Provider[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Provider database for search
  const providers: Provider[] = [
    {
      name: "Dr. Matt Miles",
      specialty: "Family Medicine",
      location: "Downtown Medical Center",
      inNetwork: true
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Family Medicine", 
      location: "Westside Health Plaza",
      inNetwork: true
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      location: "Community Health Center", 
      inNetwork: true
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Cardiology",
      location: "Heart Center",
      inNetwork: false
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Updated conversation script
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
      giaMessage: "Wonderful! Let me help you search for your doctor. You can type their name below and I'll check if they're in our network.",
      quickReplies: ["Dr. Matt Miles", "Dr. Sarah Johnson", "Let me search"],
      showSearch: true
    },
    {
      giaMessage: "", // This will be dynamically set based on search results
      quickReplies: ["Yes, add this doctor", "Search for another doctor", "I'll decide later"]
    },
    {
      giaMessage: "Perfect! I've added your selected doctor to your account. Would you like me to help you find a specialist too?",
      quickReplies: ["Yes, I need a dermatologist", "No, that's all for now", "What specialists are available?"]
    },
    {
      giaMessage: "Excellent! I found several specialists near you. Dr. Emma Rodriguez has the earliest availability next week. Should I add her to your preferred providers?",
      quickReplies: ["Yes, add Dr. Rodriguez", "Show me other options", "I'll decide later"]
    },
    {
      giaMessage: "All set! 🌟 You're almost done. I've set up your provider network and your digital ID card will be ready in your app within 24 hours. Is there anything else I can help you with today?",
      quickReplies: ["How do I use my benefits?", "When do my benefits start?", "No, thank you!"]
    }
  ];

  const searchProviders = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results = providers.filter(provider =>
      provider.name.toLowerCase().includes(query.toLowerCase()) ||
      provider.specialty.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleProviderSelect = (provider: Provider) => {
    // Add user message showing selection
    addUserMessage(`I'd like to select ${provider.name}`);
    
    // Hide search interface
    setShowSearch(false);
    
    // Update the current step's Gia message with search results
    setTimeout(() => {
      const resultMessage = provider.inNetwork 
        ? `Excellent news! 🎉 ${provider.name} is in-network and accepting new patients. They specialize in ${provider.specialty} at ${provider.location}. Should I add them to your account?`
        : `I found ${provider.name}, but they're not currently in our network. However, I can show you similar ${provider.specialty} doctors who are covered by your plan.`;
      
      addGiaMessage(resultMessage, ["Yes, add this doctor", "Search for another doctor", "Show me alternatives"]);
      setCurrentStep(currentStep + 1);
    }, 1000);
  };

  const addGiaMessage = (text: string, quickReplies?: string[], showSearchOption?: boolean) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'gia',
        timestamp: new Date(),
        quickReplies,
        showSearch: showSearchOption
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
      if (showSearchOption) {
        setShowSearch(true);
      }
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
    
    // Handle special case for search step
    if (currentStep === 3 && response === "Let me search") {
      setShowSearch(true);
      return;
    }
    
    // Move to next step in conversation
    setTimeout(() => {
      if (currentStep < conversationFlow.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        const nextFlow = conversationFlow[nextStep];
        if (nextFlow.giaMessage) {
          addGiaMessage(nextFlow.giaMessage, nextFlow.quickReplies, nextFlow.showSearch);
        }
      }
    }, 1000);
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    searchProviders(query);
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

        {/* Provider Search Interface */}
        {showSearch && (
          <div className="bg-gray-50 rounded-2xl p-4 space-y-3 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Search className="w-4 h-4" />
              <span>Search for your doctor</span>
            </div>
            <Input
              placeholder="Type doctor's name (e.g., Dr. Matt Miles)"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="border-2 border-gray-200 focus:border-[#C53E5E]"
            />
            {searchResults.length > 0 && (
              <div className="space-y-2">
                {searchResults.map((provider, index) => (
                  <div
                    key={index}
                    onClick={() => handleProviderSelect(provider)}
                    className="p-3 bg-white rounded-lg border cursor-pointer hover:border-[#C53E5E] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{provider.name}</p>
                        <p className="text-sm text-gray-600">{provider.specialty}</p>
                        <p className="text-xs text-gray-500">{provider.location}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        provider.inNetwork ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {provider.inNetwork ? 'In Network' : 'Out of Network'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchTerm && searchResults.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-2">
                No doctors found. Try searching for "Dr. Matt Miles" or "Dr. Sarah Johnson"
              </p>
            )}
          </div>
        )}

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
