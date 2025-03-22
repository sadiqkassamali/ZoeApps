export const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white resize-y ${className}`}
    {...props}
  />
);
