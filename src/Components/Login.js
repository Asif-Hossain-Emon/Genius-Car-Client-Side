import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../src/assets/images/login/login.svg";
import { AuthContext } from "./Context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        if (user.uid) {
          alert("Successfully Logged In.");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <img src={image} alt=""></img>
        </div>
        <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className="text-center mt-5">
              New in Genius Car?{" "}
              <Link to="/register" className=" text-orange-600 font-bold">
                {" "}
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
