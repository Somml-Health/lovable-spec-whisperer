
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, Users } from "lucide-react";

interface PlanOverviewScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const PlanOverviewScreen = ({ onNext, onPrev }: PlanOverviewScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-120px)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Manage Your Plan Your Way
        </h1>
        <p className="text-gray-600 mb-8">
          Here's an overview of your MVP Premier HMO plan and how to manage it.
        </p>

        {/* Plan Card */}
        <Card className="p-6 mb-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">MVP Premier HMO</h3>
              <p className="text-sm text-gray-600">SUBSCRIBER ID: 123456789</p>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Enrolled in Auto Pay
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-center">
              <span className="text-3xl font-bold text-gray-900">$30</span>
              <span className="text-gray-600">.00</span>
              <p className="text-sm text-gray-600 mt-1">Due: 05/31/2025</p>
            </div>
          </div>

          <Button className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white rounded-lg">
            Make a Payment
          </Button>
        </Card>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <DollarSign className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Track Payments</h4>
              <p className="text-sm text-gray-600">View payment history and outstanding balances</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <Calendar className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Auto Pay</h4>
              <p className="text-sm text-gray-600">Never miss a payment with automatic billing</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
            <Users className="w-6 h-6 text-[#C53E5E]" />
            <div>
              <h4 className="font-semibold text-gray-900">Recent Claims</h4>
              <p className="text-sm text-gray-600">Review processed claims and costs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-8">
        <Button 
          onClick={onNext}
          className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white py-4 text-lg font-semibold rounded-xl"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PlanOverviewScreen;
