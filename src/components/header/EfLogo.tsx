import Link from 'next/link';
import { EfLogoProps } from '../../interface/ef-logo-props.interface';
import Image from 'next/image';
import eflogo from './../assets/eflogo.png';

const EfLogo = ({ alt, className }: EfLogoProps) => {
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      <Link href="/" aria-label="go back to homepage">
        <a className="items-center block p-2 ml-6 mr-12 ">
          <Image
            className={className}
            alt={alt}
            src={eflogo}
            height={74}
            width={200}
          />
        </a>
      </Link>
    </>
  );
};

export default EfLogo;
