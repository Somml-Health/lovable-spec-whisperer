
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Download, Smartphone } from "lucide-react";

interface DigitalIdScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const DigitalIdScreen = ({ onNext, onPrev }: DigitalIdScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-120px)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Quick Access to Your ID Card
        </h1>
        <p className="text-gray-600 mb-8">
          Your digital ID card is always available when you need it. No more lost cards!
        </p>

        {/* Sample ID Card */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-[#C53E5E] to-[#A02D47] text-white">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold">Medical</h3>
              <p className="text-sm opacity-90">Medical ID Card</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">Dental</h3>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#C53E5E] font-bold text-xs">MVP</span>
            </div>
            <div className="text-xs opacity-90">Medicare Gold</div>
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-sm font-semibold">Jane Smith</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="opacity-75">RxBIN:</p>
                <p>156563</p>
              </div>
              <div>
                <p className="opacity-75">RxPCN:</p>
                <p>XXX</p>
              </div>
              <div>
                <p className="opacity-75">RxGRP:</p>
                <p>MYXXXXX</p>
              </div>
            </div>
            <p className="text-sm">1234567890</p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="opacity-75">Plan Type</p>
                <p>Medicare Gold</p>
              </div>
              <div>
                <p className="opacity-75">Group No</p>
                <p>WJ1500MM001</p>
              </div>
              <div>
                <p className="opacity-75">Member ID</p>
                <p>1234567890</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Share Card Button */}
        <Button 
          variant="outline" 
          className="w-full mb-6 border-[#C53E5E] text-[#C53E5E] hover:bg-red-50 py-3"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Card
        </Button>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <Smartphone className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Always Available</h4>
              <p className="text-sm text-gray-600">Access your ID card anytime, even offline</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <Share2 className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Easy Sharing</h4>
              <p className="text-sm text-gray-600">Share with providers or pharmacy instantly</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <Download className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Download & Print</h4>
              <p className="text-sm text-gray-600">Get a physical copy when needed</p>
            </div>
          </div>
        </div>
      </div>

      <Button 
        onClick={onNext}
        className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white py-4 text-lg font-semibold rounded-xl mt-8"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};

export default DigitalIdScreen;
