
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Mail, CheckCircle } from "lucide-react";

interface PrescriptionCostScreenProps {
  onPrev: () => void;
}

const PrescriptionCostScreen = ({ onPrev }: PrescriptionCostScreenProps) => {
  return (
    <div className="px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-120px)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Find and Compare Prescription Costs
        </h1>
        <p className="text-gray-600 mb-8">
          Features vary by plan. Search for your medications to see costs and find the best pharmacy options.
        </p>

        {/* Search Example */}
        <Card className="p-4 mb-6 border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search medications..."
              value="Lipitor 10mg Tablet"
              className="border-0 p-0 text-[#C53E5E] font-medium"
              readOnly
            />
          </div>
          <Button size="sm" className="text-[#C53E5E] bg-red-50 hover:bg-red-100">
            Refine Search
          </Button>
        </Card>

        {/* Sample Results */}
        <div className="space-y-4 mb-8">
          <Card className="p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#C53E5E]" />
                <div>
                  <h4 className="font-semibold text-gray-900">CVS Pharmacy</h4>
                  <p className="text-sm text-gray-600">123 Main Street, Albany, NY 12202</p>
                  <p className="text-sm text-[#C53E5E]">123-456-7890</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-[#C53E5E] border-[#C53E5E]">
                Update
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">GENERIC</p>
                  <p className="font-semibold">Atorvastatin Calcium 10mg Tablet</p>
                  <p className="text-sm text-gray-600">90-day supply (Quantity—90)</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">$2.49</p>
                  <p className="text-sm text-gray-600">for 3 months</p>
                  <p className="text-xs text-gray-500">($0.83/month)</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">BRAND</p>
                <h4 className="font-semibold text-gray-900">Lipitor 10mg Tablet</h4>
                <p className="text-sm text-gray-600">90-day supply (Quantity—90)</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">$499.39</p>
                <p className="text-sm text-gray-600">for 3 months</p>
                <p className="text-xs text-gray-500">($166.46/month)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Mail Order Option */}
        <Card className="p-4 mb-8 bg-blue-50 border border-blue-200">
          <div className="flex items-center space-x-3 mb-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <h4 className="font-semibold text-blue-900">Mail Order</h4>
              <p className="text-sm text-blue-700">GENERIC - Atorvastatin Calcium 10mg</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-lg font-bold text-blue-900">$2.49</p>
            </div>
          </div>
        </Card>

        {/* Key Benefits */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700">Compare prices across pharmacies</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700">Find generic alternatives to save money</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-700">Mail order options for convenience</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          className="w-full bg-[#C53E5E] hover:bg-[#A02D47] text-white py-4 text-lg font-semibold rounded-xl"
          size="lg"
        >
          Start Using Gia
        </Button>
        <p className="text-center text-sm text-gray-600">
          You're all set! These features are always available in your Gia app.
        </p>
      </div>
    </div>
  );
};

export default PrescriptionCostScreen;
