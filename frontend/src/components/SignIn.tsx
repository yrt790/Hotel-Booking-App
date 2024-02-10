import { Link } from 'react-router-dom';

const SignIn = () => {
  const onEyeClicked = () => {
    const inputField = document.querySelector('#password');

    if (inputField?.getAttribute('type') === 'password') {
      inputField.setAttribute('type', 'text');
    } else if (inputField?.getAttribute('type') === 'text') {
      inputField.setAttribute('type', 'password');
    }
  };

  return (
    <section className="w-1/2 mx-auto text-center">
      <h2 className="text-4xl font-bold pt-2">Sign In</h2>
      <form className="mt-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg lg:text-xl xl:text-2xl">
              Email
            </span>
          </div>
          <input type="email" className="input" required></input>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg lg:text-xl xl:text-2xl">
              Password
            </span>
          </div>
          <div className="w-[105%] flex">
            <input
              type="password"
              className="input w-[100%]"
              id="password"
              required
            ></input>
            <button
              className="px-1 w-[5%]"
              type="button"
              onClick={onEyeClicked}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="50"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </button>
          </div>
        </label>
        <button className="btn w-full mt-6 text-lg lg:text-2xl xl:text-3xl bg-maple-normal hover:bg-maple-light text-white">
          Sign In
        </button>
      </form>
      <section className="mt-5">
        <p className="text-lg lg:text-xl xl:text-2xl">
          Don't Have an Account?{' '}
          <Link to="/sign-up" className="underline link hover:text-blue-400">
            Create an Account
          </Link>
        </p>
      </section>
    </section>
  );
};
export default SignIn;
