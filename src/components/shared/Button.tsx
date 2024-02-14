import { twMerge } from 'tailwind-merge';

interface ButtonProps { 
  buttonType: 'primary' | 'secondary' | 'neutral' | 'basic';
  className?: string;
  href?: string;
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  const buttonPatterns = {
    primary: 'bg-primary-400 text-basic-lighter hover:bg-secondary-500 active:bg-secondary-600 duration-200',
    secondary: 'border-solid border-primary-500 border-[1px] text-primary-500 hover:text-basic-lighter hover:bg-primary-500 active:bg-primary-600 duration-200',
    neutral: 'border-solid border-basic-middle border-[1px] text-basic-middle hover:bg-basic-middle hover:text-basic-lighter active:opacity-80 duration-200',
    basic: 'hover:underline underline-offset-4 active:opacity-70 duration-200'
  }
  return (
    <a
      className={twMerge("flex px-4 py-[10px] justify-center items-center leading-6 font-medium", buttonPatterns[props.buttonType], props?.className)}
      href={props?.href || "#"}>
      {props?.children}
    </a>
  )
}
