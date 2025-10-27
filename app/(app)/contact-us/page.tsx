export default function ContactUs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 py-20 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl font-bold text-sky-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
          Have a question or need to book an appointment? We're always ready to help.  
          Reach out through the details below or send us a message directly.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-10 border border-sky-100 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-sky-700 mb-3">Clinic Address</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart Eye Clinic Hospital <br />
              123 Vision Avenue, City Center, <br />
              New Delhi, India 110001
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 border border-sky-100 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-sky-700 mb-3">Contact Details</h2>
            <p className="text-gray-600 leading-relaxed">
              📞 +91 98765 43210 <br />
              ✉️ info@smarteyeclinic.com
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-sky-700 mb-8">Send a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400 col-span-1"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400 col-span-1"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-sky-400 md:col-span-2"
            />
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-sky-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-sky-700 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
