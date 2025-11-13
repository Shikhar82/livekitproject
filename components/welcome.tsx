import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ClipboardClock } from "lucide-react";
import { BotMessageSquare } from "lucide-react";
interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: () => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  const [showForm, setShowForm] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('✅ Appointment saved successfully!');
        e.currentTarget.reset();
      } else {
        alert('❌ Failed to save appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section
      ref={ref}
      inert={disabled}
      className={cn(
        'relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-white to-sky-200 px-4 brightness-100 sm:px-8 md:flex-row md:px-16',
        disabled ? 'z-10' : 'z-20'
      )}
    >
      {/* 🔘 Toggle Form Button */}
      <div className="absolute top-30 left-1/2 z-50 flex h-25 w-80 -translate-x-1/2 flex-col items-center justify-center bg-transparent text-sm font-semibold text-white transition-all duration-300 md:top-40 md:left-5 md:w-[600px] md:translate-x-0">
  <button
    onClick={() => setShowForm(!showForm)}
    className="h-10 w-60 rounded-full bg-red-600 text-sm font-semibold text-white hover:bg-red-700 flex items-center justify-center gap-2"
  >
    {showForm ? (
      'Close Form'
    ) : (
      <>
      <ClipboardClock size={16} color="#ffffff" strokeWidth={3} />
        Book Appointment Yourself
      </>
    )}
  </button>



          <p className="text-fg1 mt-2 w-full self-stretch pt-1 text-center leading-6 font-medium">
            Manually select your doctor, date, and time in just a few clicks.
          </p>
    
      </div>

      {/* 🗣️ Voice AI Button */}
      {!showForm && (
      <div className="absolute bottom-20 left-1/2 z-50 flex h-25 w-80 -translate-x-1/2 flex-col items-center justify-center bg-transparent text-sm font-semibold text-white transition-all duration-300 md:top-60 md:left-5 md:w-[600px] md:translate-x-0">
  <Button
    variant="primary"
    size="lg"
    onClick={() => {
      onStartCall(); // existing logic
      setShowForm(true); // also show the form
    }}
    className="mt-2 w-70 font-mono flex items-center justify-center gap-2"
  >
    <BotMessageSquare size={16} color="#f5d714" strokeWidth={3} />
    {startButtonText}
  </Button>

  <p className="text-fg1 mt-2 w-full self-stretch pt-1 text-center leading-6 font-medium">
    Let our AI agent handle your query or booking through a simple voice conversation.
  </p>
</div>

      )}

      {/* 🧾 Appointment Form */}
      {showForm && (
        <div className="absolute top-48 left-1/2 z-40 w-full max-w-sm -translate-x-1/2 p-6 opacity-100 transition-opacity duration-300 sm:p-8 md:top-1/3 md:left-50 md:mt-[5px] md:ml-[90px] md:w-[600px] md:translate-x-0">
          <form
            className="w-full space-y-6 rounded-2xl bg-white p-6 shadow-lg md:p-8"
            onSubmit={handleSubmit}
          >
            {/* Row 1: Full Name + Phone Number */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Full Name */}
              <div className="group relative z-0 w-full">
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="peer left-0 block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-left text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="full_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-left text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                >
                  Full Name
                </label>
              </div>

              {/* Phone Number */}
              <div className="group relative z-0 w-full">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="[0-9]{10}"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-left text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                >
                  Phone Number
                </label>
              </div>
            </div>

            {/* Row 2: Date + Time */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Date */}
              <div className="group relative z-0 w-full">
                <input
                  type="date"
                  name="appointment_date"
                  id="appointment_date"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="appointment_date"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-left text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                >
                  Date
                </label>
              </div>

              {/* Time */}
              <div className="group relative z-0 w-full">
                <input
                  type="time"
                  name="appointment_time"
                  id="appointment_time"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="appointment_time"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-left text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
                >
                  Time
                </label>
              </div>
            </div>

            {/* Reason for Visiting */}
            <div className="group relative z-0 w-full">
              <textarea
                name="reason"
                id="reason"
                className="peer left-0 block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-left text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="reason"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-left text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Reason for Visiting
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {/* 👩‍⚕️ Image */}
      <div className="relative flex flex-1 items-center justify-center pt-10 md:ml-[500px]">
        <Image
          src="/docters-home-page.png"
          alt="Doctor Illustration"
          width={600}
          height={122}
          className="rounded-2xl opacity-80 shadow-md"
        />
      </div>

      {/* ⚓ Footer */}
      <footer className="fixed bottom-5 left-0 z-20 flex w-full items-center justify-center text-sm text-gray-600">
        © {new Date().getFullYear()} Eye Clinik Hospital — Thanks For Visiting ❤️
      </footer>
    </section>
  );
};
