import { AlertCircle, Target, Lightbulb, Trophy } from 'lucide-react';

export function ProblemSolutionPreview() {
  const steps = [
    {
      icon: AlertCircle,
      label: 'Problem',
      description: 'Traditional education lacks hands-on experience and industry alignment',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: Target,
      label: 'Market Gap',
      description: 'Growing mismatch between graduate skills and employer requirements',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Lightbulb,
      label: 'Veriton Solution',
      description: 'Industry-aligned programs with real projects and expert mentorship',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Trophy,
      label: 'Outcome',
      description: 'Job-ready graduates with certified skills and industry connections',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Challenge to Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our approach bridges the gap between education and employment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className={`${step.bgColor} rounded-xl p-6 h-full border-2 border-transparent hover:border-gray-200 transition-all`}>
                  <div className={`w-16 h-16 ${step.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={step.iconColor} size={32} />
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-semibold text-gray-500 mb-1">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.label}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
