import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'h-12 rounded-md transition duration-300 px-4 text-sm disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        fill: 'bg-primary-100 hover:bg-primary-200/70 text-gray-100',
        outline:
          'border border-primary-100 text-primary-100 hover:bg-primary-200/70 hover:text-gray-100',
        ghost: 'bg-transparent text-primary-100 hover:bg-primary-200/70 hover:text-gray-100'
      },
      width: {
        full: 'w-full',
        auto: 'w-auto'
      }
    },
    defaultVariants: {
      variant: 'fill',
      width: 'full'
    }
  }
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

type ButtonProps = {
  variant?: 'fill' | 'outline' | 'ghost';
  width?: 'full' | 'auto';
} & ButtonVariantsProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant: props.variant, width: props.width })} {...props} />
  );
};

export default Button;
