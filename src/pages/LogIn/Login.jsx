import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow ">
        <div className="container mx-auto ">
          <h2 className="text-3xl my-10 text-center font-semibold">Login</h2>
          <form className=" md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-br from-pink-300 to-purple-500 p-7 shadow-md rounded-lg">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-lg">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account{" "}
            <Link
              className="bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent font-bold"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer className="mt-auto"></Footer>
    </div>
  );
};

export default Login;
