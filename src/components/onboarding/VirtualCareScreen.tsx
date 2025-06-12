
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Video, Clock } from "lucide-react";

interface VirtualCareScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const VirtualCareScreen = ({ onNext, onPrev }: VirtualCareScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-120px)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Virtual Care Wherever You Are
        </h1>
        <p className="text-gray-600 mb-8">
          Talk to certified healthcare professionals, 24/7. Select an option below that works best for you.
        </p>

        {/* Virtual Care Options */}
        <div className="space-y-4 mb-8">
          <Card className="p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#C53E5E]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#C53E5E]">Urgent Care</h3>
                <p className="text-sm text-gray-600">Avg response time: 20 min</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              For urgent medical needs, such as new or worsening cold and flu symptoms, minor injuries, urgent prescriptions.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-[#C53E5E] border-[#C53E5E]">
                Phone Call
              </Button>
              <Button variant="outline" size="sm" className="text-[#C53E5E] border-[#C53E5E]">
                In-App Messaging
              </Button>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#C53E5E]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#C53E5E]">Everyday Health Care</h3>
                <p className="text-sm text-gray-600">Avg response time: 2 hours</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              For most medical needs, such as cold and flu, UTIs, dermatology, birth control, prescriptions, and diabetes.
            </p>
          </Card>

          <Card className="p-6 border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-[#C53E5E]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#C53E5E]">Behavioral Health Care</h3>
                <p className="text-sm text-gray-600">Appts. within 7-14 days</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              For mental and behavioral health needs such as therapy and medication management.
            </p>
            <Button variant="outline" size="sm" className="text-[#C53E5E] border-[#C53E5E]">
              Video Appointment
            </Button>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-800">Available 24/7</span>
          </div>
          <ul className="space-y-1 text-sm text-green-700">
            <li>✓ Urgent Care</li>
            <li>✓ Behavioral Health Care</li>
            <li>✓ Everyday Care, and More!</li>
          </ul>
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

export default VirtualCareScreen;
