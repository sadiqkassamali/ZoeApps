export function Card({ children, className = "" }) {
  return (
    <div className={`p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}
