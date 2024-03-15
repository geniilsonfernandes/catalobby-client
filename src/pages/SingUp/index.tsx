import Brand from '@/components/Brand';
import RegisterForm from '@/components/forms/Register';
import RegisterSuccess from '@/components/forms/Success';
import { Check } from 'lucide-react';
import { useState } from 'react';

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

const SingUp = () => {
  const [sucess, setSucess] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-screen">
      <div className="w-1 sm:w-6/12 bg-gray-50 relative hidden sm:flex justify-center">
        <div className="z-10 w-8/12 p-4 sm:p-8 relative h-full flex flex-col justify-between overflow-hidden space-y-8">
          <Brand />
          <div className="space-y-8 ">
            <Highlight
              description="Dê vida à sua ideia com as ferramentas necessárias para comecar a vender on-line."
              title="Comece a vender on-line"
            />
            <Highlight
              description="Não são necessárias habilidades técnicas."
              title="Comece em minutos"
            />
          </div>
          <div className="w-full min-h-24 bg-gray-100 rounded-lg border border-gray-200 p-4">
            <p className="text-md text-gray-400 mb-3">
              Acme Inc “This library has saved me countless hours of work and helped me deliver
              stunning designs to my clients faster than ever before.”
            </p>
            <div className="text-sm">Sofia Davis</div>
          </div>
        </div>
      </div>
      <div className="text-3xl p-4 py-8 w-100 sm:p-8 sm:w-6/12 flex flex-col justify-center  items-center space-y-8 ">
        <div className="">
          <div className="sm:hidden block  mb-8">
            <Brand />
          </div>

          {sucess ? <RegisterSuccess /> : <RegisterForm onSuccess={() => setSucess(true)} />}
        </div>
      </div>
    </div>
  );
};

export default SingUp;
