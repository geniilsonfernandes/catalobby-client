import { BadgeCheck } from 'lucide-react';

type SuccessProps = {
  title?: string;
  description?: string;
  callbackText?: string;
  callback?: () => void;
};
const SuccessComponent = ({ callback, callbackText, description, title }: SuccessProps) => {
  return (
    <div className="w-full  max-w-md">
      <div className="w-12 h-12 bg-primary-100/10 flex justify-center items-center rounded text-primary-100/50 mb-9">
        <BadgeCheck />
      </div>
      <div className="text-2xl font-semibold text-gray-600">{title}</div>
      <div className="text-sm text-gray-400">
        <span>{description}</span>
        <button onClick={callback} className="ml-1 text-primary-100">
          {callbackText}
        </button>
      </div>
    </div>
  );
};

export default SuccessComponent;
