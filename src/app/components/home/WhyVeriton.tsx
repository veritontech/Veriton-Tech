import { GraduationCap, Users, Briefcase, Clock, Award, HeadphonesIcon } from 'lucide-react';

export function WhyVeriton() {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Industry-Aligned Curriculum',
      description: 'Programs designed with input from leading tech companies to ensure relevance and real-world application.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience in AI, robotics, and emerging technologies.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Hands-On Projects',
      description: 'Build real products and solutions that showcase your skills to potential employers.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Award,
      title: 'Career Support',
      description: 'Get personalized career guidance, resume reviews, and direct connections to hiring partners.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with on-demand content, live sessions, and weekend workshops.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: HeadphonesIcon,
      title: 'Certification',
      description: 'Earn industry-recognized certificates that validate your skills and boost your career prospects.',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Veriton?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering education that transforms careers and lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
