import { Building2, User, CheckCircle2, Package, Users } from 'lucide-react';

interface TeachingPlatformsProps {
  onNavigate: (page: string) => void;
}

export function TeachingPlatforms({ onNavigate }: TeachingPlatformsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're an institution looking for comprehensive curriculum solutions or an individual eager to
            learn cutting-edge technology, Veriton provides the same high-quality education, hands-on projects,
            and industry-recognized certifications. Choose the path that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* School Partnership Platform */}
          <div className="bg-[#f8f9fa] border border-gray-700/50 rounded-2xl shadow-xl shadow-[#5063aa]/10 hover:shadow-2xl hover:shadow-[#5063aa]/20 transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-[#5063aa] to-[#7c3aed] p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">School Partnership</h3>
              <p className="text-purple-100">Complete curriculum for educational institutions</p>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a03593] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Full Curriculum Integration</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive STEM programs aligned with educational standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a03593] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Teacher Training & Support</h4>
                    <p className="text-sm text-gray-600">
                      Professional development and ongoing mentorship for educators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a03593] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Laboratory Setup & Equipment</h4>
                    <p className="text-sm text-gray-600">
                      Complete lab infrastructure with all necessary hardware and tools
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#a03593] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Assessment & Certification</h4>
                    <p className="text-sm text-gray-600">
                      Industry-recognized certifications and progress tracking
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-center gap-2 text-[#5063aa] mb-4">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">
                    Ideal for: Schools, Colleges & Training Centers
                  </span>
                </div>

                {/* ✅ ONLY CHANGE: navigation */}
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-gradient-to-r from-[#5063aa] to-[#7c3aed] text-white py-3 rounded-lg font-semibold hover:from-[#5063aa]/90 hover:to-[#7c3aed]/90 transition-all duration-300 shadow-lg shadow-[#5063aa]/30"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>

          {/* Individual Student Platform */}
          <div className="bg-[#f8f9fa] border border-gray-700/50 rounded-2xl shadow-xl shadow-[#a03593]/10 hover:shadow-2xl hover:shadow-[#a03593]/20 transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-br from-[#a03593] to-[#ec4899] p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Individual Learning</h3>
              <p className="text-pink-100">Self-paced courses with complete learning kits</p>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5063aa] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Complete Learning Kits</h4>
                    <p className="text-sm text-gray-600">
                      All-in-one packages with hardware, components, and materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5063aa] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Self-Paced Learning</h4>
                    <p className="text-sm text-gray-600">
                      Learn at your own speed with lifetime access to course materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5063aa] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Expert Mentorship</h4>
                    <p className="text-sm text-gray-600">
                      One-on-one guidance from industry professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5063aa] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Project-Based Learning</h4>
                    <p className="text-sm text-gray-600">
                      Build real-world projects and earn certificates
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-center gap-2 text-[#a03593] mb-4">
                  <Package className="w-5 h-5" />
                  <span className="font-semibold">
                    Ideal for: Students, Hobbyists & Self-Learners
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-[#a03593] to-[#ec4899] text-white py-3 rounded-lg font-semibold hover:from-[#a03593]/90 hover:to-[#ec4899]/90 transition-all duration-300 shadow-lg shadow-[#a03593]/30">
                  Browse Courses & Kits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
