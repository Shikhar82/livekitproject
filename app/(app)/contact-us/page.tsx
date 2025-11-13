export default function ContactUs() {
  return (
    <section className="relative flex min-h-screen flex-col items-center bg-gradient-to-b from-sky-50 via-white to-sky-100 px-6 py-20">
      <div className="w-full max-w-6xl text-center">
        <h1 className="mb-4 text-5xl font-bold text-sky-800">Contact Us</h1>
        <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-700">
          Have a question or need to book an appointment? We're always ready to help. Reach out
          through the details below or send us a message directly.
        </p>

        {/* Info Cards */}
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-100 bg-white p-10 shadow-md transition hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-sky-700">Clinic Address</h2>
            <p className="leading-relaxed text-gray-600">
              Smart Eye Clinic Hospital <br />
              123 Vision Avenue, City Center, <br />
              New Delhi, India 110001
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-10 shadow-md transition hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold text-sky-700">Contact Details</h2>
            <p className="leading-relaxed text-gray-600">
              📞 +91 98765 43210 <br />
              ✉️ info@smarteyeclinic.com
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-sky-100 bg-white p-12 shadow-lg">
          <h2 className="mb-8 text-3xl font-semibold text-sky-700">Send a Message</h2>
          <form className="grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="col-span-1 rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="col-span-1 rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="rounded-lg border border-gray-300 p-4 focus:ring-2 focus:ring-sky-400 focus:outline-none md:col-span-2"
            />
            <div className="flex justify-center md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-sky-600 px-8 py-3 font-medium text-white transition-all hover:bg-sky-700"
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
