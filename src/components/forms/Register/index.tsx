import TermsAndConditions from '@/components/TermsAndConditions';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { routeNames } from '@/routes/routeNames';
import { Link } from 'react-router-dom';

const RegisterForm = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <div className=" w-full  max-w-md">
      <div className="text-2xl font-semibold text-gray-600">Crie sua conta</div>
      <div className="text-sm text-gray-400">Preencha todos os campos para criar sua conta</div>
      <div className="space-y-3 py-8">
        <Input placeholder="Nome e sobrenome" type="text" id="name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button width="full" onClick={onSuccess}>
          Criar minha conta
        </Button>

        <TermsAndConditions />
      </div>
      <div className="text-sm text-gray-400">
        <span>Já tem uma conta?</span>
        <Link to={routeNames.login} className="ml-1 text-primary-100">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
