import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To empower the next generation with cutting-edge STEM education that bridges the gap between 
              traditional learning and industry demands.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're committed to providing hands-on, practical training in AI, robotics, IoT, and emerging 
              technologies that prepare students for real-world careers. Our mission is to make advanced 
              technical education accessible, engaging, and immediately applicable to solving tomorrow's challenges.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To become the global leader in industry-aligned STEM education, creating a world where every 
              student has the skills to thrive in the technology-driven future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where the gap between education and employment no longer exists, where 
              graduates emerge not just with knowledge, but with practical skills and industry connections 
              that launch successful careers from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
