import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../buttons/reusable-buttons';

interface ReusableCardsProps {
  title: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  img: StaticImageData;
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
    <div
      style={{ boxShadow: '0px 0px 20px 4px rgb(0 0 0 / 20%)' }} //inline for a more custom shadow, might be good to add to theme.
      className="flex flex-col-reverse w-full max-w-[700px] p-4 space-y-3  rounded-lg min-h-[260px] ss:flex-row"
    >
      <div className="w-full ss:w-1/2">
        <h4 className="font-semibold md:text-4xl lg:text-5xl text-quad-2">
          {title}
        </h4>
        <p className="p-2 text-lg h-1/2">{paragraph}</p>
        <span className="block pt-4 mt-4">
          <Link href={buttonLink}>
            <a className={buttonVariants.primary}>{buttonText}</a>
          </Link>
        </span>
      </div>
      <div className="mx-auto xl:ml-20 w-fit ss:w-1/2">
        <Image src={img} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ReusableCards;
