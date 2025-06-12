
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Star, Clock, Users } from "lucide-react";

interface PlanOverviewScreenProps {
  onNext: () => void;
  onPrev: () => void;
}

const PlanOverviewScreen = ({ onNext, onPrev }: PlanOverviewScreenProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const providers = [
    {
      id: "1",
      name: "Dr. Sarah Chen",
      specialty: "Family Medicine",
      location: "Downtown Medical Center",
      distance: "0.8 miles",
      rating: 4.9,
      availability: "Next available: Tomorrow",
      patients: 1200,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2", 
      name: "Dr. Michael Rodriguez",
      specialty: "Internal Medicine",
      location: "Westside Health Plaza",
      distance: "1.2 miles",
      rating: 4.8,
      availability: "Next available: Friday",
      patients: 980,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "3",
      name: "Dr. Emily Johnson",
      specialty: "Family Medicine",
      location: "Community Health Center",
      distance: "2.1 miles", 
      rating: 4.7,
      availability: "Next available: Monday",
      patients: 1450,
      image: "https://images.unsplash.com/photo-1594824956795-c8c562a75ab8?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-6 py-8 flex flex-col min-h-[calc(100vh-120px)]">
      {/* Gia's Introduction */}
      <div className="bg-gradient-to-br from-[#C53E5E]/5 to-[#C53E5E]/10 rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#C53E5E] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Hi there! 👋</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              I'm Gia, your personal health assistant! Let's find you an amazing primary care provider. 
              Having a dedicated doctor helps coordinate your care and unlocks all your plan benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-2 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Choose Your Doctor
        </h1>
        <p className="text-sm text-gray-600">
          Find the perfect primary care provider for you
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Search by name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-2 border-gray-200 focus:border-[#C53E5E] transition-colors duration-200"
        />
      </div>

      {/* Provider Cards */}
      <div className="flex-1 space-y-4 mb-6">
        {filteredProviders.map((provider) => (
          <Card 
            key={provider.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 ${
              selectedProvider === provider.id 
                ? 'border-[#C53E5E] bg-[#C53E5E]/5' 
                : 'border-gray-200 hover:border-[#C53E5E]/30'
            }`}
            onClick={() => setSelectedProvider(provider.id)}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <img 
                  src={provider.image}
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{provider.name}</h3>
                      <p className="text-sm text-[#C53E5E] font-medium">{provider.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{provider.location} • {provider.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-green-600 font-medium">{provider.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{provider.patients.toLocaleString()} patients</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedProvider === provider.id && (
                <div className="mt-4 pt-4 border-t border-[#C53E5E]/20">
                  <div className="bg-[#C53E5E]/10 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Great choice!</span> Dr. {provider.name.split(' ')[1]} is accepting new patients and has excellent reviews for preventive care.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3 pt-6 border-t border-gray-100">
        <Button 
          variant="ghost" 
          className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-50"
        >
          I'll choose later
        </Button>
        <Button 
          onClick={onNext}
          disabled={!selectedProvider}
          className={`w-full transition-all duration-200 ${
            selectedProvider 
              ? 'bg-[#C53E5E] hover:bg-[#A02D47] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {selectedProvider ? "Continue with Selected Doctor" : "Select a Doctor to Continue"}
        </Button>
      </div>
    </div>
  );
};

export default PlanOverviewScreen;
