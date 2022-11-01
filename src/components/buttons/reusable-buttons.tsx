import Image from 'next/image';
import React from 'react';

//icon imports
import facebookIcon from './SVGIcons/facebook.svg';
import linkedInIcon from './SVGIcons/linkedin.svg';
import googleIcon from './SVGIcons/google.svg';
import listIcon from './SVGIcons/listIcon.svg';
import closeIcon from './SVGIcons/closeIcon.svg';
import { ButtonVariant } from '../../enum/buttonVariant.enum';

//   darkMagenta: '#bb0c5c',
//   lightSunset: '#ed913d',

//change fill & outlined hover effect once we know what its supposed to be
//add accessibly focus

//buttonVariants are used for default class styling of each button type.
export const buttonVariants = {
  primary: `bg-gradient-to-r from-secondary-1 to-tertiary-2  hover:from-[#bb0c5c] hover:to-[#ed913d] text-white font-bold py-2 px-6 m-1 rounded-3xl disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed`,
  secondary: `bg-transparent hover:bg-gradient-to-r hover:from-secondary-1 hover:to-tertiary-2   text-secondary-1 font-bold hover:text-white py-2 px-6 m-1 border border-secondary-1 hover:border-transparent rounded-3xl  disabled:text-slate-300 disabled:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed`,
  tertiary:
    'flex flex-row  items-center border-[2px] rounded-full px-6 py-[10px] bg-transparent text-black  m-1  rounded-3xl  hover:underline hover:underline-offset-2 flex space-x-2',
  primaryUnselected: `bg-slate-300 hover:bg-gradient-to-r hover:from-secondary-1 hover:to-tertiary-2 hover:opacity-50 text-white font-bold py-2 px-6 m-1 rounded-3xl disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed`,
  secondaryUnselected: `bg-transparent hover:bg-gradient-to-r hover:from-secondary-1 hover:to-tertiary-2 hover:opacity-50 text-slate-300 font-bold hover:text-white py-2 px-6 m-1 border border-slate-300 hover:border-transparent rounded-3xl disabled:text-slate-300 disabled:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed`,
  iconOnly: 'border border-black rounded-full p-1 leading-none m-1 ',
};
type customSVG = React.SVGProps<SVGSVGElement>;

type ButtonProps = {
  id: string;
  children?: string | customSVG | JSX.Element | any; //any temp fix need to look into further
  className: string;
  type: 'button' | 'submit';
  variant: `${ButtonVariant}`;
  disabled: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: 'facebook' | 'linkedIn' | 'google' | 'listIcon' | 'closeIcon';
  ariaLabel?: string;
};

const Button = ({ ...props }: ButtonProps) => {
  //feeds variant type into class
  const defaultClassName = buttonVariants[props.variant];
  const icons = {
    facebook: ['facebook', facebookIcon],
    linkedIn: ['linkedIn', linkedInIcon],
    google: ['google', googleIcon],
    listIcon: ['listIcon', listIcon],
    closeIcon: ['closeIcon', closeIcon],
  };

  return (
    <button
      id={props.id}
      type={props.type}
      className={defaultClassName.concat(' ', props.className)} //allows possibility to adjust button style even more from the default variant styles
      disabled={props.disabled}
      onClick={props.clickHandler}
      aria-label={props.ariaLabel}
    >
      {props.icon ? (
        <span className={'mx-0.5 flex'}>
          <Image
            src={icons[props.icon][1]}
            alt={icons[props.icon][0]}
            width={20}
            height={20}
          />
        </span>
      ) : null}
      <span>{props.children}</span>
    </button>
  );
};

Button.defaultProps = {
  id: '1',
  type: 'button',
  variant: 'primary',
  disabled: false,
  className: '',
  clickHandler: () => console.log(`Remember to pass handler Fn`),
};

//just to display examples
// export const ReusuableButtonExample = () => (
//   <>
//     <Button icon="facebook" variant="iconOnly"></Button>
//     <Button variant="iconOnly">X</Button>
//     <Button>Default</Button>
//     <Button variant="primary">primary</Button>
//     <Button variant="primaryUnselected">primary unselected</Button>
//     <Button variant="secondary">secondary</Button>
//     <Button variant="secondaryUnselected">secondary unselected</Button>
//     <Button variant="tertiary">tertiary</Button>
//     <Button variant="tertiary" icon="google">
//       tertiary with icon
//     </Button>
//   </>
// );

export default Button;
