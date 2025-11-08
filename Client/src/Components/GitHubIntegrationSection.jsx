import React from 'react'
import { Github, Code, Star } from 'lucide-react'
import GitHubProjects from './GitHubProjects'

const GitHubIntegrationSection = ({ register, errors, githubUrl, userPlan, onProjectsChange, targetRole, jobDescription }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Github className="text-indigo-500" size={20} />
        <h3 className="text-lg font-semibold text-white">GitHub Integration</h3>
        {userPlan === 'Starter' && (
          <span className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
            Limited to 3 projects
          </span>
        )}
      </div>
      
      <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-lg p-4 border border-neutral-700">
        <div className="flex items-center gap-2 mb-3">
          <Code className="text-green-400" size={16} />
          <span className="text-white font-medium text-sm">Showcase Your Code</span>
        </div>
        <p className="text-neutral-400 text-sm mb-4">
          Connect your GitHub profile to automatically import your best projects and showcase your technical skills.
          {targetRole && (
            <span className="block mt-2 text-indigo-300">
              ✨ We'll recommend projects that match your target role: <strong>{targetRole}</strong>
            </span>
          )}
        </p>
        
        <div className="space-y-4">
          {/* GitHub URL Input */}
          <div>
            <label className="text-neutral-300 text-sm">GitHub Profile URL</label>
            <input
              {...register('githubUrl')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://github.com/yourusername"
            />
            <p className="text-neutral-500 text-xs mt-1">
              We'll auto-import your relevant projects
            </p>
          </div>
          
          {/* GitHub Projects Component */}
          <GitHubProjects 
            githubUrl={githubUrl}
            userPlan={userPlan}
            onProjectsChange={onProjectsChange}
            targetRole={targetRole}
            jobDescription={jobDescription}
          />
        </div>
      </div>
    </div>
  )
}

export default GitHubIntegrationSection
