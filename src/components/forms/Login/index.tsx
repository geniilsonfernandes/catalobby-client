import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { routeNames } from '@/routes/routeNames';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <div className="w-full max-w-md">
      <div className="space-y-3 py-8">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button width="full" onClick={onSuccess}>
          Login
        </Button>
      </div>
      <div className="text-sm text-gray-400">
        <span>Ainda não tem uma conta?</span>
        <Link to={routeNames.signup} className="ml-1 text-primary-100">
          Registrar
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
