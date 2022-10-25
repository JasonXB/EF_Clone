import React, { useCallback } from 'react';

type OptionType = {
  option: string;
  index: number;
  mentorStatus: string;
  setMentorStatus: any;
  UpdateStatusList: () => void;
};

const StatusOptionButton = ({
  option,
  index,
  mentorStatus,
  setMentorStatus,
  UpdateStatusList
}: OptionType) => {

  const UpdateMentorStatus = useCallback(() => {
    setMentorStatus(option);
    // use updateStatus function for sort automatically when you update mentor status
    // updateStatusList(); => need testing once connect with DB
  },[setMentorStatus, option]);

  return (
    <li
      className={`cursor-pointer flex items-center gap-1 w-28 px-2 rounded-lg ease-in duration-100 transition-all ${
        option === mentorStatus ? 'bg-smoke-3' : 'bg-smoke-5'
      } hover:shadow-md`}
      key={index}
      onClick={UpdateMentorStatus}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={`bi bi-circle-fill w-2 ${
          option === 'Verified'
            ? 'text-green-400'
            : option === 'Pending'
            ? 'text-pink-600'
            : 'text-gray-400'
        }`}
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
      <p>{option}</p>
    </li>
  );
};

export default StatusOptionButton;
