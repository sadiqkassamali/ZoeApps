export const Input = ({ type = 'text', ...props }) => (
  <input type={type} className="w-full border rounded px-3 py-2" {...props} />
)
