import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

export function FeedBack() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const programs = [
    {
      title: 'Kabeer Khan',
      description:
        'Build intelligent systems and master neural networks, deep learning algorithms, and predictive models.',
      video: '/video/Kabeer Khan .mp4',
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our FeedBack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed for the future of work, our STEM programs blend cutting-edge curriculum,
              real-time feedback, and practical experience to prepare learners for tomorrow’s challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(program.video)}
                className="cursor-pointer group bg-[#f8f9fa] border border-gray-700/50 rounded-xl shadow-lg shadow-[#5063aa]/5 hover:shadow-2xl hover:shadow-[#5063aa]/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Video Preview */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <video
                    src={program.video}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  {/* <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p> */}
                  <span className="text-[#a03593] font-medium flex items-center gap-2 group-hover:gap-3 transition-all group-hover:text-[#5063aa]">
                    Watch Video
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X className="text-white" />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
