const test = () => {
  const local = new Intl.Locale('en-US');

  const options = { timeZoneName: 'long' }; // or long

  const dateTest = new Intl.DateTimeFormat('default', {
    timeZoneName: 'long',
  }).formatToParts(new Date());

  /*
  {type: 'month', value: '10'}
  {type: 'literal', value: '/'}
  {type: 'day', value: '22'}
  {type: 'literal', value: '/'}
  {type: 'year', value: '2022'}
  {type: 'literal', value: ', '}
  {type: 'timeZoneName', value: 'PDT'} 
*/

  const timezonePart = dateTest.find(
    (datePart) => datePart.type === 'timeZoneName'
  );

  const region1 = new Intl.DateTimeFormat('zh-CN', { timeZone: 'UTC' });
  const options1 = region1.resolvedOptions();

  console.log(timezonePart.value);

  //-----

  return <div>this is the date page</div>;
};

export default test;
