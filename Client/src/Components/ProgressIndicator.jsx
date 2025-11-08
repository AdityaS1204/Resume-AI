import React from 'react'
import { Check, ChevronRight } from 'lucide-react'

const ProgressIndicator = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">Step {currentStep} of {totalSteps}</span>
          <span className="text-neutral-400 text-sm">{steps[currentStep - 1]?.title}</span>
        </div>
        <div className="text-neutral-500 text-sm">
          {Math.round((currentStep / totalSteps) * 100)}% Complete
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`flex items-center gap-2 ${
                index < currentStep ? 'text-indigo-400' : 
                index === currentStep - 1 ? 'text-indigo-400' : 'text-neutral-500'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index < currentStep ? 'bg-indigo-500' : 
                  index === currentStep - 1 ? 'bg-indigo-500' : 'bg-neutral-700'
                }`}>
                  {index < currentStep ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <span className="text-xs font-semibold">{index + 1}</span>
                  )}
                </div>
                <span className="text-sm font-medium hidden sm:block">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight size={16} className="text-neutral-500" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
