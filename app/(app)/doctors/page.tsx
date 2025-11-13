// app/doctors/page.tsx
export default function DoctorsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-200 via-white to-sky-100 pt-24 pb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-cyan-600">Our Doctors</h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
        Meet our experienced and compassionate team of eye specialists.
      </p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 1"
            className="mx-auto mb-4 h-24 w-24 rounded-full"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Rohan Mehta</h2>
          <p className="text-gray-600">Senior Ophthalmologist</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 2"
            className="mx-auto mb-4 h-24 w-24 rounded-full"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Priya Sharma</h2>
          <p className="text-gray-600">LASIK & Cornea Specialist</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 3"
            className="mx-auto mb-4 h-24 w-24 rounded-full"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Anil Kumar</h2>
          <p className="text-gray-600">Retina Surgeon</p>
        </div>
      </div>
    </section>
  );
}
