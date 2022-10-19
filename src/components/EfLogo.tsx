import Link from 'next/link';
import { EfLogoProps } from '../interface/ef-logo-props.interface';
import Image from 'next/image';
import eflogo from '../assets/logo_black.png';

const EfLogo = ({ alt, className }: EfLogoProps) => {
  return (
    <>
      {/* Empowered Futures Logo / Link to the Homepage */}
      <Link href="/" aria-label="go back to homepage">
        <a className="items-center block ">
          <Image className={className} alt={alt} src={eflogo} priority />
        </a>
      </Link>
    </>
  );
};

export default EfLogo;
