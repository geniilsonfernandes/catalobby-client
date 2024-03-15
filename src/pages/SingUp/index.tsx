import Brand from '@/components/Brand';
import Highlight from '@/components/Highlight';
import Testemunhais from '@/components/Testemunhais';
import RegisterForm from '@/components/forms/Register';
import RegisterSuccess from '@/components/forms/Success';
import { useState } from 'react';

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
          <Testemunhais
            description="Acme Inc “This library has saved me countless hours of work and helped me deliver stunning
        designs to my clients faster than ever before.”"
            user={{
              name: 'Alexandre',
              role: 'Desenvolvedor'
            }}
          />
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
