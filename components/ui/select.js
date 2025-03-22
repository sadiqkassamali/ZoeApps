export const Select = ({ options = [], value, onChange, className = "" }) => (
  <select
    value={value}
    onChange={onChange}
    className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white ${className}`}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
