
type MentorInfo = {
  name: string;
  index: number;
};

const MentorList = ({ name, index }: MentorInfo) => {
  return (
    <div key={index}>
      <li>{name}</li>
      <li>email</li>
      <li>status</li>
    </div>
  );
};

export default MentorList;
