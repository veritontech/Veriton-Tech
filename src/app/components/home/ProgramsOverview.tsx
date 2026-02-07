import { Brain, Bot, Wifi, Plane, Database, Shield, ArrowRight } from 'lucide-react';

export function ProgramsOverview() {
  const programs = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems and master neural networks, deep learning algorithms, and predictive models.',
      color: 'from-blue-500 to-cyan-500',
      image: '/img/programs_img/AI.jpg',
    },
    {
      icon: Bot,
      title: 'Robotics',
      description: 'Design and program autonomous robots for real-world applications and industrial automation.',
      color: 'from-purple-500 to-pink-500',
      image: '/img/programs_img/Robotic.jpg',
    },
    {
      icon: Wifi,
      title: 'IoT Systems',
      description: 'Connect physical devices and create smart solutions for homes, cities, and industries.',
      color: 'from-green-500 to-teal-500',
      image: '/img/programs_img/Iot.jpg',
    },
    {
      icon: Plane,
      title: 'Drone Technology',
      description: 'Master aerial robotics, autonomous flight systems, and drone-based solutions.',
      color: 'from-orange-500 to-red-500',
      image: '/img/programs_img/Drone.jpg',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analyze complex datasets and create actionable insights with modern data tools.',
      color: 'from-indigo-500 to-blue-500',
      image: '/img/programs_img/Datascince.jpg',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect digital assets and learn ethical hacking, network security, and threat detection.',
      color: 'from-red-500 to-pink-500',
      image: '/img/programs_img/Cyber.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our STEM Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from industry-leading programs designed to prepare you for the careers of tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group bg-[#f8f9fa] border border-gray-700/50 rounded-xl shadow-lg shadow-[#5063aa]/5 hover:shadow-2xl hover:shadow-[#5063aa]/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-14 h-14 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <button className="text-[#a03593] font-medium flex items-center gap-2 group-hover:gap-3 transition-all hover:text-[#5063aa]">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}