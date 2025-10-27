"use client";
import React from "react";

export default function Services() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-sky-200 via-white to-sky-100 text-center">
      <h1 className="text-4xl font-bold text-cyan-600 mb-4">Our Services</h1>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
        We provide advanced eye care solutions with expert doctors and the latest technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-700 mb-2">Eye Checkups</h2>
          <p className="text-gray-600">Comprehensive vision tests for all age groups.</p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-700 mb-2">Laser Surgery</h2>
          <p className="text-gray-600">
            State-of-the-art LASIK and laser correction treatments.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-700 mb-2">Cataract Treatment</h2>
          <p className="text-gray-600">
            Safe, effective cataract removal and lens replacement.
          </p>
        </div>
      </div>
    </section>
  );
}
