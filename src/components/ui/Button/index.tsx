import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'h-12 rounded-sm transition duration-300 px-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 flex justify-center items-center gap-2',
  {
    variants: {
      variant: {
        fill: 'bg-primary-100 hover:bg-primary-200/70 text-gray-100',
        outline:
          'border border-primary-100 text-primary-100 hover:bg-primary-200/70 hover:text-gray-100',
        ghost: 'bg-transparent text-primary-100 hover:bg-primary-200/70 hover:text-gray-100'
      },
      size: {
        small: 'h-8',
        medium: 'h-12',
        large: 'h-14'
      },
      width: {
        full: 'w-full',
        auto: 'w-auto'
      }
    },
    defaultVariants: {
      variant: 'fill',
      width: 'full',
      size: 'medium'
    }
  }
);

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

type ButtonProps = {
  variant?: 'fill' | 'outline' | 'ghost';
  width?: 'full' | 'auto';
  size?: 'small' | 'medium' | 'large';
} & ButtonVariantsProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonVariants({
        className: props.className,
        variant: props.variant,
        width: props.width,
        size: props.size
      })}
    />
  );
};

export default Button;
