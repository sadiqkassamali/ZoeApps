import React from "react";

export function Select({ children, value, onValueChange, disabled }) {
  return React.cloneElement(children, { value, onChange: (e) => onValueChange(e.target.value), disabled });
}

export function SelectTrigger({ children, value, onChange, disabled, className = "" }) {
  return (
      <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white ${className}`}
      >
        {children}
      </select>
  );
}

export function SelectValue({ placeholder, value }) {
  return <option value="" disabled>{placeholder}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
