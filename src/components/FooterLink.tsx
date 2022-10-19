import { FooterLinkProps } from '../interface/footer-link-props.interface';

const FooterLink = ({ url, text, icon }: FooterLinkProps) => {
  return (
    <span className="flex justify-center pr-4 mb-2 lg:mb-6 lg:justify-start hover:bg-smoke-2">
      {/* If url string includes 'http' (external link), open in new tab */}
      <a
        href={url}
        className="flex flex-row font-bold text-light cursor-pointer rel='noreferrer'"
        target={url?.includes('http') ? '_blank ' : ''}
      >
        {/* If 'icon' property exists in link, display icon  */}
        {icon && <span className="mr-3">{icon}</span>}
        {text}
      </a>
    </span>
  );
};

export default FooterLink;
