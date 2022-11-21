import Image from 'next/image';
import React from 'react';

//icon imports
import facebookIcon from './SVGIcons/facebook.svg';
import linkedInIcon from './SVGIcons/linkedin.svg';
import googleIcon from './SVGIcons/google.svg';
import listIcon from './SVGIcons/listIcon.svg';
import closeIcon from './SVGIcons/closeIcon.svg';
import { ButtonVariant } from '../../enum/buttonVariant.enum';

//change fill & outlined hover effect once we know what its supposed to be
//add accessibly focus

//buttonVariants are used for default class styling of each button type.
export const buttonVariants = {
  primary: ` bg-gradient-to-r active:from-secondary-4 active:drop-shadow-none active:to-secondary-4 from-gradient-var-1 to-gradient-var-2 hover:drop-shadow-[0_3px_2px_rgba(0,0,0,0.7)]  text-white font-bold py-2 px-6 m-1 rounded-3xl disabled:from-hue-400 disabled:to-hue-400  disabled:text-white disabled:hover:drop-shadow-none  disabled:cursor-not-allowed`, //cant turn off gradient for other state so have to 'to and from same color for solid'
  secondary: `bg-white  text-primary-2 font-bold  py-2 px-6 m-1 border border-primary-2 hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] rounded-3xl active:drop-shadow-none active:text-white active:bg-secondary-6 disabled:text-white disabled:hover:drop-shadow-none disabled:bg-hue-400 disabled:border-none disabled:cursor-not-allowed`,
  tertiary: `bg-secondary-5  text-white font-bold  py-2 px-6 m-1 hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] rounded-3xl active:drop-shadow-none active:text-white active:bg-primary-2 disabled:text-white disabled:hover:drop-shadow-none disabled:bg-hue-400 disabled:border-none disabled:cursor-not-allowed`,
  quad: `py-2 px-6 m-1 flex flex-col items-center text-primary-1 hover:text-hue-800 active:text-hue-800  group rounded-2xl focus-within:bg-secondary-1  focus-within:border-primary-1 focus-within:border-4 focus-within:text-hue-800 active:border-primary-1 border-hue-400 border-4 hover:drop-shadow-[0_3px_2px_rgba(0,0,0,0.7)] hover:border-2 hover:primary-1 active:border-4  hover:bg-secondary-1 active:bg-secondary-1 text-center border bg-white active:font-bold`,
  simple:
    'flex flex-row  items-center border-[2px] rounded-full px-6 py-[10px] bg-transparent text-black  m-1  rounded-3xl  hover:underline hover:underline-offset-2 flex space-x-2',
  iconOnly: 'border border-black rounded-full p-1 leading-none m-1 ',
  calendarDataSelector: 'bg-secondary-1 border-4 border-primary-1 p-1', //needs to have more styles added to this, but here for future use
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
  clickHandler: () => null,
};

//just to display examples
// export const ReusuableButtonExample = () => (
//   <>
//     <Button icon="facebook" variant="iconOnly"></Button>
//     <Button variant="iconOnly">X</Button>
//     <Button>Default</Button>
//     <Button variant="primary">primary</Button>
//
//     <Button variant="secondary">secondary</Button>
//
//     <Button variant="simple">simple</Button>
//     <Button variant="simple" icon="google">
//       simple with icon
//     </Button>
//   </>
// );

export default Button;
