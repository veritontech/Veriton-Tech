import { Building, Phone, Mail, MapPin, Send, User, Briefcase } from 'lucide-react';

export function PartnershipForm() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#5063aa] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#a03593] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#5063aa]/20 to-[#a03593]/20 text-[#a03593] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#a03593]/30">
            <Building className="inline-block mr-2" size={16} />
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Partner With <span className="bg-gradient-to-r from-[#5063aa] to-[#a03593] bg-clip-text text-transparent">Veriton</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hands with us to revolutionize STEM education. Whether you're an institution or an individual, we have the perfect solution for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#f8f9fa] border border-gray-700/50 rounded-2xl p-8 shadow-xl shadow-[#5063aa]/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                    Organization/Institution
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      type="text"
                      id="organization"
                      placeholder="ABC School"
                      className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="partnership-type" className="block text-sm font-medium text-gray-900 mb-2">
                  Partnership Type *
                </label>
                <select
                  id="partnership-type"
                  className="w-full bg-[#5063aa] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select Partnership Type</option>
                  <option value="school">School/College Partnership</option>
                  <option value="training">Training Center Partnership</option>
                  <option value="individual">Individual Enrollment</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5063aa] to-[#a03593] text-white px-6 py-4 rounded-lg font-medium hover:from-[#5063aa]/90 hover:to-[#a03593]/90 transition-all shadow-lg shadow-[#5063aa]/30 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#5063aa]/10 to-[#a03593]/10 border border-[#5063aa]/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Office Aid Building, S.T.P.I,<br />
                      Chikalthana, Aurangabad<br />
                      Maharashtra, 431001
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      <a href="tel:+918055777718" className="hover:text-[#a03593] transition-colors">
                        +91 8055 7777 18
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+918055777704" className="hover:text-[#a03593] transition-colors">
                        +91 8055 7777 04
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@veritontech.com" className="hover:text-[#a03593] transition-colors">
                        info@veritontech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[#f8f9fa] border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#a03593] font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[#a03593] font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-[#5063aa] to-[#a03593] rounded-2xl p-6">
              <p className="text-white text-center font-medium">
                🎓 Empowering the next generation of innovators through cutting-edge STEM education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
