import Button from '@/components/ui/Button';
import Input, * as InputWrapper from '@/components/ui/Input';
import { routeNames } from '@/routes/routeNames';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().min(1, 'Email obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Senha obrigatória').min(6, 'Senha deve ter pelo menos 6 caracteres')
});

export type FormData = z.infer<typeof schema>;

const RegisterForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

    onSuccess();
  };

  return (
    <div className=" w-full  max-w-md">
      <div className="text-2xl font-semibold text-gray-600">Crie sua conta</div>
      <div className="text-sm text-gray-400">Preencha todos os campos para criar sua conta</div>
      <div className="space-y-3 py-8">
        <InputWrapper.Root variant={errors?.name ? 'error' : 'default'}>
          <Input
            placeholder="Nome e sobrenome"
            type="text"
            id="name"
            {...register('name')}
            aria-invalid={errors?.name ? 'true' : 'false'}
          />
          {errors?.name?.message && (
            <InputWrapper.HelperText>{errors?.name?.message}</InputWrapper.HelperText>
          )}
        </InputWrapper.Root>
        <InputWrapper.Root variant={errors?.email ? 'error' : 'default'}>
          <Input
            placeholder="Email"
            type="text"
            id="name"
            {...register('email')}
            aria-invalid={errors?.email ? 'true' : 'false'}
          />
          {errors?.email?.message && (
            <InputWrapper.HelperText>{errors?.email?.message}</InputWrapper.HelperText>
          )}
        </InputWrapper.Root>
        <InputWrapper.Root variant={errors?.password ? 'error' : 'default'}>
          <Input
            placeholder="Senha"
            type="text"
            id="name"
            {...register('password')}
            aria-invalid={errors?.password ? 'true' : 'false'}
          />
          {errors?.password?.message && (
            <InputWrapper.HelperText>{errors?.password?.message}</InputWrapper.HelperText>
          )}
        </InputWrapper.Root>
        <Button width="full" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Criar conta'}
        </Button>

        {/* <TermsAndConditions /> */}
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
