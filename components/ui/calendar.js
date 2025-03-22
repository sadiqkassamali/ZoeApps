import React from 'react';

export const Calendar = ({ date, setDate, className = "" }) => (
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className={`w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);
