import { ProblemSolution } from '@/app/components/solutions/ProblemSolution';

export function SolutionsPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology Solutions in Action
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how our students apply AI, Robotics, IoT, and Drone Technology to solve real-world problems across industries
          </p>
        </div>

        <ProblemSolution />
      </div>
    </div>
  );
}
