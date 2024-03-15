import { Check } from 'lucide-react';

type HighlightProps = {
  title: string;
  description: string;
};
const Highlight = ({ description, title }: HighlightProps) => {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8  flex-nowrap bg-primary-100/10 flex justify-center items-center rounded text-primary-100/50">
        <Check size={16} className="text-primary-100" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold  text-gray-600  mb-2">{title}</h2>
        <p className="text-xs text-gray-400 mb-3 ">{description}</p>
      </div>
    </div>
  );
};

export default Highlight;
