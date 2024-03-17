import Button from '@/components/ui/Button';
import Input, * as InputWrapper from '@/components/ui/Input';
import { routeNames } from '@/routes/routeNames';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const schema = z.object({
  email: z.string().min(1, 'Email obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Senha obrigatória')
});

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (_: z.infer<typeof schema>) => {
    onSuccess();
  };

  return (
    <div className="w-full max-w-md">
      <div className="space-y-3 py-8">
        <InputWrapper.Root variant={errors?.email ? 'error' : 'default'}>
          <Input placeholder="Email" type="email" {...register('email')} />
          <InputWrapper.HelperText>{errors?.email?.message}</InputWrapper.HelperText>
        </InputWrapper.Root>
        <InputWrapper.Root variant={errors?.email ? 'error' : 'default'}>
          <Input placeholder="Senha" type="password" {...register('password')} />
          <InputWrapper.HelperText>{errors?.password?.message}</InputWrapper.HelperText>
        </InputWrapper.Root>
        <Button width="full" onClick={handleSubmit(onSubmit)}>
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
