import { EfLogoProps } from '../interface/ef-logo-props.interface';
import Image from 'next/image';
import eflogo from './assets/eflogo.png';

const EfLogo = ({ href, alt, className }: EfLogoProps) => {
  return (
    <>
      {/* Empowered Futures Logo / Optional Link to the Homepage */}
      <div className={className}>
        <a href={href!}>
          <Image alt={alt} src={eflogo} />
        </a>
      </div>
    </>
  );
};

export default EfLogo;
