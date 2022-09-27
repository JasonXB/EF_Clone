interface Props {
  name: string,
  id: number,
  key: number
}

const Mentor = ({name, id}: Props)  => {
  return (
    <div>
     <h1>Mentor {id}: {name}</h1>
   </div>
  );
};

export default Mentor;
