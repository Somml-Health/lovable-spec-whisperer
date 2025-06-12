
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users } from "lucide-react";

interface VirtualCareScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const VirtualCareScreen = ({ onNext, onPrev }: VirtualCareScreenProps) => {
  return (
    <div className="px-6 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Unlock the Power of You
        </h1>
      </div>

      <div className="space-y-8">
        {/* 24/7 Virtual Care */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 $0 Virtual Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              For behavioral health care, urgent care, everyday care, nutrition and diet, and more.
            </p>
          </div>
        </div>

        {/* Free Preventive Care */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Preventive Care</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Preventive screenings, immunizations, counseling, pregnancy-related care, child well-visits, and more are all covered for free under your plan with in-network providers under the Affordable Care Act.
            </p>
          </div>
        </div>

        {/* Well-Being Reimbursements */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-gray-600 fill-current" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">$600 Well-Being Reimbursements</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We'll reimburse you up to $600 in your plan year for purchases that benefit your well-being for things like gym memberships, yoga classes, fitness tracking devices, museum entrance fees, etc.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
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

export default VirtualCareScreen;
