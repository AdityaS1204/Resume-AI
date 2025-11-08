import React from 'react'
import { Mail, FileText, Sparkles } from 'lucide-react'

const CoverLetter = () => {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Mail className="text-indigo-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Cover Letter Builder</h2>
        </div>
        <p className="text-neutral-400">Create personalized cover letters for your job applications</p>
      </div>

      <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Sparkles className="text-indigo-400 mt-1" size={20} />
          <div>
            <h3 className="text-white font-semibold mb-2">AI-Powered Cover Letters</h3>
            <p className="text-indigo-200 text-sm">
              Generate professional cover letters tailored to each job application. Our AI analyzes job descriptions 
              and matches your skills and experience to create compelling cover letters that stand out.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <FileText className="mx-auto text-neutral-500 mb-4" size={48} />
        <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
        <p className="text-neutral-400 mb-6">
          The cover letter builder is currently under development. Check back soon!
        </p>
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
          Get Notified
        </button>
      </div>
    </div>
  )
}

export default CoverLetter

