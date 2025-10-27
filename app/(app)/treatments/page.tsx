export default function Treatments() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-200 via-white to-sky-100 px-8 py-16">
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-sky-800 mb-6">Our Treatments</h1>
        <p className="text-gray-600 text-lg mb-12">
          At Smart Eye Clinic Hospital, we combine advanced technology with
          expert care to deliver the best eye treatment solutions for all ages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Cataract Surgery",
              desc: "Modern laser-assisted cataract procedures with quick recovery and high success rates.",
            },
            {
              title: "LASIK & Refractive Surgery",
              desc: "Achieve clearer vision with our advanced LASIK technology, customized to your eyes.",
            },
            {
              title: "Glaucoma Management",
              desc: "Early diagnosis and effective treatment options to protect your optic nerves.",
            },
            {
              title: "Retina Care",
              desc: "Comprehensive care for retinal conditions like diabetic retinopathy and macular degeneration.",
            },
            {
              title: "Cornea Treatments",
              desc: "Specialized corneal therapies and transplants for restoring vision clarity.",
            },
            {
              title: "Pediatric Eye Care",
              desc: "Gentle and effective vision care for children, from screenings to treatment.",
            },
          ].map((treatment, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-sky-100 p-6 text-left hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-semibold text-sky-700 mb-2">
                {treatment.title}
              </h2>
              <p className="text-gray-600 text-base">{treatment.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
