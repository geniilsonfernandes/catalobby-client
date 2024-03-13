const TermsAndConditions = () => {
  return (
    <p className="text-sm text-gray-400 ">
      Clicando em <b>Criar minha conta</b>, voce concorda com os{' '}
      <a className=" text-primary-100" href="/login">
        Termos de Serviço
      </a>{' '}
      e os{' '}
      <a className=" text-primary-100" href="/login">
        {' '}
        politicas de privacidade.
      </a>
    </p>
  );
};

export default TermsAndConditions;
