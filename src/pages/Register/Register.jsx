import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form)
    // Password verification
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }
 
    console.log({ name, email, photoURL, password });
   
    alert("Registration successful!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto flex-grow">
        <h2 className="text-3xl my-10 text-center font-semibold">Register</h2>
        <form
        className="md:w-3/4 lg:w-1/2 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 p-7 shadow-lg rounded-lg"
        onSubmit={handleRegister}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Photo URL</span>
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Photo URL"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Confirm Password</span>
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="input input-bordered"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="form-control mt-6">
          <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
            Register
          </button>
        </div>
      </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            className="bg-gradient-to-r from-pink-400 to-violet-600 bg-clip-text text-transparent font-bold"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;


