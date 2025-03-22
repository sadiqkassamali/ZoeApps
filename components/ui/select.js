export const Select = ({ options = [], value, onChange }) => (
  <select
    className="w-full border rounded px-3 py-2"
    value={value}
    onChange={onChange}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
)
