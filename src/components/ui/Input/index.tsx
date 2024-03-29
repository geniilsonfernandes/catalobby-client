import { cva } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';
import { forwardRef, useState } from 'react';

type InputLabelProps = {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

type HelperTextProps = {
  children: React.ReactNode;
};

const inputVariants = cva(
  'flex-1 px-1 bg-transparent text-base rounded-md placeholder:text-sm outline-none',
  {
    variants: {
      variant: {
        default: 'text-gray-500 placeholder:text-gray-500',
        error: 'text-red-500 placeholder:text-red-500',
        success: 'text-green-500 placeholder:text-green-500'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

type Variants = 'default' | 'error' | 'success';

type InputProps = {
  variant?: Variants;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';

  return (
    <div className="w-full bg-gray-100 h-12 px-2 flex items-center rounded-md">
      <input
        {...props}
        className={inputVariants({ variant: props.variant })}
        type={isPassword ? (showPassword ? 'text' : 'password') : props.type}
        ref={ref} // Encaminha a ref para o elemento input interno
      />

      {isPassword && (
        <button
          className="w-8 h-8  hover:bg-gray-200 flex justify-center items-center rounded"
          onClick={() => setShowPassword(!showPassword)}
          name="password-toggle-button"
          aria-label="toggle password">
          {showPassword ? (
            <Eye size={16} className="text-gray-500" />
          ) : (
            <EyeOff size={16} className="text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
});

Input.displayName = 'Input';

const RootVariants = cva('space-y-2 w-full', {
  variants: {
    variant: {
      default: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type InputRootProps = {
  variant?: Variants;
} & React.HTMLAttributes<HTMLDivElement>;

export const Root = (props: InputRootProps) => {
  return <div className={RootVariants({ variant: props.variant })} {...props} />;
};

export const Label = (props: InputLabelProps) => {
  return <label className="text-sm text-inherit" {...props} />;
};

export const HelperText = ({ children }: HelperTextProps) => {
  return <div className="text-xs text-inherit">{children}</div>;
};

export default Input;
