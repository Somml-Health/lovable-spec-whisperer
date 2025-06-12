
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Globe, MessageSquare, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="px-6 py-8 space-y-8">
      {/* Gia's Welcome Message */}
      <div className="bg-gradient-to-br from-[#C53E5E]/5 to-[#C53E5E]/10 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C53E5E] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-gray-900">Welcome to your health journey!</h3>
              <Sparkles className="w-4 h-4 text-[#C53E5E]" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              I'm Gia, your personal health assistant! I'm here to make your health insurance experience simple, 
              personalized, and actually enjoyable. Let's get you set up in just a few quick steps.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Let's Personalize Your Experience!
        </h1>
      </div>

      <div className="space-y-6">
        {/* Language Preference */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#C53E5E]" />
            <Label className="text-lg font-semibold text-gray-900">Language Preference</Label>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Select your preferred language for a personalized experience that makes navigating your benefits easier.
          </p>
          <Select defaultValue="english">
            <SelectTrigger className="w-full border-2 border-gray-200 focus:border-[#C53E5E] transition-colors duration-200">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Español</SelectItem>
              <SelectItem value="french">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Communication Preferences */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#C53E5E]" />
            <Label className="text-lg font-semibold text-gray-900">Communication Preferences</Label>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Choose how you'd like to receive important updates about your health plan and benefits.
          </p>
          
          <div className="space-y-4">
            {/* Email Preferences */}
            <div className="flex items-center justify-between">
              <span className="text-base text-gray-700">Email Preferences</span>
              <div className="relative">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only"
                  id="email-toggle"
                />
                <label
                  htmlFor="email-toggle"
                  className="block w-14 h-8 rounded-full bg-[#C53E5E] cursor-pointer relative transition-colors duration-200"
                >
                  <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform translate-x-6 shadow-sm"></span>
                </label>
              </div>
            </div>

            {/* Text Message */}
            <div className="flex items-center justify-between">
              <span className="text-base text-gray-700">Text Message</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="text-toggle"
                />
                <label
                  htmlFor="text-toggle"
                  className="block w-14 h-8 rounded-full bg-gray-300 cursor-pointer relative transition-colors duration-200 hover:bg-gray-400"
                >
                  <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform shadow-sm"></span>
                </label>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-base text-gray-700">Push Notifications</span>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-[#C53E5E] text-white border-[#C53E5E] hover:bg-[#A02D47] hover:border-[#A02D47] transition-all duration-200"
              >
                Turn On
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <Button 
          variant="ghost" 
          className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        >
          Skip for now
        </Button>
        <Button 
          onClick={onNext}
          className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Let's Get Started! →
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
