import Brand from '@/components/Brand';
import LoginForm from '@/components/forms/Login';

const LogIn = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center min-h-screen">
      <div className="text-3xl p-4 py-8 w-100 sm:p-8 sm:w-6/12 flex flex-col justify-center  items-center space-y-8 ">
        <Brand />

        <LoginForm onSuccess={() => {}} />
      </div>
    </div>
  );
};

export default LogIn;
