import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface PlanOverviewScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const PlanOverviewScreen = ({ onNext, onPrev }: PlanOverviewScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col min-h-[calc(100vh-120px)]">
      <div className="text-center space-y-8 flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Choose a Primary Care Provider
        </h1>
        
        {/* Placeholder for provider selection interface */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed text-center px-4">
            Having a primary care provider helps coordinate your care and ensures you get the most from your health plan benefits.
          </p>
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
          Choose a Doctor
        </Button>
      </div>
    </div>
  );
};

export default PlanOverviewScreen;
