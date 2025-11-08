import React, { useState } from 'react'
import { FileText, Download, Edit, Trash2, Calendar, Eye } from 'lucide-react'

const MyResumes = () => {
  // Mock data - in production, fetch from API
  const [resumes, setResumes] = useState([
    {
      id: 1,
      title: 'Software Engineer Resume',
      template: 'Modern',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20',
      preview: 'Software Engineer with 5+ years of experience...'
    },
    {
      id: 2,
      title: 'Full Stack Developer Resume',
      template: 'Classic',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-18',
      preview: 'Full Stack Developer specializing in React and Node.js...'
    },
    {
      id: 3,
      title: 'Senior Developer Resume',
      template: 'Creative',
      createdAt: '2024-01-05',
      updatedAt: '2024-01-12',
      preview: 'Senior Developer with expertise in cloud architecture...'
    }
  ])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this resume?')) {
      setResumes(resumes.filter(r => r.id !== id))
    }
  }

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">My Resumes</h2>
        <p className="text-neutral-400">Manage and view all your created resumes</p>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="mx-auto text-neutral-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold text-white mb-2">No resumes yet</h3>
          <p className="text-neutral-400 mb-6">Create your first resume to get started</p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            Create Resume
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700 hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{resume.title}</h3>
                  <p className="text-sm text-neutral-400 mb-2">Template: {resume.template}</p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Calendar size={14} />
                    <span>Updated {new Date(resume.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-300 mb-4 line-clamp-2">{resume.preview}</p>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors">
                  <Eye size={16} />
                  View
                </button>
                <button className="px-3 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(resume.id)}
                  className="px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyResumes

