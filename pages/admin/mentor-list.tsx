import { useState } from 'react';

type MentorInfo = {
  name: string;
  email: string;
  status: boolean;
  index: number;
};

const MentorList = ({ name, email, status, index }: MentorInfo) => {
  // manage email changing with useState
  const [isEmail, setIsEmail] = useState<string>(email);
  const [editorIsOn, setEditorIsOn] = useState<boolean>(false);

  const updateAnEmail = (e: any) => {
    setIsEmail(e.target.value);
  };

  return (
    <ul
      className="grid grid-cols-6 border-b-slate-700 border-b p-2 hover:bg-smoke-4"
      key={index}
    >
      <li className="col-span-2">{name}</li>
      <li className="col-span-3">
        <div className="flex gap-2 items-center">
          {editorIsOn ? (
            <>
              {/* changing initial state when you input new email address */}
              <input type="text" placeholder={isEmail} onChange={updateAnEmail}/>
              {/* close editor */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download cursor-pointer"
                viewBox="0 0 16 16"
                onClick={() => setEditorIsOn(false)}
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </>
          ) : (
            <>
              <p>{isEmail}</p>
              {/* open editor */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square cursor-pointer"
                viewBox="0 0 16 16"
                onClick={() => setEditorIsOn(true)}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </>
          )}
        </div>
      </li>
      <li className="col-span-1">
        {status ? (
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle-fill w-2 text-green-400"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>on</p>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle-fill w-2 text-gray-400"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
            <p>off</p>
          </div>
        )}
      </li>
    </ul>
  );
};

export default MentorList;
