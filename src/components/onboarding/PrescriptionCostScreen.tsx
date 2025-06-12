
import { Button } from "@/components/ui/button";
import { Search, Heart, Pill } from "lucide-react";

interface PrescriptionCostScreenProps {
  onPrev: () => void;
}

const PrescriptionCostScreen = ({ onPrev }: PrescriptionCostScreenProps) => {
  const handleComplete = () => {
    console.log("Onboarding completed! Taking user to main Gia app...");
    // This would typically navigate to the main app
  };

  return (
    <div className="px-6 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Get Ready to Make the Most of Gia!
        </h1>
      </div>

      <div className="space-y-6">
        {/* Find Care */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Search className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Find Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Easily search for in-network doctors, specialists, and facilities near you to get the care you need.
            </p>
          </div>
        </div>

        {/* Manage Your Health */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Manage Your Health</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Track your benefits, view claims, and access your health information all in one convenient place.
            </p>
          </div>
        </div>

        {/* Pharmacy and Drug Costs */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Pill className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Pharmacy and Drug Costs</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Compare prescription costs and find the most affordable options at pharmacies near you.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <Button 
          onClick={handleComplete}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white"
        >
          Take Me to Gia!
        </Button>
      </div>
    </div>
  );
};

export default PrescriptionCostScreen;
