
type MentorInfo = {
  name: string;
  index: number;
};

const MentorList = ({ name, index }: MentorInfo) => {
  return (
    <ul className="grid grid-cols-6 border-b-slate-700 border-b p-2 hover:bg-smoke-4" key={index}>
      <li className="col-span-2">{name}</li>
      <li className="col-span-3">email</li>
      <li className="col-span-1">status</li>
    </ul>
  );
};

export default MentorList;
