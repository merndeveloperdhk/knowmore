const Login = () => {
  return (
    <div className="w-full md:max-w-md p-8 space-y-3 rounded-xl bg-white  ">
      <div className="space-y-6 ">
        <form className="space-y-4 bg-white">
          <div className=" text-sm mb-2 bg-white  ">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username or email"
              className="input_login"
            />
          </div>
          <div className="space-y-1 text-sm mb-2 bg-white">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="input_login"
            />
          </div>
          <button className="block w-full  btnColor">
            Sign in
          </button>
          <div className="flex justify-center text-sm  py-2 bg-white">
            <a rel="noopener noreferrer" href="#" className="text-sky-500 hover:text-sky-600">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <div className="divider bg-white"></div>
      <div className="flex items-center  space-x-1 ">
        <p className="px-3 text-sm text-gray-400"></p>
      </div>
      <div className="flex justify-center space-x-4 bg-white">
        <button className="block   btnColor">
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
