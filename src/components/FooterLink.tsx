import Link from 'next/link';
import { FooterLinkProps } from '../../interface/footer-link-props.interface';

const FooterLink = ({url, text, icon}:  FooterLinkProps) => {
  return (
<Link href={url}>
  <p className="mb-4 ">
    <a className="flex flex-row text-gray-600 cursor-pointer hover:bg-gray-200">
      {/* If 'icon' property exists in link, display icon  */}
    {icon && <div className='mr-3'>{icon}</div>}
      {text}
    </a>
  </p>
</Link>
  );
};

export default FooterLink;