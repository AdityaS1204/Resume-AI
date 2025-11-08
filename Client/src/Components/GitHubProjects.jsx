import React, { useState, useEffect } from 'react'
import { Github, CheckCircle, Star, Code } from 'lucide-react'

const GitHubProjects = ({ githubUrl, userPlan, onProjectsChange, targetRole, jobDescription }) => {
  const [githubProjects, setGithubProjects] = useState([])
  const [selectedProjects, setSelectedProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (githubUrl) {
      fetchGitHubProjects(githubUrl)
    } else {
      setGithubProjects([])
      setSelectedProjects([])
      setError(null)
    }
  }, [githubUrl])

  // Re-analyze projects when target role or job description changes
  useEffect(() => {
    if (githubProjects.length > 0 && (targetRole || jobDescription)) {
      const projectsWithRecommendations = addRecommendations(githubProjects, targetRole, jobDescription)
      setGithubProjects(projectsWithRecommendations)
    }
  }, [targetRole, jobDescription])

  // Smart recommendation algorithm
  const addRecommendations = (projects, role, jobDesc) => {
    if (!role && !jobDesc) return projects

    return projects.map(project => {
      let relevanceScore = 0
      let recommendationReasons = []

      // Role-based scoring
      if (role) {
        const roleKeywords = getRoleKeywords(role)
        const projectText = `${project.name} ${project.description} ${project.language}`.toLowerCase()
        
        roleKeywords.forEach(keyword => {
          if (projectText.includes(keyword.toLowerCase())) {
            relevanceScore += 3
            recommendationReasons.push(`Matches ${role} requirements`)
          }
        })
      }

      // Job description keyword matching
      if (jobDesc) {
        const jobKeywords = extractKeywords(jobDesc)
        const projectKeywords = extractKeywords(`${project.description} ${project.name}`)
        
        const matches = jobKeywords.filter(keyword => 
          projectKeywords.some(projKeyword => 
            projKeyword.toLowerCase().includes(keyword.toLowerCase()) ||
            keyword.toLowerCase().includes(projKeyword.toLowerCase())
          )
        )
        
        relevanceScore += matches.length * 2
        if (matches.length > 0) {
          recommendationReasons.push(`Contains job keywords: ${matches.slice(0, 2).join(', ')}`)
        }
      }

      // Language-specific scoring
      if (role && project.language) {
        const languageScore = getLanguageRelevance(role, project.language)
        relevanceScore += languageScore
        if (languageScore > 0) {
          recommendationReasons.push(`${project.language} is relevant for ${role}`)
        }
      }

      // Popularity boost
      if (project.stars > 10) {
        relevanceScore += 1
        recommendationReasons.push('Popular project')
      }

      return {
        ...project,
        relevanceScore,
        isRecommended: relevanceScore >= 4,
        recommendationReasons: recommendationReasons.slice(0, 2) // Limit to 2 reasons
      }
    }).sort((a, b) => {
      // Sort by recommendation status first, then by relevance score
      if (a.isRecommended && !b.isRecommended) return -1
      if (!a.isRecommended && b.isRecommended) return 1
      return b.relevanceScore - a.relevanceScore
    })
  }

  // Helper functions
  const getRoleKeywords = (role) => {
    const roleMap = {
      'Frontend Developer': ['react', 'vue', 'angular', 'javascript', 'typescript', 'css', 'html', 'ui', 'frontend', 'web'],
      'Backend Developer': ['node', 'python', 'java', 'api', 'database', 'server', 'backend', 'express', 'django', 'spring'],
      'Full-Stack Developer': ['react', 'node', 'javascript', 'typescript', 'api', 'database', 'fullstack', 'mern', 'mean'],
      'DevOps Engineer': ['docker', 'kubernetes', 'aws', 'azure', 'ci/cd', 'terraform', 'jenkins', 'deployment', 'infrastructure'],
      'Data Scientist': ['python', 'machine learning', 'data', 'analysis', 'pandas', 'numpy', 'tensorflow', 'pytorch', 'jupyter'],
      'Mobile Developer': ['react native', 'flutter', 'ios', 'android', 'mobile', 'swift', 'kotlin', 'xamarin'],
      'UI/UX Designer': ['design', 'ui', 'ux', 'figma', 'sketch', 'prototype', 'user experience', 'interface'],
      'Product Manager': ['product', 'management', 'strategy', 'analytics', 'user research', 'roadmap', 'agile'],
      'QA Engineer': ['testing', 'automation', 'selenium', 'cypress', 'jest', 'quality', 'test', 'qa'],
      'System Administrator': ['linux', 'server', 'administration', 'security', 'monitoring', 'backup', 'system'],
      'Machine Learning Engineer': ['machine learning', 'ai', 'python', 'tensorflow', 'pytorch', 'model', 'algorithm'],
      'Cloud Engineer': ['aws', 'azure', 'gcp', 'cloud', 'terraform', 'kubernetes', 'docker', 'infrastructure'],
      'Security Engineer': ['security', 'cybersecurity', 'penetration', 'vulnerability', 'encryption', 'firewall']
    }
    return roleMap[role] || []
  }

  const getLanguageRelevance = (role, language) => {
    const languageMap = {
      'Frontend Developer': { 'javascript': 3, 'typescript': 3, 'css': 2, 'html': 2 },
      'Backend Developer': { 'python': 3, 'java': 3, 'javascript': 2, 'go': 2, 'c#': 2 },
      'Full-Stack Developer': { 'javascript': 3, 'typescript': 3, 'python': 2, 'java': 2 },
      'DevOps Engineer': { 'python': 2, 'go': 2, 'shell': 2, 'yaml': 2 },
      'Data Scientist': { 'python': 3, 'r': 2, 'sql': 2 },
      'Mobile Developer': { 'javascript': 2, 'swift': 3, 'kotlin': 3, 'dart': 2 },
      'Machine Learning Engineer': { 'python': 3, 'r': 2, 'julia': 2 },
      'Cloud Engineer': { 'python': 2, 'go': 2, 'terraform': 3, 'yaml': 2 }
    }
    return languageMap[role]?.[language.toLowerCase()] || 0
  }

  const extractKeywords = (text) => {
    if (!text) return []
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .filter(word => !['this', 'that', 'with', 'from', 'they', 'been', 'have', 'were', 'said', 'each', 'which', 'their', 'time', 'will', 'about', 'would', 'there', 'could', 'other'].includes(word))
  }

  const fetchGitHubProjects = async (url) => {
    if (!url) return
    
    setLoading(true)
    try {
      const username = url.replace(/.*github\.com\/([^/]+).*/, '$1')
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=updated`)
      const repos = await response.json()
      
      const projects = repos
        .filter(repo => !repo.fork)
        .slice(0, userPlan === 'Starter' ? 3 : 10) // Limit based on plan
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description',
          url: repo.html_url,
          stars: repo.stargazers_count,
          language: repo.language,
          updated: repo.updated_at
        }))
      
      setGithubProjects(projects)
    } catch (error) {
      console.error('Failed to fetch GitHub projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleProjectSelection = (project) => {
    if (userPlan === 'Starter' && selectedProjects.length >= 3 && !selectedProjects.find(p => p.id === project.id)) {
      alert('Free plan limited to 3 projects. Upgrade to Plus for unlimited projects.')
      return
    }
    
    const newSelection = selectedProjects.find(p => p.id === project.id) 
      ? selectedProjects.filter(p => p.id !== project.id)
      : [...selectedProjects, project]
    
    setSelectedProjects(newSelection)
    onProjectsChange(newSelection)
  }

  if (!githubUrl) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Github className="text-indigo-500" size={20} />
        <h3 className="text-white text-lg font-semibold">GitHub Integration</h3>
        {userPlan === 'Starter' && (
          <span className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
            Limited to 3 projects
          </span>
        )}
      </div>
      
      <div>
        <label className="text-neutral-300 text-sm">GitHub Profile URL</label>
        <input
          value={githubUrl}
          readOnly
          className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none"
          placeholder="https://github.com/yourusername"
        />
        <p className="text-neutral-500 text-xs mt-1">
          We'll auto-import your relevant projects
        </p>
      </div>

      {/* GitHub Projects */}
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
          <span className="ml-2 text-neutral-400">Fetching projects...</span>
        </div>
      ) : githubProjects.length > 0 ? (
        <div className="space-y-3">
          <h4 className="text-white font-medium">Select Projects to Include</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {githubProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => toggleProjectSelection(project)}
                className={`p-3 rounded-lg border cursor-pointer transition-all relative ${
                  selectedProjects.find(p => p.id === project.id)
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : project.isRecommended
                    ? 'border-green-500/50 bg-green-500/5 hover:border-green-500/70'
                    : 'border-neutral-600 bg-neutral-800/50 hover:border-neutral-500'
                }`}
              >
                {/* Recommendation Badge */}
                {project.isRecommended && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} />
                    Recommended
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-white font-medium">{project.name}</h5>
                      {project.language && (
                        <span className="flex items-center gap-1 text-xs text-neutral-400 bg-neutral-700 px-2 py-1 rounded">
                          <Code size={12} />
                          {project.language}
                        </span>
                      )}
                    </div>
                    <p className="text-neutral-400 text-sm mb-2">{project.description}</p>
                    
                    {/* Recommendation Reasons */}
                    {project.isRecommended && project.recommendationReasons && (
                      <div className="mb-2">
                        {project.recommendationReasons.map((reason, index) => (
                          <div key={index} className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded mb-1 inline-block mr-2">
                            {reason}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Star size={12} />
                        {project.stars} stars
                      </span>
                      <span>
                        Updated {new Date(project.updated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  {selectedProjects.find(p => p.id === project.id) && (
                    <CheckCircle className="text-indigo-500 flex-shrink-0" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-xs">
            {selectedProjects.length} of {githubProjects.length} projects selected
            {userPlan === 'Starter' && ` (${3 - selectedProjects.length} remaining)`}
          </p>
        </div>
      ) : githubUrl && !loading ? (
        <div className="text-center py-4">
          <p className="text-neutral-400">No projects found for this GitHub profile.</p>
        </div>
      ) : null}
    </div>
  )
}

export default GitHubProjects
