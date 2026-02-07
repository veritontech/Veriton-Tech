import { useState } from 'react';
import { ProgramsList } from '@/app/components/programs/ProgramsList';
import { ProgramDetails } from '@/app/components/programs/ProgramDetails';

export function ProgramsPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from industry-leading STEM programs designed for the careers of tomorrow
          </p>
        </div>

        <div className="mb-8 flex gap-4 justify-center">
          <button
            onClick={() => setShowDetails(false)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              !showDetails
                ? 'bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white rounded-lg font-medium hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => setShowDetails(true)}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              showDetails
                ? 'bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white rounded-lg font-medium hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Program Details Example
          </button>
        </div>

        {!showDetails ? <ProgramsList /> : <ProgramDetails />}
      </div>
    </div>
  );
}
