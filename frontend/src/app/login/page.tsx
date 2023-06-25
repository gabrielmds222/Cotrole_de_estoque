const Login = () => {
  return (
    <form className="bg-white px-12 py-8 rounded max-w-sm mx-auto drop-shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Login</h2>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Digite seu email"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Senha:
        </label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          placeholder="Digite sua senha"
        />
      </div>
      <div className="flex items-center justify-center pt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          Entrar
        </button>
      </div>
      <div className="pt-6 ">
        <p className="text-gray-500 text-sm cursor-pointer hover:text-sky-700 hover:underline">
          <a href="/cadastro">Ainda não tem conta? Cadastre-se aqui</a>
        </p>
      </div>
    </form>
  );
};

export default Login;