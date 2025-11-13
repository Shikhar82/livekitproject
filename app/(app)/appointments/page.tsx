"use client";
import { useEffect, useState } from "react";

interface Appointment {
  id: number;
  full_name: string;
  phone: string;
  appointment_date: string;
  appointment_time: string;
  reason: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Appointment | null>(null);

  // ✅ Fetch appointments on load
  useEffect(() => {
    fetch("http://localhost:5000/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Error fetching appointments:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Delete an appointment
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setAppointments((prev) => prev.filter((a) => a.id !== id));
      } else {
        alert("Failed to delete appointment.");
      }
    } catch (err) {
      console.error("Error deleting appointment:", err);
    }
  };

  // ✅ Update an appointment
  const handleUpdate = async (updated: Appointment) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments/${updated.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        }
      );

      if (res.ok) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === updated.id ? updated : a))
        );
        setEditing(null);
      } else {
        alert("Failed to update appointment.");
      }
    } catch (err) {
      console.error("Error updating appointment:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading appointments...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-24">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        All Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((a) =>
            editing?.id === a.id ? (
              //✏️ Edit Form
              <div
                key={a.id}
                className="rounded-lg bg-white p-4 shadow-md border border-gray-200"
              >
                <h2 className="font-semibold mb-2 text-gray-700">Edit Appointment</h2>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editing.full_name}
                    onChange={(e) =>
                      setEditing({ ...editing, full_name: e.target.value })
                    }
                    placeholder="Full name"
                    className="w-full border rounded p-2"
                  />
                  <input
                    type="text"
                    value={editing.phone}
                    onChange={(e) =>
                      setEditing({ ...editing, phone: e.target.value })
                    }
                    placeholder="Phone"
                    className="w-full border rounded p-2"
                  />
                  <input
                    type="date"
                    value={editing.appointment_date}
                    onChange={(e) =>
                      setEditing({ ...editing, appointment_date: e.target.value })
                    }
                    className="w-full border rounded p-2"
                  />
                  <input
                    type="time"
                    value={editing.appointment_time}
                    onChange={(e) =>
                      setEditing({ ...editing, appointment_time: e.target.value })
                    }
                    className="w-full border rounded p-2"
                  />
                  <textarea
                    value={editing.reason}
                    onChange={(e) =>
                      setEditing({ ...editing, reason: e.target.value })
                    }
                    placeholder="Reason"
                    className="w-full border rounded p-2"
                  />
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleUpdate(editing)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // 📋 View Card
              <div
                key={a.id}
                className="rounded-lg bg-white p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <p>
                  <strong>Name:</strong> {a.full_name}
                </p>
                <p>
                  <strong>Phone:</strong> {a.phone}
                </p>
                <p>
                  <strong>Date:</strong> {a.appointment_date}
                </p>
                <p>
                  <strong>Time:</strong> {a.appointment_time}
                </p>
                <p>
                  <strong>Reason:</strong> {a.reason}
                </p>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => setEditing(a)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
