import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between px-3 py-3 text-white bg-maple-normal items-center">
      <h1 className="text-3xl font-bold">Maple Hotel Booking</h1>
      <div>
        <Link to="/sign-in">
          <button
            type="button"
            className=" text-white btn mr-2 hover:bg-maple-dark text-xl bg-maple-light"
          >
            Sign In
          </button>
        </Link>
        <Link to="/sign-up">
          <button
            type="button"
            className=" text-white btn hover:bg-maple-dark text-xl bg-maple-light"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
