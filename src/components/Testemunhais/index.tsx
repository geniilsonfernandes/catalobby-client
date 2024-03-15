import { User2 } from 'lucide-react';

type TestemunhaisProps = {
  description: string;
  user?: {
    name: string;
    role: string;
  };
};

const Testemunhais = ({ description, user }: TestemunhaisProps) => {
  return (
    <div className="w-full min-h-24 bg-gray-100 rounded-lg border border-gray-200 p-4">
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <hr className="mb-3 w-6" />
      {user && (
        <div className="text-sm text-gray-400 flex items-center">
          <span className="w-8 h-8  flex-nowrap bg-primary-100/10 flex justify-center items-center rounded">
            <User2 size={16} className="text-primary-100 " />
          </span>
          <div className="ml-2">
            <div className="text-sm text-gray-600">{user.name}</div>
            <div className="text-xs text-gray-400">{user.role}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testemunhais;
