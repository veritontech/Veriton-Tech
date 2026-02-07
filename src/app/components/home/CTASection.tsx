import { ArrowRight, CheckCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Future?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of students who are building careers in technology. 
          Start your journey with Veriton today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
            Enroll Now
            <ArrowRight size={20} />
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2">
            Talk to Advisor
          </button>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center justify-center gap-2 text-white">
            <CheckCircle size={20} className="text-green-300" />
            <span>No prior experience needed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <CheckCircle size={20} className="text-green-300" />
            <span>Flexible payment plans</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white">
            <CheckCircle size={20} className="text-green-300" />
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
