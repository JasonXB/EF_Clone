import React from 'react';

export default function OptionForm(props: any) {
  return (
    <React.Fragment>
      <label htmlFor={props.name} className="block text-base">
        {props.label}
      </label>
      <select
        id={props.name}
        className="my-2 p-1 border rounded-md border-smoke-2 w-1/2 cursor-pointer"
        onChange={(e: any) => props.status(e.target.value)}
      >
        <option value=''>Select...</option>
        {props.options.map((option: any, index: number) => (
          <option value={option} key={`${option}-${index}`}>{option}</option>
        ))}
      </select>
    </React.Fragment>
  );
}
