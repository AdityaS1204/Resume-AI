import React, { useState } from 'react'
import { X, Sparkles, Loader2, Send } from 'lucide-react'

const AIEditModal = ({ isOpen, onClose, resumeData, onResumeUpdate, isProcessing }) => {
  const [command, setCommand] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!command.trim()) return

    setIsSubmitting(true)
    try {
      await onResumeUpdate(command.trim())
      setCommand('')
    } catch (error) {
      console.error('Failed to update resume:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting && !isProcessing) {
      setCommand('')
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 w-[90vw] max-w-2xl mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-700">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-indigo-500" size={20} />
              <h2 className="text-xl font-semibold text-white">AI Resume Editor</h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting || isProcessing}
            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <X size={20} className="text-neutral-400 group-hover:text-white" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-neutral-300 text-sm mb-2">
              Describe the changes you want to make to your resume. The AI will update it accordingly.
            </p>
            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3 mb-4">
              <p className="text-indigo-300 text-xs">
                <strong>Examples:</strong> "Make the summary more concise", "Add more technical details to experience", 
                "Update skills section with React and TypeScript", "Improve the professional summary"
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-neutral-300 text-sm font-medium mb-2">
                Edit Command
              </label>
              <textarea
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="e.g., Make the professional summary more impactful and highlight leadership experience..."
                className="w-full h-32 px-4 py-3 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 resize-none placeholder-neutral-500"
                disabled={isSubmitting || isProcessing}
                required
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting || isProcessing}
                className="px-4 py-2 bg-neutral-700 hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!command.trim() || isSubmitting || isProcessing}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                {isSubmitting || isProcessing ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Apply Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AIEditModal

