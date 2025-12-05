"use client";

import { DatePickerField } from "@/src/components/calendar/datePicker";
import { useState } from "react";


interface Flight {
  id: number;
  start: Date | null;
  end: Date | null;
}

export function StepTimeline() {
  const [campaignStart, setCampaignStart] = useState<Date | null>(null);
  const [campaignEnd, setCampaignEnd] = useState<Date | null>(null);

  const [flights, setFlights] = useState<Flight[]>([
    { id: 1, start: null, end: null },
  ]);

  const addFlight = () => {
    setFlights((prev) => [
      ...prev,
      { id: prev.length + 1, start: null, end: null },
    ]);
  };

  const removeFlight = () => {
    if (flights.length > 1) {
      setFlights((prev) => prev.slice(0, -1));
    }
  };

  const updateFlight = (id: number, field: "start" | "end", value: Date | null) => {
    setFlights((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    );
  };

  return (
    <div className="space-y-6">
      {/* Campaign Dates */}
      <div className="grid grid-cols-2 gap-4">
        {/* Start Campaign */}
        <DatePickerField
          label="Start Campaign"
          date={campaignStart}
          onChange={setCampaignStart}
        />

        {/* End Campaign */}
        <DatePickerField
          label="End Campaign"
          date={campaignEnd}
          onChange={setCampaignEnd}
        />
      </div>

      {/* Flights */}
      {flights.map((flight, index) => (
        <div key={flight.id} className="grid grid-cols-2 gap-4">
          <DatePickerField
            label={`Flight ${index + 1}`}
            date={flight.start}
            onChange={(date) => updateFlight(flight.id, "start", date)}
          />

          <DatePickerField
            label={`End Flight ${index + 1}`}
            date={flight.end}
            onChange={(date) => updateFlight(flight.id, "end", date)}
          />
        </div>
      ))}

      {/* Action Links */}
      <div className="flex items-center justify-between text-sm text-[#3B2B4A]">
        <button
          onClick={addFlight}
          className="text-[#5C2C9C] hover:underline flex items-center gap-1"
        >
          Add additional flights →
        </button>

        {flights.length > 1 && (
          <button
            onClick={removeFlight}
            className="text-[#5C2C9C] hover:underline flex items-center gap-1"
          >
            ← Remove additional flights
          </button>
        )}
      </div>
    </div>
  );
}
