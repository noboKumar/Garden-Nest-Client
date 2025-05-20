import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="lg:w-2/10 md:w-5/10 space-y-5 shadow md:mx-auto mx-2 my-20 p-10 rounded-2xl border-2 border-base-300">
      <Helmet>
        <title>Login Now</title>
      </Helmet>
      <h1 className="text-4xl font-semibold">Login Now!</h1>
      {/* email */}
      <form  className="space-y-4">
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            
            name="email"
            type="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        {/* password */}
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            name="password"
            required
            placeholder="Password"
          />
          <button
            className="cursor-pointer"
            type="button"
            onClick={() => {
            //   setShowPassword(!showPassword);
            }}
          >
            {/* {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />} */}
          </button>
        </label>
        <Link to={"/forgetPassword"}>
          <p className="underline text-gray-500 cursor-pointer active:text-primary py-2">
            Forget Password?
          </p>
        </Link>
        {/* login button */}
        <button className="btn flex btn-secondary text-white">Login</button>
        {/* google login */}
        <button
          type="button"
        //   onClick={handleGoogleLogIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p>
          Don't Have an Account?{" "}
          <Link className="underline text-primary" to={"/register"}>
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
