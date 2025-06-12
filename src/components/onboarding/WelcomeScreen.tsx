
import { Button } from "@/components/ui/button";
import { Heart, Shield, Smartphone } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-120px)]">
      <div className="text-center">
        {/* Gia Logo */}
        <div className="w-20 h-20 bg-[#C53E5E] rounded-2xl mx-auto mb-8 flex items-center justify-center">
          <span className="text-white text-3xl font-bold italic">Gia</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to Gia
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Let's get you connected with your health benefits and show you how to make the most of your coverage.
        </p>

        {/* Feature highlights */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#C53E5E]" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Virtual Care 24/7</h3>
              <p className="text-sm text-gray-600">Talk to certified healthcare professionals anytime</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#C53E5E]" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Digital ID Card</h3>
              <p className="text-sm text-gray-600">Quick access to your member information</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#C53E5E]" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Easy Self-Service</h3>
              <p className="text-sm text-gray-600">Manage your plan and find care on your own</p>
            </div>
          </div>
        </div>
      </div>

      <Button 
        onClick={onNext}
        className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white py-4 text-lg font-semibold rounded-xl"
        size="lg"
      >
        Get Started
      </Button>
    </div>
  );
};

export default WelcomeScreen;
