import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../buttons/reusable-buttons';

interface ReusableCardsProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  img: string;
  imgAlt: string;
}

const ReusableCards = ({
  title,
  paragraph,
  buttonText,
  buttonLink,
  img,
  imgAlt,
}: ReusableCardsProps) => {
  return (
    <div className="flex flex-col-reverse w-full p-4 space-y-3 border-2 rounded-lg shadow-xl ss:flex-row">
      <div className="w-full ss:w-1/2">
        <h4 className="font-semibold text-quad-2">{title}</h4>
        <p className="p-2 text-xs h-1/2">{paragraph}</p>
        <span className="block pt-4">
          <Link href={buttonLink}>
            <a className={buttonVariants.primary}>{buttonText}</a>
          </Link>
        </span>
      </div>
      <div className="w-full h-40 bg-blue-300 ss:w-1/2">
        {/**place holder blue, missing graphics */}
        {/* <Image src={img} alt={imgAlt} /> */}
      </div>
    </div>
  );
};

export default ReusableCards;
