import React from 'react'
export const Calendar = ({ date, setDate }) => (
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full border rounded px-3 py-2"
  />
)
