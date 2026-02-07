import { MissionVision } from '@/app/components/about/MissionVision';
import { LearningMethodology } from '@/app/components/about/LearningMethodology';
import { Timeline } from '@/app/components/about/Timeline';

export function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Veriton
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform STEM education and create the tech leaders of tomorrow
          </p>
        </div>

        <div className="space-y-16">
          <MissionVision />
          <LearningMethodology />
          <Timeline />
        </div>

        {/* Team Section */}
        {/* <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of a global network of innovators, creators, and problem-solvers who are shaping the future of technology.
          </p>
          <button className="bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-10 py-4 rounded-lg font-semibold hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30 transition-all shadow-lg shadow-blue-600/30">
            Start Your Journey
          </button>
        </div> */}
      </div>
    </div>
  );
}
