
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Globe, MessageSquare } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Let's Personalize Your Gia Experience!
        </h1>
      </div>

      <div className="space-y-6">
        {/* Language Preference */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-gray-600" />
            <Label className="text-lg font-semibold text-gray-900">Language Preference</Label>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Select your preferred language for a personalized experience that makes navigating your benefits easier.
          </p>
          <Select defaultValue="english">
            <SelectTrigger className="w-full">
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
            <MessageSquare className="w-6 h-6 text-gray-600" />
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
                  className="block w-14 h-8 rounded-full bg-[#C53E5E] cursor-pointer relative"
                >
                  <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform translate-x-6"></span>
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
                  className="block w-14 h-8 rounded-full bg-gray-300 cursor-pointer relative"
                >
                  <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform"></span>
                </label>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <span className="text-base text-gray-700">Push Notifications</span>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gray-600 text-white border-gray-600 hover:bg-gray-700"
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
          className="w-full text-gray-600 hover:text-gray-800"
        >
          Skip
        </Button>
        <Button 
          onClick={onNext}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white"
        >
          Confirm Preferences
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
