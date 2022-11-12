import Image, { StaticImageData } from 'next/image';
interface TestimonialCardProps {
  props: {
    img: string | StaticImageData;
    fullName: string;
    company: string;
    reviewBlurb: string;
    rate: number;
  };
}

const TestimonialCard = ({ props }: TestimonialCardProps) => {
  const { img, fullName, company, reviewBlurb, rate } = props;

  //only allows full number rating. no half amounts as of now.
  const stars = (num: number) => {
    let content = [];
    for (let i = 0; i < num; i++) {
      content.push(
        <svg
          key={i}
          aria-hidden="true"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return content;
  };
  //style for less then 600px needs to be adjusted in future
  return (
    <div
      className="my-4 mx-auto sm:mx-4  bg-light flex space-y-4 flex-col items-center max-w-[412px] rounded-t-[15%] p-8"
      style={{
        boxShadow: ' 0 0.2rem 1.25rem rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        className="rounded-full"
        style={{ clipPath: 'circle(70px at center)' }}
      >
        <Image className="rounded-full" src={img} alt={fullName} />
      </div>
      <h3 className="text-3xl text-primary-1">{fullName}</h3>
      <p>{company}</p>
      <div>
        {' '}
        <div className="flex items-center mb-4 text-primary-4">
          {stars(rate)}
        </div>
      </div>
      <div>
        <blockquote
          className=" flex flex-col before:leading-4  after:self-end before:font-bold before:text-5xl before:text-primary-2
        after:font-bold after:text-5xl after:text-primary-2 
         before:content-[open-quote] after:content-[close-quote]  "
        >
          <p className="w-10/12 mx-auto ">{reviewBlurb}</p>
        </blockquote>
      </div>
    </div>
  );
};
export default TestimonialCard;
