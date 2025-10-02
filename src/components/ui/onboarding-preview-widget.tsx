"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Users, 
  GraduationCap, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const organizationTypes = [
  {
    id: "SME",
    title: "Small Business",
    description: "For-profit companies, startups, and enterprises",
    icon: Building2,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    id: "Nonprofit",
    title: "Nonprofit",
    description: "501(c)(3) and other tax-exempt organizations",
    icon: Users,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600"
  },
  {
    id: "Academic",
    title: "Academic Institution",
    description: "Universities, colleges, schools, and research centers",
    icon: GraduationCap,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    id: "Healthcare",
    title: "Healthcare Organization",
    description: "Hospitals, clinics, and health service providers",
    icon: Heart,
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600"
  }
];

export function OnboardingPreviewWidget() {
  const [selectedType, setSelectedType] = useState("SME");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 1) {
        // Auto-cycle through organization types
        const currentIndex = organizationTypes.findIndex(type => type.id === selectedType);
        const nextIndex = (currentIndex + 1) % organizationTypes.length;
        setSelectedType(organizationTypes[nextIndex].id);
        
        // After showing all types, move to step 2
        if (nextIndex === 0) {
          setTimeout(() => setStep(2), 1000);
        }
      } else if (step === 2) {
        // Show completion and reset
        setTimeout(() => {
          setStep(1);
          setSelectedType("SME");
        }, 2000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedType, step]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-80 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Setup Wizard</h3>
              <p className="text-xs text-gray-600">Step {step} of 2</p>
            </div>
          </div>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="text-center mb-4">
                <h4 className="font-medium text-gray-900 text-sm mb-1">
                  What type of organization are you?
                </h4>
                <p className="text-xs text-gray-600">
                  This helps us find relevant grants
                </p>
              </div>

              <div className="space-y-2">
                {organizationTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  
                  return (
                    <motion.div
                      key={type.id}
                      className={`
                        relative p-3 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${isSelected 
                          ? 'border-blue-500 bg-blue-50 shadow-md' 
                          : type.color
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      animate={{ 
                        scale: isSelected ? 1.02 : 1,
                        boxShadow: isSelected ? "0 4px 12px rgba(59, 130, 246, 0.15)" : "none"
                      }}
                    >
                      {isSelected && (
                        <motion.div 
                          className="absolute top-2 right-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </motion.div>
                      )}
                      
                      <div className="flex items-center space-x-3">
                        <div className={`
                          w-8 h-8 rounded-lg flex items-center justify-center
                          ${isSelected ? 'bg-blue-100' : 'bg-white'}
                        `}>
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : type.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-xs text-gray-900 truncate">{type.title}</h5>
                          <p className="text-xs text-gray-600 truncate">{type.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  Profile Complete!
                </h4>
                <p className="text-xs text-gray-600 mb-4">
                  Finding personalized grant matches...
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-700 font-medium">Grant Matches Found</span>
                  <span className="text-blue-600 font-bold">127</span>
                </div>
                <div className="mt-2 flex items-center space-x-1">
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs text-gray-600">85%</span>
                </div>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Dashboard</span>
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>

        <motion.div
          className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </div>
  );
}