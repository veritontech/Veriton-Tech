import { Rocket, Award, Users, Handshake, TrendingUp } from 'lucide-react';

export function Timeline() {
  const milestones = [
    {
      year: '2020',
      icon: Rocket,
      title: 'Veriton Founded',
      description: 'Started with a vision to revolutionize STEM education and bridge the industry skills gap.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2021',
      icon: Award,
      title: 'First Programs Launch',
      description: 'Launched AI & Robotics programs with 100+ students. Achieved 92% completion rate.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2026',
      icon: Users,
      title: '1000+ Students Milestone',
      description: 'Reached 1000+ active students across 6 specialized programs with 95% job placement rate.',
      color: 'from-green-500 to-teal-500',
    },
    // {
    //   year: '2024',
    //   icon: Handshake,
    //   title: 'Industry Partnerships',
    //   description: 'Established partnerships with 50+ leading tech companies for curriculum and placement.',
    //   color: 'from-orange-500 to-red-500',
    // },
    // {
    //   year: '2026',
    //   icon: TrendingUp,
    //   title: 'Global Expansion',
    //   description: 'Expanding to international markets with new programs in emerging technologies.',
    //   color: 'from-indigo-500 to-blue-500',
    // },
  ];

  return (
    <section className="py-12 bg-white rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a small startup to a leading STEM education platform
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 h-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white rounded-xl p-8 shadow-xl border border-gray-200 inline-block w-full md:w-auto ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <span className="text-sm font-bold text-gray-500 uppercase">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Year Marker */}
                  <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-100 border-4 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-xl">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
