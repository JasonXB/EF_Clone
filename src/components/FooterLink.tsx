import { FooterLinkProps } from '../../interface/footer-link-props.interface';

const FooterLink = ({url, text, icon}:  FooterLinkProps) => {
  return (

  <p className="mb-6 hover:bg-gray-200">
    <a href={url} className="flex flex-row font-medium text-black cursor-pointer">
      {/* If 'icon' property exists in link, display icon  */}
    {icon && <p className='mr-3'>{icon}</p>}
      {text}
    </a>
  </p>

  );
};

export default FooterLink;