import EfLogo from './EfLogo';
import FooterLink from './FooterLink';
import SocialMediaButtons from './SocialMediaButtons';
import { FooterLinkProps } from '../../interface/footer-link-props.interface';

const footerLinks: FooterLinkProps[] = [
  { efLogo: 'EF LOGO' },
  {
    links: [
      { text: 'Get Involved', url: '/' },
      { text: 'About Us', url: '../pages/about-us.tsx' },
      { text: 'Contact', url: '../pages/about-us.tsx' },
      { text: 'Login', url: '../pages/about-us.tsx' },
    ],
  },
  {
    links: [
      { text: 'Become A Mentor', url: '/' },
      { text: 'Become A Mentee', url: '/' },
      { text: 'Support Our Work', url: '/' },
      { text: 'Suggest A Program', url: '/' },
    ],
  },
  {
    links: [
      { text: 'Facebook', url: '/' },
      { text: 'Instagram', url: '/' },
      { text: 'LinkedIn', url: '/' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-center text-gray-600 bg-gray-100 lg:text-left">
      <div className="py-10 mx-6 text-center md:text-left">
        <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((column, i) => {
            return (
              <div key={i}>
                {i === 0 && <div>{column.efLogo} </div>}
                {column.links?.map((link, i) => {
                  return (
                    <div key={i}>
                      <p className="mb-4">
                        <a href={link.url} className="text-gray-600">
                          {link.text}
                        </a>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="text-center text-gray-600 bg-gray-100 lg:text-left">
//     {/* EF Logo */
}
//   <div className="py-10 mx-6 text-center md:text-left">
//     <div className="grid gap-8 grid-1 md:grid-cols-2 lg:grid-cols-4">
//     <div className="">

//     {footerLinks.map((column, i) => { */}
//        {i==0 && (
//           return (
//             <h6 className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
//             {column.efLogo}
//             </h6>
//           )}
//            if (i==1) {
//               column.links?.map((link) => {
//                 return (
//                   <div>
//                 <p className="mb-4">
//                 <a href={link.url} className="text-gray-600">{link.text}</a>
//               </p>
//               </div>
//                 )
//               }

//             )
//           }
//         }})}
//         </div>

//         <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
//           Useful links
//         </h6>
//         <p className="mb-4">
//           <a href="#!" className="text-gray-600">Pricing</a>
//         </p>
//         <p className="mb-4">
//           <a href="#!" className="text-gray-600">Settings</a>
//         </p>
//         <p className="mb-4">
//           <a href="#!" className="text-gray-600">Orders</a>
//         </p>
//         <p>
//           <a href="#!" className="text-gray-600">Help</a>
//         </p>
//       {/* Social Media  */}
//       <div className="">
//         <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
//           Follow Us On Social Media
//         </h6>
//         <p className="flex items-center justify-center mb-4 md:justify-start">
//         <a href="#!" className="mr-6 text-gray-600">
//         <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
//           className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 320 512">
//           <path fill="currentColor"
//             d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
//           </path>
//         </svg>
//         Facebook
//       </a>
//         </p>
//         <p className="flex items-center justify-center mb-4 md:justify-start">
//           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
//             className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512">
//             <path fill="currentColor"
//               d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
//             </path>
//           </svg>
//           Instagram
//         </p>
//         <p className="flex items-center justify-center mb-4 md:justify-start">
//           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
//             className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512">
//             <path fill="currentColor"
//               d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
//             </path>
//           </svg>
//           + 01 234 567 88
//         </p>
//         <p className="flex items-center justify-center md:justify-start">
//           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
//             className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512">
//             <path fill="currentColor"
//               d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
//             </path>
//           </svg>
//           + 01 234 567 89
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="p-6 text-center">
//     <span>Empowered Futures Copyright 2022</span>
//   </div>
// </footer>
