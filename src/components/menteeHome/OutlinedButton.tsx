import React from 'react';

export default function OutlinedButton(props: {
  text: string;
  onClick: Function;
}) {
  return (
    <button
      type="button"
      className="block mx-auto text-lg px-8 py-2 border-2 border-[#ff7474] text-gray-800 font-medium leading-tight rounded-full mt-12"
    >
      {props.text}
    </button>
  );
}
