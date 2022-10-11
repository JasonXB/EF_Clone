import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../buttons/reusuable-buttons';

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
    <div className="flex flex-col-reverse w-full p-4 space-y-3 border-2 rounded-lg ss:flex-row drop-shadow-xl border-smoke-3">
      <div className="w-full ss:w-1/2">
        <h4 className="font-semibold text-warning-2">{title}</h4>
        <p className="">{paragraph}</p>
        <span className="block pt-4">
          <Link href={buttonLink}>
            <a className={buttonVariants.primary}>{buttonText}</a>
          </Link>
        </span>
      </div>
      <div className="w-full h-40 bg-blue-300 ss:w-1/2">
        <Image src={img} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ReusableCards;
