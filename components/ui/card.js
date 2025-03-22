export function Card({ children }) {
  return <div className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="border-b px-4 py-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-xl font-semibold">{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="border-t px-4 py-2">{children}</div>;
}
