import React from 'react'
import { Search, Crown, Zap, Target, TrendingUp, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const JobSearchAgent = () => {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Search className="text-indigo-500" size={24} />
          <h2 className="text-2xl font-bold text-white">Job Search Agent</h2>
          <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
            Beta
          </span>
        </div>
        <p className="text-neutral-400">AI-powered job matching and application assistant</p>
      </div>

      {/* Premium Feature Banner */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Crown className="text-yellow-400 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              Premium Feature
              <Crown className="text-yellow-400" size={18} />
            </h3>
            <p className="text-yellow-200 text-sm mb-4">
              Job Search Agent is a premium feature available only to Plus and Pro plan subscribers. 
              Upgrade now to access AI-powered job matching, automated applications, and personalized recommendations.
            </p>
            <Link to="/pricing">
              <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors">
                Upgrade to Premium
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <Target className="text-indigo-400" size={20} />
            </div>
            <h4 className="text-white font-semibold">Smart Job Matching</h4>
          </div>
          <p className="text-neutral-400 text-sm">
            AI analyzes your resume and matches you with the most relevant job opportunities
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <Zap className="text-indigo-400" size={20} />
            </div>
            <h4 className="text-white font-semibold">Auto Applications</h4>
          </div>
          <p className="text-neutral-400 text-sm">
            Automatically apply to matching jobs with personalized cover letters
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <TrendingUp className="text-indigo-400" size={20} />
            </div>
            <h4 className="text-white font-semibold">Application Tracking</h4>
          </div>
          <p className="text-neutral-400 text-sm">
            Track all your applications and get insights on your job search progress
          </p>
        </div>

        <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-600/20 rounded-lg">
              <AlertCircle className="text-indigo-400" size={20} />
            </div>
            <h4 className="text-white font-semibold">Real-time Alerts</h4>
          </div>
          <p className="text-neutral-400 text-sm">
            Get notified when new jobs matching your profile are posted
          </p>
        </div>
      </div>

      {/* Beta Notice */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="text-blue-400 mt-1" size={20} />
          <div>
            <h4 className="text-white font-semibold mb-1">Beta Program</h4>
            <p className="text-blue-200 text-sm">
              This feature is currently in beta. We're continuously improving it based on user feedback. 
              Some features may change or be unavailable during the beta period.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSearchAgent

