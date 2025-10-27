// app/doctors/page.tsx
export default function DoctorsPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-sky-200 via-white to-sky-100 text-center">
      <h1 className="text-4xl font-bold text-cyan-600 mb-4">Our Doctors</h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
        Meet our experienced and compassionate team of eye specialists.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 1"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Rohan Mehta</h2>
          <p className="text-gray-600">Senior Ophthalmologist</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 2"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Priya Sharma</h2>
          <p className="text-gray-600">LASIK & Cornea Specialist</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/150"
            alt="Doctor 3"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-cyan-700">Dr. Anil Kumar</h2>
          <p className="text-gray-600">Retina Surgeon</p>
        </div>
      </div>
    </section>
  );
}
