import { TrendingUp, Users, Briefcase } from 'lucide-react';

export function MarketNeedsPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why STEM Skills Matter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the gap between traditional education and industry demand
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Blocks */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Growing Market Gap
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By 2030, the tech industry will face a shortage of 85 million skilled workers. 
                    Traditional education systems aren't keeping pace with rapidly evolving technology demands.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Skills Demand Rising
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI, IoT, and robotics roles are growing 3x faster than the workforce can adapt. 
                    Employers seek candidates with hands-on experience and industry-ready skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Industry Transformation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    70% of jobs will require advanced tech skills by 2025. Companies are investing 
                    billions in automation, AI, and smart systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
              Industry Demand vs. Traditional Output
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">AI & Machine Learning</span>
                  <span className="text-sm font-semibold text-blue-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Robotics & Automation</span>
                  <span className="text-sm font-semibold text-purple-600">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">IoT Development</span>
                  <span className="text-sm font-semibold text-green-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Data Science</span>
                  <span className="text-sm font-semibold text-indigo-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Cybersecurity</span>
                  <span className="text-sm font-semibold text-red-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> Percentages represent the gap between industry demand and current traditional education output
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
