import React from 'react'
import { User, Mail, Phone, MapPin, Link, Github, Linkedin, Code, Globe, MessageSquare } from 'lucide-react'

const PersonalInfoSection = ({ register, errors, watch }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="text-indigo-500" size={20} />
        <h3 className="text-lg font-semibold text-white">Personal Information</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="text-neutral-300 text-sm">First Name</label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="text-neutral-300 text-sm">Last Name</label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-neutral-300 text-sm">Email Address</label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="john.doe@email.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="text-neutral-300 text-sm">Phone Number</label>
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="text-neutral-300 text-sm">Location</label>
          <input
            {...register('location', { required: 'Location is required' })}
            className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="San Francisco, CA"
          />
          {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
        </div>
      </div>

      {/* Professional Links Section */}
      <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-lg p-4 border border-neutral-700">
        <div className="flex items-center gap-2 mb-4">
          <Link className="text-indigo-500" size={20} />
          <h4 className="text-white font-semibold">Professional Links</h4>
        </div>
        <p className="text-neutral-400 text-sm mb-4">
          Add your professional profiles to showcase your work and achievements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LinkedIn */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <Linkedin size={14} />
              LinkedIn Profile
            </label>
            <input
              {...register('linkedin')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://linkedin.com/in/yourname"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <Github size={14} />
              GitHub Profile
            </label>
            <input
              {...register('github')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://github.com/yourname"
            />
          </div>

          {/* LeetCode */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <Code size={14} />
              LeetCode Profile
            </label>
            <input
              {...register('leetcode')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://leetcode.com/yourname"
            />
          </div>

          {/* Portfolio Website */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <Globe size={14} />
              Portfolio Website
            </label>
            <input
              {...register('portfolio')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://yourname.dev"
            />
          </div>

          {/* Stack Overflow */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <MessageSquare size={14} />
              Stack Overflow
            </label>
            <input
              {...register('stackoverflow')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://stackoverflow.com/users/yourid"
            />
          </div>

          {/* Additional Platform */}
          <div>
            <label className="text-neutral-300 text-sm flex items-center gap-2">
              <Link size={14} />
              Other Platform
            </label>
            <input
              {...register('otherPlatform')}
              className="w-full mt-1 px-4 py-2 bg-neutral-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="HackerRank, CodePen, etc."
            />
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-300 text-sm">
            <Link size={14} />
            <span>These links will be included in your resume to showcase your professional presence and achievements.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoSection
