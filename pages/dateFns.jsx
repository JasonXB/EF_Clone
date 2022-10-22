import { formatISO, parseISO, format } from 'date-fns';

const dateFns = () => {
  const date = formatISO(new Date());
  const date2 = parseISO(date);

  console.log(format(date2, 'O'));
  return <div>dateFns</div>;
};

export default dateFns;
