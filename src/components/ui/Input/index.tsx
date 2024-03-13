import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === 'password';
  return (
    <div className="w-full bg-gray-100 h-12 px-2 flex items-center rounded-md">
      <input
        {...props}
        className="flex-1 px-1 bg-transparent text-gray-500 text-base  rounded-md  focus:outline-none  placeholder:text-gray-300 placeholder:text-sm"
        type={isPassword ? (showPassword ? 'text' : 'password') : props.type}
      />

      {isPassword && (
        <button
          className="w-8 h-8  hover:bg-gray-200 flex justify-center items-center rounded"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Eye size={16} className="text-gray-500" />
          ) : (
            <EyeOff size={16} className="text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
