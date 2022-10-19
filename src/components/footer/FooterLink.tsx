import { FooterLinkProps } from './footer-link-props.interface';

const FooterLink = ({ url, text, icon }: FooterLinkProps) => {
  return (
    <span className="flex justify-center pr-4 mb-2 lg:mb-6 lg:justify-start">
      {/* If url string includes 'http' (external link), open in new tab */}
      <a
        href={url}
        className="flex hover:bg-smoke-2 flex-row font-bold text-light cursor-pointer rel='noreferrer'"
        target={url?.includes('http') ? '_blank ' : ''}
      >
        {/* If 'icon' property exists in link, display icon  */}
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    </span>
  );
};

export default FooterLink;
