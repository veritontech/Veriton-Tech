import { ContactForm } from '@/app/components/contact/ContactForm';
import { InfoPanel } from '@/app/components/contact/InfoPanel';

export function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ContactForm />
          <InfoPanel />
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="h-96 w-full">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1770386243496!5m2!1sen!2sin!6m8!1m7!1smnGW5g7FJfMFC0zxPFstwg!2m2!1d19.88841992751254!2d75.36894138833763!3f288.15338825324415!4f7.385277496731632!5f0.7820865974627469"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>


      </div>
    </div>
  );
}
