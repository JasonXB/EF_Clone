import Image from 'next/image';
import React from 'react';

//icon imports
import facebookIcon from './SVGIcons/facebook.svg';
import linkedInIcon from './SVGIcons/linkedin.svg';
import googleIcon from './SVGIcons/google.svg';

//once theme is configured for colors, delete this
//TempColors{
//   magenta: '#CE1982',
//   sunset: '#ED493D',
//   darkMagenta: '#bb0c5c',
//   lightSunset: '#ed913d',
//}

//swap out "[#colors]" once theme configure is in place
//change fill & outlined hover effect once we know what its supposed to be
//add accessibly focus

//buttonVariants are used for default class styling of each button type.
export const buttonVariants = {
  primary: `bg-gradient-to-r from-[#CE1982] to-[#ED493D]  hover:from-[#bb0c5c] hover:to-[#ed913d] text-white font-bold py-2 px-6 m-1 rounded-3xl disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed`,
  secondary: `bg-transparent hover:bg-gradient-to-r hover:from-[#CE1982] hover:to-[#ED493D]  text-[#CE1982] font-bold hover:text-white py-2 px-6 m-1 border border-[#CE1982] hover:border-transparent rounded-3xl  disabled:text-slate-300 disabled:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed`,
  tertiary:
    'bg-transparent text-black  py-2 px-6 m-1  rounded-3xl  border border-black hover:underline hover:underline-offset-2 flex space-x-4',
  primaryUnselected: `bg-slate-300 hover:bg-gradient-to-r hover:from-[#CE1982] hover:to-[#ED493D] hover:opacity-50 text-white font-bold py-2 px-6 m-1 rounded-3xl disabled:bg-slate-400 disabled:opacity-50 disabled:cursor-not-allowed`,
  secondaryUnselected: `bg-transparent hover:bg-gradient-to-r hover:from-[#CE1982] hover:to-[#ED493D] hover:opacity-50 text-slate-300 font-bold hover:text-white py-2 px-6 m-1 border border-slate-300 hover:border-transparent rounded-3xl disabled:text-slate-300 disabled:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed`,
  iconOnly: 'border border-black rounded-full p-1 leading-none m-1 ',
};

type ButtonProps = {
  id: string;
  children?: string;
  className: string;
  type: 'button' | 'submit';
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primaryUnselected'
    | 'secondaryUnselected'
    | 'iconOnly';
  disabled: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: 'facebook' | 'linkedIn' | 'google';
};

const Button = ({ ...props }: ButtonProps) => {
  //feeds variant type into class
  const defaultClassName = buttonVariants[props.variant];
  const icons = {
    facebook: ['facebook', facebookIcon],
    linkedIn: ['linkedIn', linkedInIcon],
    google: ['google', googleIcon],
  };

  return (
    <button
      id={props.id}
      type={props.type}
      className={defaultClassName.concat(' ', props.className)} //allows possibility to adjust button style even more from the default variant styles
      disabled={props.disabled}
      onClick={props.clickHandler}
    >
      {props.icon ? (
        <span className={'mx-0.5'}>
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
export const ReusuableButtonExample = () => (
  <>
    <Button icon="facebook" variant="iconOnly"></Button>
    <Button variant="iconOnly">X</Button>
    <Button>Default</Button>
    <Button variant="primary">primary</Button>
    <Button variant="primaryUnselected">primary unselected</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="secondaryUnselected">secondary unselected</Button>
    <Button variant="tertiary">tertiary</Button>
    <Button variant="tertiary" icon="google">
      tertiary with icon
    </Button>
  </>
);

export default Button;
