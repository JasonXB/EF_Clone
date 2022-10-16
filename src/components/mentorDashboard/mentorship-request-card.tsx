import Image from 'next/image';
import placeholder from '../assets/cat.jpeg';
import Button from '../buttons/reusable-buttons';

const MentorshipRequestCard = (props: any, numberOfRequests: number) => {
  //numberOfRequest not passing in properly
  //avatar will be a future pass
  const { name, position, avatar, age, email, status, date, goalOfMeeting } =
    props.props;

  const testNumber = 3;
  const HowManyCardsStyleAdjustment = (num: number) => {
    if (num == 1) {
      return '  ';
    }
    return 'sm:mx-2  sm:w-1/2 sm:flex-col';
  };
  return (
    <div
      className={`flex flex-col w-full p-4 my-4  min-w-[280px] ss:min-w-[200px] overflow-hidden rounded-lg shadow-md ss:flex-row  bg-light ${HowManyCardsStyleAdjustment(
        testNumber
      )}`}
    >
      <div className="flex flex-col items-center sm:basis-1/3">
        <div className="h-auto">
          {/* width/height may need to be adjust once we pass image through. Double check if this is distorted later on. */}
          <Image
            className="rounded-[50%]"
            src={placeholder} //avatar for future dynamic props
            alt={`${name} avatar`}
            layout="intrinsic"
            placeholder="blur"
            width={90}
            height={90}
          />
        </div>
        <span className="text-lg">{name}</span>
        <h2 className="text-sm text-smoke-2">
          {/* | divider looks a little weird on certain break points. trying to think of dynamic solution */}
          <span>
            {position} | Age {age}
          </span>
        </h2>
        {/* temp option for email? */}
        <a href="mailto:name@email.com" className="text-xs text-primary-2">
          {email}
        </a>
      </div>
      <div className="w-full sm:basis-2/3">
        <div className="flex px-4 py-2 my-2 bg-white rounded-md shadow-sm wrap ">
          <h3 className="flex flex-wrap mx-2 text-sm  border-dark border-r-[1px]">
            <span className="pr-2">Status:</span>
            <span className="pr-2 text-tertiary-1">{status}</span>
          </h3>
          <h3 className="mx-2 text-sm ">
            <span>since {date}</span>
          </h3>
        </div>
        <div className="flex-1 px-4 py-2 my-2 bg-white rounded-md shadow-sm">
          <h3 className="text-xl">Goal of the meeting</h3>
          <p className="text-xs line-clamp-2 sm:line-clamp-3">
            {goalOfMeeting}
          </p>
          {/* still needs 'read more'. not sure what response they want to happen when clicked */}
        </div>
        {/* style logic incase there is only 1 request */}
        <div
          className={`flex items-center mx-auto my-auto ss:space-x-5 ss:flex-row ${
            //@ts-ignore  //remove this ts-ignore once actual evaluation is placed
            testNumber === 1 ? 'sm:flex-row' : 'sm:flex-col'
          } w-fit sm:space-x-0 md:space-x-2 md:flex-row`}
        >
          {/* needs logic added */}
          <Button variant="primary">Accept</Button>
          <Button variant="secondary">Reject</Button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipRequestCard;
