'use client';

import React from 'react';

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-200 via-white to-sky-100 pt-24 pb-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-cyan-600">Our Services</h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
        We provide advanced eye care solutions with expert doctors and the latest technology.
      </p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-cyan-700">Eye Checkups</h2>
          <p className="text-gray-600">Comprehensive vision tests for all age groups.</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-cyan-700">Laser Surgery</h2>
          <p className="text-gray-600">State-of-the-art LASIK and laser correction treatments.</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-cyan-700">Cataract Treatment</h2>
          <p className="text-gray-600">Safe, effective cataract removal and lens replacement.</p>
        </div>
      </div>
    </section>
  );
}
