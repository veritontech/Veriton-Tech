import { Send, User, Mail, Phone, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    partnership: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        partnership: formData.partnership,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        partnership: "",
        message: "",
      });
    } else {
      alert("❌ Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Server error. Try again later.");
  }
};


   return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.organization}
                onChange={handleChange}
                placeholder="ABC School"
                className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="partnership" className="block text-sm font-medium text-gray-900 mb-2">
            Partnership Type *
          </label>
          <select
            id="partnership"
            value={formData.partnership}
            onChange={handleChange}
            className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all"
            required
          >
            <option value="">Select Partnership Type</option>
            <option value="school">School/College Partnership</option>
            {/* <option value="training">Training Center Partnership</option> */}
            <option value="individual">Individual Enrollment</option>
            {/* <option value="corporate">Corporate Training</option>
    <option value="other">Other</option> */}
          </select>
        </div>


        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            className="w-full bg-[#f8f9fa] border border-gray-700 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5063aa] focus:border-transparent transition-all resize-none"
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
  );
}
