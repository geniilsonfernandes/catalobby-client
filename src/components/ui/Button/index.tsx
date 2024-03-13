type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button
      className="w-full bg-primary-100 px-4 text-gray-100 text-base h-12 rounded-md hover:bg-primary-200 transition duration-300 focus:outline-none placeholder:text-gray-300 placeholder:text-sm"
      {...props}
    />
  );
};

export default Button;
