// src/components/home/Contact.tsx
const Contact: React.FC = () => {
  return (
    <section id="contact-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                HR Department?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of companies across 30+ industries who trust Synchrm 
              for their HR and payroll needs.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Phone",
                  detail: "+91 93925 62193"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Email",
                  detail: "info@synchrm.com"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Address",
                  detail: "Sunrise Startup Towers,Madhurawada, IT SEZ,Hill No:3,Visakhapatnam-48, Andhra Pradesh,India"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;