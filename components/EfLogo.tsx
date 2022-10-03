import Link from 'next/link';
import { EfLogoProps } from '../interface/ef-logo-props.interface';


const EfLogo = ({src, url, alt}:  EfLogoProps) => {
  return (
<>
 {/* Empowered Futures Logo / Link to the Homepage */}
 <Link href="/">
          <a className="inline-flex items-center p-2 ml-6 mr-12 ">
            <img
              className="h-16"
              alt={alt}
            />
          </a>
        </Link>
    </>
  );
};

export default EfLogo;