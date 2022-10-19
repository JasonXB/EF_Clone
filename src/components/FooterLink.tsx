import { FooterLinkProps } from '../interface/footer-link-props.interface';

const FooterLink = ({ url, text, icon }: FooterLinkProps) => {
  return (
    <p className="flex justify-center pr-4 mb-2 lg:mb-6 lg:justify-start hover:bg-gray-200">
      {/* If url string includes 'http' (external link), open in new tab */}
      <a
        href={url}
        className="flex flex-row font-medium text-black cursor-pointer"
        target={url?.includes('http') ? '_blank' : ''}
      >
        {/* If 'icon' property exists in link, display icon  */}
        {icon && <p className="mr-3">{icon}</p>}
        {text}
      </a>
    </p>
  );
};

export default FooterLink;
