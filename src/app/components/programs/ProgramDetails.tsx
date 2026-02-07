import { useState } from 'react';
import { ChevronRight, Download, Clock, BarChart, Users, Award } from 'lucide-react';

export function ProgramDetails() {
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = ['overview', 'curriculum', 'tools', 'career'];

  const tabLabels = {
    overview: 'Overview',
    curriculum: 'Curriculum',
    tools: 'Tools & Tech',
    career: 'Career Path',
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <a href="#" className="hover:text-blue-600">Home</a>
          <ChevronRight size={16} />
          <a href="#" className="hover:text-blue-600">Programs</a>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">AI & Machine Learning</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              Beginner Friendly
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI & Machine Learning Fundamentals
          </h1>
          <p className="text-lg text-gray-600">
            Build intelligent systems and master the fundamentals of artificial intelligence
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Clock size={20} />
              <span className="text-sm font-medium">Duration</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">12 Weeks</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <BarChart size={20} />
              <span className="text-sm font-medium">Level</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">Beginner</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Users size={20} />
              <span className="text-sm font-medium">Enrolled</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <div className="flex items-center gap-2 text-orange-600 mb-2">
              <Award size={20} />
              <span className="text-sm font-medium">Certificate</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">Yes</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b-2 border-gray-200 mb-8">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tabLabels[tab as keyof typeof tabLabels]}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This comprehensive program introduces you to the exciting world of Artificial Intelligence and Machine Learning. 
                  You'll learn the fundamental concepts, algorithms, and techniques used to build intelligent systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through hands-on projects and real-world applications, you'll gain practical experience in developing 
                  AI solutions that can recognize patterns, make predictions, and solve complex problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Introduction to AI and ML concepts',
                    'Python programming for data science',
                    'Supervised and unsupervised learning',
                    'Neural networks and deep learning basics',
                    'Natural language processing fundamentals',
                    'Computer vision applications',
                    'Model training and evaluation',
                    'Real-world AI project development',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Curriculum</h3>
              {[
                { week: '1-2', title: 'Introduction to AI & Python Basics', lessons: 8 },
                { week: '3-4', title: 'Data Processing & Visualization', lessons: 10 },
                { week: '5-6', title: 'Supervised Learning Algorithms', lessons: 12 },
                { week: '7-8', title: 'Unsupervised Learning & Clustering', lessons: 10 },
                { week: '9-10', title: 'Neural Networks & Deep Learning', lessons: 14 },
                { week: '11-12', title: 'Capstone Project & Deployment', lessons: 6 },
              ].map((module, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-blue-600 font-medium mb-1">Week {module.week}</div>
                      <div className="font-semibold text-gray-900">{module.title}</div>
                    </div>
                    <div className="text-sm text-gray-500">{module.lessons} lessons</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Keras', 'OpenCV'].map((tool, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-medium text-gray-700">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { role: 'ML Engineer', salary: '$95k - $150k' },
                  { role: 'Data Scientist', salary: '$90k - $140k' },
                  { role: 'AI Research Scientist', salary: '$100k - $180k' },
                  { role: 'Computer Vision Engineer', salary: '$95k - $160k' },
                ].map((career, i) => (
                  <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 mb-1">{career.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{career.salary}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-10 py-4 rounded-lg font-semibold hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30 transition-all shadow-lg">
            Enroll Now
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <Download size={20} />
            Download Syllabus
          </button>
        </div>
      </div>
    </section>
  );
}
