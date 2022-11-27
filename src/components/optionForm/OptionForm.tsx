import React, { useState } from 'react';

export default function OptionForm(props: any) {

  const [initOption, setInitOption] = useState(true);

  return (
    <React.Fragment>
      <label htmlFor={props.name} className="block text-base mt-16">
        {props.label}
      </label>
      {props.blank && (
        <p className="text-xs text-red-500">Please fill out this section.</p>
      )}
      <select id={props.name} className={`relative w-full ss:w-1/2 p-2 bg-white border rounded-md shadow-sm outline-none focus:border-primary-1 focus:border-2 ${initOption ? 'text-hue-400' : 'text-primary-1'} ${
            props.blankDescription || props.blankTimeline
              ? 'border-red-500'
              : 'border-smoke-2'
          }`} onChange={(e: any) => {props.details && e.target.value === 'Other' ? (props.details(true), props.status(e.target.value)) : props.details ? (props.status(e.target.value), props.details(false)) : props.status(e.target.value);
          setInitOption(false)}}>
            {initOption && <option>Select...</option>}
          
            {props.options.map((option: any, index: number) => (
              <option
                value={option}
                key={`${option}-${index}`}
                className="cursor-pointer rounded-sm p-2 m-2 hover:bg-hue-400"
              >
                {option}
              </option>
            ))}
      </select>
    </React.Fragment>
  );
}
