export default function Treatments() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-200 via-white to-sky-100 px-8 py-16">
      <div className="max-w-5xl text-center">
        <h1 className="mb-6 text-5xl font-bold text-sky-800">Our Treatments</h1>
        <p className="mb-12 text-lg text-gray-600">
          At Smart Eye Clinic Hospital, we combine advanced technology with expert care to deliver
          the best eye treatment solutions for all ages.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Cataract Surgery',
              desc: 'Modern laser-assisted cataract procedures with quick recovery and high success rates.',
            },
            {
              title: 'LASIK & Refractive Surgery',
              desc: 'Achieve clearer vision with our advanced LASIK technology, customized to your eyes.',
            },
            {
              title: 'Glaucoma Management',
              desc: 'Early diagnosis and effective treatment options to protect your optic nerves.',
            },
            {
              title: 'Retina Care',
              desc: 'Comprehensive care for retinal conditions like diabetic retinopathy and macular degeneration.',
            },
            {
              title: 'Cornea Treatments',
              desc: 'Specialized corneal therapies and transplants for restoring vision clarity.',
            },
            {
              title: 'Pediatric Eye Care',
              desc: 'Gentle and effective vision care for children, from screenings to treatment.',
            },
          ].map((treatment, i) => (
            <div
              key={i}
              className="rounded-2xl border border-sky-100 bg-white p-6 text-left shadow-md transition-all hover:shadow-lg"
            >
              <h2 className="mb-2 text-2xl font-semibold text-sky-700">{treatment.title}</h2>
              <p className="text-base text-gray-600">{treatment.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
