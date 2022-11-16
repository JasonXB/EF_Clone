import React from 'react';

export default function TitledInput(props: any) {
  return (
    <div className="flex flex-col">
      <label className="mt-2 text-xl font-bold">{props.title}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="p-2 mt-1 text-xl border border-solid rounded-lg border-hue-400"
        value={props.value}
        onChange={props.onChange}
        required
      />
      <span className="text-error">{props.error}</span>
    </div>
  );
}
