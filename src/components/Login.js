import React from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "./constants";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="fixed" src={NETFLIX_BG_IMG} alt="app-logo" />
      </div>
      <form className=" p-12 text-white bg-black absolute rounded-lg my-36 w-3/12 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="font-bold text-3xl">Sign In</h1>
        <input
          type="text"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Enter your Email"
        />
        <input
          type="password"
          className="p-4 my-4 w-full bg-gray-700"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        <p className="">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
