
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface DigitalIdScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const DigitalIdScreen = ({ onNext, onPrev }: DigitalIdScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col min-h-[calc(100vh-120px)]">
      <div className="text-center space-y-8 flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          ID Card On The Go!
        </h1>
        
        {/* ID Card Preview */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-gray-400" />
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-sm text-gray-600 leading-relaxed text-center px-4">
            Access your digital ID card anytime, anywhere. No more worrying about forgetting your physical card at medical appointments.
          </p>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <Button 
          variant="ghost" 
          className="w-full text-gray-600 hover:text-gray-800"
        >
          Download ID Card
        </Button>
        <Button 
          onClick={onNext}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DigitalIdScreen;
