import { TrendingUp, Zap, Globe } from 'lucide-react';

export function IndustryTrends() {
  return (
    <section className="py-12 bg-white rounded-xl shadow-lg mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Trends</h2>
          <p className="text-lg text-gray-600">
            Understanding the technological landscape and future opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Exponential Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  The global AI market is projected to reach $1.8 trillion by 2030, with robotics and IoT following closely behind. 
                  Companies across all sectors are investing heavily in automation and intelligent systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  New technologies emerge every quarter, creating constant demand for upskilled professionals. 
                  The pace of innovation requires continuous learning and adaptation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Remote work and global collaboration have opened unprecedented opportunities for skilled tech professionals. 
                  Companies worldwide are competing for top STEM talent.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Projected Job Growth (2024-2030)</h3>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">AI/ML Engineers</span>
                  <span className="text-sm font-bold text-blue-600">+74%</span>
                </div>
                <div className="h-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-end pr-2" style={{ width: '74%' }}>
                    <span className="text-xs text-white font-semibold">High Demand</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Robotics Specialists</span>
                  <span className="text-sm font-bold text-purple-600">+68%</span>
                </div>
                <div className="h-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-end pr-2" style={{ width: '68%' }}>
                    <span className="text-xs text-white font-semibold">Rapidly Growing</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">IoT Developers</span>
                  <span className="text-sm font-bold text-green-600">+65%</span>
                </div>
                <div className="h-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-end pr-2" style={{ width: '65%' }}>
                    <span className="text-xs text-white font-semibold">Strong Growth</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Data Scientists</span>
                  <span className="text-sm font-bold text-indigo-600">+71%</span>
                </div>
                <div className="h-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-end pr-2" style={{ width: '71%' }}>
                    <span className="text-xs text-white font-semibold">High Demand</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Cybersecurity Experts</span>
                  <span className="text-sm font-bold text-red-600">+82%</span>
                </div>
                <div className="h-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-end pr-2" style={{ width: '82%' }}>
                    <span className="text-xs text-white font-semibold">Critical Need</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
