import React, { useState } from 'react';

export default function OptionForm(props: any) {
  const [openOption, setOpenOption] = useState(false);
  const openModal = () => {
    setOpenOption((prev) => !prev);
  };
  const [initOption, setInitOption] = useState('Select...');

  return (
    <React.Fragment>
      <label htmlFor={props.name} className="block text-base mt-16">
        {props.label}
      </label>
      {props.blankDescription && (
        <p className="text-xs text-red-500">Please fill out this section.</p>
      )}
      {props.blankTimeline && (
        <p className="text-xs text-red-500">Please fill out this section.</p>
      )}
      <ul id={props.name} className={`relative w-full ss:w-1/2 `}>
        <li
          className={`h-9 overflow-scroll border rounded-md border-hue-400 p-2 ${
            initOption !== 'Select...' ? 'text-primary-1' : 'text-hue-400'
          } ${
            props.blankDescription || props.blankTimeline
              ? 'border-red-500'
              : 'border-smoke-2'
          }`}
          onClick={openModal}
        >
          {initOption}
        </li>

        {openOption && (
          <div className="absolute top-9 z-10 w-full border rounded-md border-hue-700 bg-white">
            {props.options.map((option: any, index: number) => (
              <li
                key={`${option}-${index}`}
                onClick={() => {
                  option === 'Other' ? '' : props.status(option);
                  setInitOption(option);
                  openModal();
                }}
                className="cursor-pointer rounded-sm bg-primary-1 p-2 m-2 text-white"
              >
                {option}
              </li>
            ))}
          </div>
        )}
        <div
          className={`absolute cursor-pointer border-primary-1 w-3 h-3 rotate-45 ${
            openOption
              ? 'right-4 top-3 border-t-2 border-l-2'
              : 'right-4 top-2 border-b-2 border-r-2'
          }`}
          onClick={openModal}
        ></div>
      </ul>
    </React.Fragment>
  );
}
