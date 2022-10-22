const test = () => {
  const local = new Intl.Locale('en-US');

  const options = { timeZoneName: 'short' }; // or long

  const dateTest = new Intl.DateTimeFormat('default', options).formatToParts(
    new Date()
  );

  /*
  {type: 'month', value: '10'}
  {type: 'literal', value: '/'}
  {type: 'day', value: '22'}
  {type: 'literal', value: '/'}
  {type: 'year', value: '2022'}
  {type: 'literal', value: ', '}
  {type: 'timeZoneName', value: 'PDT'} 
*/

  console.log(dateTest);

  const region1 = new Intl.DateTimeFormat('zh-CN', { timeZone: 'UTC' });
  const options1 = region1.resolvedOptions();

  console.log(options1);

  //-----

  return <div>this is the date page</div>;
};

export default test;
