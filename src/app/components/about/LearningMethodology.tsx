import { ClipboardCheck, MapPin, Wrench, MessageCircle, Award } from 'lucide-react';

export function LearningMethodology() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Assess Current Skills',
      description: 'We start by understanding your current knowledge level, career goals, and learning preferences through comprehensive assessments.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Customized Learning Path',
      description: 'Based on your assessment, we create a personalized curriculum that focuses on your goals and fills knowledge gaps efficiently.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wrench,
      title: 'Hands-On Projects',
      description: 'Learn by doing with real-world projects that mirror industry challenges. Build a portfolio that showcases your skills to employers.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: MessageCircle,
      title: 'Mentorship & Feedback',
      description: 'Get personalized guidance from industry experts who provide continuous feedback and help you overcome technical challenges.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that validate your skills and demonstrate your expertise to potential employers worldwide.',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Learning Methodology</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven, systematic approach to mastering complex technologies
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start gap-6">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-xl mb-2`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="w-12 h-12 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 text-lg shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 mt-20 w-1 h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
