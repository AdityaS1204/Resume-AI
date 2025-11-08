import React from 'react'
import { User, Mail, Calendar, Shield } from 'lucide-react'
import { getCurrentUser } from '../../utils/auth'

const Account = () => {
  const user = getCurrentUser() || {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Starter',
    joinedDate: '2024-01-15'
  }

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Account Settings</h2>
        <p className="text-neutral-400">Manage your account information and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-neutral-800/50 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{user.name}</h3>
              <p className="text-neutral-400">{user.email}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-lg">
              <Mail className="text-indigo-500" size={20} />
              <div>
                <p className="text-neutral-400 text-sm">Email</p>
                <p className="text-white">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-lg">
              <Calendar className="text-indigo-500" size={20} />
              <div>
                <p className="text-neutral-400 text-sm">Member Since</p>
                <p className="text-white">{new Date(user.joinedDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-lg">
              <Shield className="text-indigo-500" size={20} />
              <div>
                <p className="text-neutral-400 text-sm">Plan</p>
                <p className="text-white">{user.plan}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-neutral-800/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-neutral-400 text-sm">Receive updates about your resumes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg">
              <div>
                <p className="text-white font-medium">Marketing Emails</p>
                <p className="text-neutral-400 text-sm">Receive tips and product updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account

