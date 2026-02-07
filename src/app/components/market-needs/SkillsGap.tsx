import { X, Check } from 'lucide-react';

export function SkillsGap() {
  const comparisons = [
    {
      category: 'Technical Skills',
      traditional: 'Theory-focused with limited practical application',
      industry: 'Hands-on experience with current technologies required',
      veriton: 'Project-based learning with industry-standard tools',
    },
    {
      category: 'Problem Solving',
      traditional: 'Textbook problems with known solutions',
      industry: 'Complex, open-ended real-world challenges',
      veriton: 'Real industry cases with mentor guidance',
    },
    {
      category: 'Tools & Technologies',
      traditional: 'Outdated software and frameworks',
      industry: 'Latest tools, frameworks, and best practices',
      veriton: 'Current industry stack with regular updates',
    },
    {
      category: 'Project Experience',
      traditional: 'Individual academic assignments',
      industry: 'Team collaboration on production systems',
      veriton: 'Team projects mirroring industry workflows',
    },
    {
      category: 'Industry Relevance',
      traditional: 'Generic curriculum not aligned with market',
      industry: 'Skills that directly address business needs',
      veriton: 'Co-designed with industry partners',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bridging the Skills Gap</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Veriton addresses the disconnect between education and industry
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="p-6 border-r border-gray-700">
              <h3 className="font-semibold text-lg">Category</h3>
            </div>
            <div className="p-6 border-r border-gray-700 bg-red-900/20">
              <div className="flex items-center gap-2">
                <X size={20} className="text-red-400" />
                <h3 className="font-semibold text-lg">Traditional Education</h3>
              </div>
            </div>
            <div className="p-6 border-r border-gray-700 bg-blue-900/20">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-blue-400" />
                <h3 className="font-semibold text-lg">Industry Demand</h3>
              </div>
            </div>
            <div className="p-6 bg-green-900/20">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-green-400" />
                <h3 className="font-semibold text-lg">Veriton Approach</h3>
              </div>
            </div>
          </div>

          {/* Data Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-4 ${
                index < comparisons.length - 1 ? 'border-b border-gray-200' : ''
              } hover:bg-gray-50 transition-colors`}
            >
              <div className="p-6 border-r border-gray-200 bg-gray-50 font-semibold text-gray-900">
                {row.category}
              </div>
              <div className="p-6 border-r border-gray-200">
                <p className="text-gray-600 text-sm leading-relaxed">{row.traditional}</p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{row.industry}</p>
              </div>
              <div className="p-6 bg-green-50">
                <p className="text-gray-900 text-sm leading-relaxed font-semibold">{row.veriton}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="mt-8 bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Check size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">The Veriton Difference</h3>
              <p className="text-blue-100 leading-relaxed">
                Our programs are continuously updated based on industry feedback, ensuring you learn what employers actually need. 
                We bridge the gap between traditional education and real-world requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
