import React, { useState, useEffect } from 'react'
import { Navbar, ResumeEditor, ResumeModal, ResumeTemplates } from '../Components'
import Sidebar from '../Components/Sidebar'
import AIEditModal from '../Components/AIEditModal'
import PersonalInfoSection from '../Components/PersonalInfoSection'
import ProfessionalDetailsSection from '../Components/ProfessionalDetailsSection'
import GitHubIntegrationSection from '../Components/GitHubIntegrationSection'
import JobDescriptionSection from '../Components/JobDescriptionSection'
import ProgressIndicator from '../Components/ProgressIndicator'
import Account from './Dashboard/Account'
import MyResumes from './Dashboard/MyResumes'
import CoverLetter from './Dashboard/CoverLetter'
import JobSearchAgent from './Dashboard/JobSearchAgent'
import { Loader2, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'
import { isIndianUser } from '../utils/pricingUtils'
import { getPricingForUser } from '../config/pricing'

const Builder = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pricingData, setPricingData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [resumeData, setResumeData] = useState(null)
  const [selectedProjects, setSelectedProjects] = useState([])
  const [showPreview, setShowPreview] = useState(false)
  const [userPlan, setUserPlan] = useState('Starter') // Default to free plan
  const [isEditing, setIsEditing] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showAIEditModal, setShowAIEditModal] = useState(false)
  const [isProcessingAI, setIsProcessingAI] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const [currentStep, setCurrentStep] = useState(1)
  const [activeView, setActiveView] = useState(searchParams.get('view') || 'builder')
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())
  
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm()
  const githubUrl = watch('githubUrl')
  
  const steps = [
    { title: 'Template', component: 'template' },
    { title: 'Personal Info', component: 'personal' },
    { title: 'Professional', component: 'professional' },
    { title: 'Job Description', component: 'job' },
    { title: 'GitHub', component: 'github' },
    { title: 'Generate', component: 'generate' }
  ]

  useEffect(() => {
    detectUserPlan()
    // Update active view when URL params change
    const view = searchParams.get('view') || 'builder'
    setActiveView(view)
    
    // Check login status
    const checkLogin = () => {
      setLoggedIn(isLoggedIn())
    }
    
    checkLogin()
    
    // Listen for storage changes (for test mode)
    const handleStorageChange = (e) => {
      if (e.key === 'testMode' || e.key === 'token' || e.key === 'user') {
        checkLogin()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Also check periodically for same-tab changes
    const interval = setInterval(checkLogin, 500)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [searchParams])

  const detectUserPlan = async () => {
    try {
      const isIndia = await isIndianUser()
      const pricing = getPricingForUser(isIndia)
      setPricingData(pricing)
      // In real app, get user's actual plan from auth context
      setUserPlan('Starter') // For now, default to free
    } catch (error) {
      console.error('Failed to load pricing:', error)
      setUserPlan('Starter')
    } finally {
      setLoading(false)
    }
  }

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await trigger(fieldsToValidate)
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }
  
  const getFieldsForStep = (step) => {
    switch (step) {
      case 2: return ['firstName', 'lastName', 'email', 'phone', 'location']
      case 3: return ['profession', 'skills', 'workExperience', 'education']
      case 4: return ['targetRole', 'jobDescription']
      case 5: return ['githubUrl']
      default: return []
    }
  }
  
  const onSubmit = async (data) => {
    setIsGenerating(true)
    try {
      // Simulate AI resume generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const generatedResume = {
        personalInfo: {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          location: data.location
        },
        summary: `Experienced ${data.profession} with expertise in ${data.skills}. Passionate about delivering high-quality solutions and driving innovation.`,
        experience: data.workExperience,
        education: data.education,
        skills: data.skills,
        projects: selectedProjects,
        generatedAt: new Date().toISOString()
      }
      
      setResumeData(generatedResume)
      setShowPreview(true)
      setCurrentStep(6) // Move to final step
    } catch (error) {
      console.error('Resume generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleProjectsChange = (projects) => {
    setSelectedProjects(projects)
  }

  const handleDownloadPDF = () => {
    // Implement PDF generation
    alert('PDF download feature coming soon!')
  }

  const handleSaveDraft = () => {
    // Implement save functionality
    alert('Save draft feature coming soon!')
  }

  const handleToggleEdit = () => {
    setShowAIEditModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleCloseAIEditModal = () => {
    setShowAIEditModal(false)
  }

  const handleAIResumeUpdate = async (command) => {
    setIsProcessingAI(true)
    try {
      const response = await fetch('http://localhost:5000/api/resume/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeData,
          command,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update resume')
      }

      const updatedResume = await response.json()
      setResumeData(updatedResume.updatedResume)
      setShowAIEditModal(false)
    } catch (error) {
      console.error('Error updating resume:', error)
      alert('Failed to update resume. Please try again.')
    } finally {
      setIsProcessingAI(false)
    }
  }

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template)
  }

  const handleViewChange = (view) => {
    setActiveView(view)
    if (view === 'builder') {
      setSearchParams({})
    } else {
      setSearchParams({ view })
    }
  }

  const renderDashboardView = () => {
    switch (activeView) {
      case 'account':
        return <Account />
      case 'resumes':
        return <MyResumes />
      case 'cover-letter':
        return <CoverLetter />
      case 'job-search':
        return <JobSearchAgent />
      case 'builder':
      default:
        return renderBuilderContent()
    }
  }

  const renderBuilderContent = () => {
    return (
      <>
        {/* Progress Indicator */}
        <ProgressIndicator 
          currentStep={currentStep} 
          totalSteps={steps.length} 
          steps={steps}
        />
        
        {/* Step Content */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent()}
        </form>
        
        {/* Navigation Buttons */}
        {currentStep < 6 && (
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 disabled:bg-neutral-800 disabled:text-neutral-500 text-white rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Previous
            </button>
            
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        )}
        
        {/* Resume Preview - Only show after generation */}
        {showPreview && resumeData && (
          <div className="mt-8">
            <ResumeEditor 
              resumeData={resumeData}
              isEditing={false}
              onToggleEdit={handleToggleEdit}
              onSave={handleSaveDraft}
              onDownload={handleDownloadPDF}
              selectedTemplate={selectedTemplate}
            />
          </div>
        )}
      </>
    )
  }


  if (loading) {
    return (
      <section className="min-h-screen w-full bg-[#03070F] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-indigo-500" size={40} />
          <p className="text-white text-lg">Loading resume builder...</p>
        </div>
      </section>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <ResumeTemplates 
              selectedTemplate={selectedTemplate}
              onTemplateSelect={handleTemplateSelect}
            />
          </div>
        )
      case 2:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <PersonalInfoSection register={register} errors={errors} watch={watch} />
          </div>
        )
      case 3:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <ProfessionalDetailsSection register={register} errors={errors} />
          </div>
        )
      case 4:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <JobDescriptionSection register={register} errors={errors} watch={watch} />
          </div>
        )
      case 5:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <GitHubIntegrationSection 
              register={register} 
              errors={errors} 
              githubUrl={githubUrl}
              userPlan={userPlan}
              onProjectsChange={handleProjectsChange}
              targetRole={watch('targetRole')}
              jobDescription={watch('jobDescription')}
            />
          </div>
        )
      case 6:
        return (
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-indigo-500" size={24} />
                <h3 className="text-xl font-semibold text-white">Generate Your Resume</h3>
              </div>
              <p className="text-neutral-400 mb-6">
                Review your information and generate your ATS-optimized resume.
              </p>
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isGenerating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-neutral-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Generating Your Resume...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Generate ATS-Optimized Resume
                  </>
                )}
              </button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  if (loggedIn) {
    // Dashboard view with sidebar
    return (
      <section className="min-h-screen w-full bg-[#03070F] flex overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={handleViewChange} />
        
        <div className="flex-1 lg:ml-64 overflow-y-auto h-screen">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            {renderDashboardView()}
          </div>
        </div>

        {/* AI Edit Modal */}
        <AIEditModal
          isOpen={showAIEditModal}
          onClose={handleCloseAIEditModal}
          resumeData={resumeData}
          onResumeUpdate={handleAIResumeUpdate}
          isProcessing={isProcessingAI}
        />

        {/* Form Edit Modal */}
        <ResumeModal
          isOpen={showModal}
          onClose={handleCloseModal}
          resumeData={resumeData}
          onSave={handleSaveDraft}
          onDownload={handleDownloadPDF}
          selectedTemplate={selectedTemplate}
          onSubmit={onSubmit}
          isGenerating={isGenerating}
          userPlan={userPlan}
          onProjectsChange={handleProjectsChange}
        />
      </section>
    )
  }

  // Regular view without sidebar (for non-logged in users)
  return (
    <section className="min-h-screen w-full bg-[#03070F]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {renderBuilderContent()}
      </div>

      {/* AI Edit Modal */}
      <AIEditModal
        isOpen={showAIEditModal}
        onClose={handleCloseAIEditModal}
        resumeData={resumeData}
        onResumeUpdate={handleAIResumeUpdate}
        isProcessing={isProcessingAI}
      />

      {/* Form Edit Modal */}
      <ResumeModal
        isOpen={showModal}
        onClose={handleCloseModal}
        resumeData={resumeData}
        onSave={handleSaveDraft}
        onDownload={handleDownloadPDF}
        selectedTemplate={selectedTemplate}
        onSubmit={onSubmit}
        isGenerating={isGenerating}
        userPlan={userPlan}
        onProjectsChange={handleProjectsChange}
      />
    </section>
  )
}

export default Builder