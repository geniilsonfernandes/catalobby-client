import { BadgeCheck } from 'lucide-react';

const RegisterSuccess = () => {
  return (
    <div className="w-full  max-w-md">
      <div className="w-12 h-12 bg-primary-100/10 flex justify-center items-center rounded text-primary-100/50 mb-9">
        <BadgeCheck />
      </div>
      <div className="text-2xl font-semibold text-gray-600">Conta criada com sucesso</div>
      <div className="text-sm text-gray-400">
        <span>Voltar para o login?</span>
        <a className="ml-1 text-primary-100" href="/login">
          login
        </a>
      </div>
    </div>
  );
};

export default RegisterSuccess;
