import { Clock, BarChart, ArrowRight } from 'lucide-react';

export function ProgramsList() {
  const programs = [
    {
      title: 'AI & Machine Learning Fundamentals',
      level: 'Beginner',
      duration: '12 Weeks',
      image: '/img/programs_img/AI.jpg',
      badge: 'Most Popular',
      description: 'Master neural networks, deep learning, and build intelligent systems from scratch.',
    },
    {
      title: 'Advanced Robotics Engineering',
      level: 'Advanced',
      duration: '16 Weeks',
      image: '/img/programs_img/Robotic.jpg',
      badge: 'Industry Certified',
      description: 'Design autonomous robots and master industrial automation technologies.',
    },
    {
      title: 'IoT System Development',
      level: 'Intermediate',
      duration: '10 Weeks',
      image: '/img/programs_img/Iot.jpg',
      badge: 'New',
      description: 'Build smart solutions for homes, cities, and industries with connected devices.',
    },
    {
      title: 'Drone Technology & Control',
      level: 'Intermediate',
      duration: '14 Weeks',
      image: '/img/programs_img/Drone.jpg',
      badge: 'High Demand',
      description: 'Master aerial robotics and autonomous flight systems for real-world applications.',
    },
    {
      title: 'Data Science & Analytics',
      level: 'Beginner',
      duration: '12 Weeks',
      image: '/img/programs_img/Datascince.jpg',
      badge: 'Career Track',
      description: 'Analyze complex datasets and create actionable insights with modern tools.',
    },
    {
      title: 'Cybersecurity Specialist',
      level: 'Advanced',
      duration: '18 Weeks',
      image: '/img/programs_img/Cyber.jpg',
      badge: 'Industry Certified',
      description: 'Learn ethical hacking, network security, and advanced threat detection.',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900">
                <option>All Categories</option>
                <option>AI & ML</option>
                <option>Robotics</option>
                <option>IoT</option>
                <option>Drones</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Any Duration</option>
                <option>8-12 Weeks</option>
                <option>12-16 Weeks</option>
                <option>16+ Weeks</option>
              </select>
            </div>
          </div>
        </div>


        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <BarChart size={16} className="text-gray-400" />
                    <span className={`px-2 py-1 rounded ${getLevelColor(program.level)} text-xs font-medium`}>
                      {program.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={16} className="text-gray-400" />
                    {program.duration}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>

                <button className="w-full bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-4 py-3 rounded-lg font-medium hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
