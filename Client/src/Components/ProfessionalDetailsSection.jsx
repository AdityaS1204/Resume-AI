import React from 'react'
import { Briefcase, GraduationCap, Code } from 'lucide-react'

const ProfessionalDetailsSection = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="text-indigo-500" size={20} />
        <h3 className="text-lg font-semibold text-white">Professional Details</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Profession */}
          <div>
            <label className="text-neutral-300 text-sm">Current Profession</label>
            <select
              {...register('profession', { required: 'Profession is required' })}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your profession</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full-Stack Developer">Full-Stack Developer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Mobile Developer">Mobile Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="QA Engineer">QA Engineer</option>
              <option value="System Administrator">System Administrator</option>
              <option value="Machine Learning Engineer">Machine Learning Engineer</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="Security Engineer">Security Engineer</option>
              <option value="Other">Other</option>
            </select>
            {errors.profession && <p className="text-red-400 text-xs mt-1">{errors.profession.message}</p>}
          </div>

          {/* Skills */}
          <div>
            <label className="text-neutral-300 text-sm">Technical Skills</label>
            <textarea
              {...register('skills', { required: 'Skills are required' })}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
              placeholder="JavaScript, React, Node.js, Python, AWS..."
            />
            {errors.skills && <p className="text-red-400 text-xs mt-1">{errors.skills.message}</p>}
            <p className="text-neutral-500 text-xs mt-1">
              Separate skills with commas
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <label className="text-neutral-300 text-sm">Work Experience</label>
            <textarea
              {...register('workExperience', { required: 'Work experience is required' })}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
              placeholder="Describe your professional experience, achievements, and responsibilities..."
            />
            {errors.workExperience && <p className="text-red-400 text-xs mt-1">{errors.workExperience.message}</p>}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Education */}
          <div>
            <label className="text-neutral-300 text-sm">Education</label>
            <textarea
              {...register('education', { required: 'Education is required' })}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
              placeholder="Bachelor's in Computer Science, University Name, 2020..."
            />
            {errors.education && <p className="text-red-400 text-xs mt-1">{errors.education.message}</p>}
          </div>

          {/* Additional Skills */}
          <div>
            <label className="text-neutral-300 text-sm">Additional Skills</label>
            <textarea
              {...register('additionalSkills')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-20 resize-none"
              placeholder="Leadership, Project Management, Agile/Scrum..."
            />
            <p className="text-neutral-500 text-xs mt-1">
              Soft skills, methodologies, certifications
            </p>
          </div>

          {/* Achievements */}
          <div>
            <label className="text-neutral-300 text-sm">Key Achievements</label>
            <textarea
              {...register('achievements')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-20 resize-none"
              placeholder="Led team of 5 developers, Increased performance by 40%..."
            />
            <p className="text-neutral-500 text-xs mt-1">
              Quantifiable achievements and accomplishments
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalDetailsSection
