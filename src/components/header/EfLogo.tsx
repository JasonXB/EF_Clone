import Link from 'next/link';
import { EfLogoProps } from '../../interface/ef-logo-props.interface';
import Image from 'next/image';
import eflogo from './../assets/eflogo.png';

const EfLogo = ({ alt, className }: EfLogoProps) => {
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      <Link href="/" aria-label="go back to homepage">
        <a className="items-center block m-2 ">
          {/*responsive is being buggy */}
          <Image
            className={className}
            alt={alt}
            src={eflogo}
            width={200}
            height={74}
            priority
          />
        </a>
      </Link>
    </>
  );
};

export default EfLogo;
