import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, id, name, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  );
}

export default Input;
