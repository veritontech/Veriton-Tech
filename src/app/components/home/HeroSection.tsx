import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#f8f9fa] via-[#f8f9fa] to-[#f8f9fa] py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#5063aa] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#a03593] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block bg-gradient-to-r from-[#5063aa]/20 to-[#a03593]/20 text-[#a03593] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#a03593]/30">
              🚀 Industry-Aligned STEM Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Future in <span className="bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
              Master AI, Robotics, IoT, and Drone Technology through hands-on projects and expert mentorship. Bridge the gap between education and industry demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-8 py-4 rounded-lg font-medium hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30 flex items-center justify-center gap-2">
                Explore Programs
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">2000+</div>
                <div className="text-sm text-gray-800 mt-1">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-800 mt-1">Job Placement</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-800 mt-1">Industry Partners</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#5063aa]/20 border border-gray-700/50">
              <img
                src="/img/bannerimage.jpg"
                alt="Futuristic AI and Technology"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5063aa]/40 to-transparent"></div>
            </div>
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-[#1a1a2e] rounded-xl shadow-xl shadow-[#5063aa]/20 p-4 border border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Certified Programs</div>
                  <div className="text-sm text-gray-400">Industry Recognized</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}