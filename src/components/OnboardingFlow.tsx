
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import WelcomeScreen from "@/components/onboarding/WelcomeScreen";
import PlanOverviewScreen from "@/components/onboarding/PlanOverviewScreen";
import VirtualCareScreen from "@/components/onboarding/VirtualCareScreen";
import DigitalIdScreen from "@/components/onboarding/DigitalIdScreen";
import PrescriptionCostScreen from "@/components/onboarding/PrescriptionCostScreen";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const screens = [
    <WelcomeScreen key="welcome" onNext={nextStep} />,
    <PlanOverviewScreen key="plan" onNext={nextStep} onPrev={prevStep} />,
    <VirtualCareScreen key="virtual" onNext={nextStep} onPrev={prevStep} />,
    <DigitalIdScreen key="digital" onNext={nextStep} onPrev={prevStep} />,
    <PrescriptionCostScreen key="prescription" onPrev={prevStep} />,
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white relative">
      {/* Progress Bar with Gia Branding */}
      <div className="sticky top-0 z-10 bg-white px-6 pt-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#C53E5E] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Gia</h2>
            <p className="text-xs text-gray-600">Your Health Assistant</p>
          </div>
        </div>
        <Progress 
          value={(currentStep + 1) / totalSteps * 100} 
          className="h-3"
        />
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-600 font-medium">
            Step {currentStep + 1} of {totalSteps}
          </span>
          {currentStep > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={prevStep}
              className="text-[#C53E5E] hover:text-[#A02D47] hover:bg-[#C53E5E]/5 transition-all duration-200"
            >
              ← Back
            </Button>
          )}
        </div>
      </div>

      {/* Screen Content with Animation */}
      <div className="flex-1 animate-fade-in">
        {screens[currentStep]}
      </div>
    </div>
  );
};

export default OnboardingFlow;
