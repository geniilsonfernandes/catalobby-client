import RegisterForm from '@/components/forms/Register';
import RegisterSuccess from '@/components/forms/Success';
import { useState } from 'react';

const SingUp = () => {
  const [sucess, setSucess] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row justify-between min-h-screen">
      <div className="w-100 sm:w-6/12 relative">
        <div className="z-10 bg-gray-50 p-4 sm:p-8  relative h-full flex flex-col justify-between">
          <div className="text-3xl text-gray-600 font-bold"> Catalobby</div>
          <div className="w-full h-48 bg-gray-100 rounded-lg border border-gray-200 p-8">
            <p className="text-md text-gray-400 mb-3">
              Acme Inc “This library has saved me countless hours of work and helped me deliver
              stunning designs to my clients faster than ever before.”
            </p>
            <div className="text-sm">Sofia Davis</div>
          </div>
        </div>
      </div>
      <div className="text-3xl p-4 py-8  w-100  sm:p-8 sm:w-6/12 flex justify-center items-center ">
        {sucess ? <RegisterSuccess /> : <RegisterForm onSuccess={() => setSucess(true)} />}
      </div>
    </div>
  );
};

export default SingUp;
