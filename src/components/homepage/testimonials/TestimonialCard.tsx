import Image from 'next/image';

const TestimonialCard = (props: any) => {
  const { img, fullName, company, reviewBlurb } = props.props;

  return (
    <div className="shadow-2xl flex space-y-4 flex-col items-center max-w-[412px] rounded-t-[15%] p-8">
      <div className="w-40 rounded-full">
        <Image src={img} alt={fullName} />
      </div>
      <h3 className="text-3xl text-primary-1">{fullName}</h3>
      <p>{company}</p>
      <div>stars</div>
      <div>
        <p>{reviewBlurb}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
