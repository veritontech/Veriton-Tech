import { Brain, Bot, Wifi, Plane } from 'lucide-react';

export function ProblemSolution() {
  const solutions = [
    {
      icon: Brain,
      tech: 'AI & Machine Learning',
      problem: 'Healthcare providers struggle with accurate disease diagnosis and treatment prediction, leading to delayed care and increased costs.',
      solution: 'Machine learning models analyze patient data to predict diseases early, recommend personalized treatments, and improve diagnostic accuracy by 40%.',
      impact: 'Reduced diagnosis time by 60%, improved patient outcomes, and saved $2M annually in healthcare costs.',
      color: 'from-blue-500 to-cyan-500',
      steps: ['Data Collection', 'Model Training', 'Clinical Validation'],
    },
    {
      icon: Bot,
      tech: 'Robotics & Automation',
      problem: 'Manufacturing facilities face labor shortages, quality inconsistencies, and safety risks in repetitive or dangerous tasks.',
      solution: 'Autonomous robots handle repetitive assembly tasks, quality inspection, and hazardous material handling with 99.8% accuracy.',
      impact: 'Increased production efficiency by 45%, reduced workplace accidents by 80%, and improved product quality consistency.',
      color: 'from-purple-500 to-pink-500',
      steps: ['Process Analysis', 'Robot Programming', 'Integration'],
    },
    {
      icon: Wifi,
      tech: 'IoT Systems',
      problem: 'Cities struggle with traffic congestion, energy waste, and inefficient public services, affecting quality of life and sustainability.',
      solution: 'Smart city IoT network monitors traffic, optimizes energy usage, and manages public resources in real-time using connected sensors.',
      impact: 'Reduced traffic congestion by 35%, cut energy consumption by 28%, and improved emergency response times by 50%.',
      color: 'from-green-500 to-teal-500',
      steps: ['Sensor Deployment', 'Data Analytics', 'System Integration'],
    },
    {
      icon: Plane,
      tech: 'Drone Technology',
      problem: 'Agricultural monitoring is time-consuming, costly, and often misses critical crop health issues until it\'s too late.',
      solution: 'Autonomous drones equipped with multispectral cameras monitor crop health, detect diseases early, and optimize irrigation patterns.',
      impact: 'Increased crop yield by 25%, reduced water usage by 30%, and detected crop diseases 2 weeks earlier than traditional methods.',
      color: 'from-orange-500 to-red-500',
      steps: ['Flight Planning', 'Image Analysis', 'Action Recommendations'],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.tech}</h3>
                      <p className="text-sm text-gray-600">Real-World Application</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Problem */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-red-900 mb-3">Problem Statement</h4>
                      <p className="text-gray-700 leading-relaxed">{solution.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Our Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{solution.solution}</p>
                    </div>

                    {/* Impact */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-green-900 mb-3">Real-World Impact</h4>
                      <p className="text-gray-700 leading-relaxed">{solution.impact}</p>
                    </div>
                  </div>

                  {/* Implementation Steps */}
                  <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-gray-600 mb-4 uppercase">Implementation Process</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {solution.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {i + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
