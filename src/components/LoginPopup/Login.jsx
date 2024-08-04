import { useState } from "react";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Login = ({ handleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-10 h-10 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-cyan-200 ml-8"
        onClick={() => (window.location.href = "/")}
      >
        <img src={Logo} alt="logo" className="w-full h-full" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-white  mb-4 "
      >
        Smart Kernet
      </motion.h1>
      <h1 className="text-3xl uppercase text-white font-extrabold text-center mb-4 ">
        Login
      </h1>
      <p className="text-center text-white font-normal ">Enjoy your space!</p>
      <form className="flex flex-col gap-3 mt-20">
        <div>
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <div className="relative">
            <input
              className="input pr-8"
              placeholder="Enter your password"
              id="password"
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? (
              <FaEye
                className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
      </form>
      <button className="primary-btn">Continue</button>
      <p className="text-center text-white text-sm my-3">or login with</p>
      <div className="flex gap-6 justify-center">
        <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
          <FcGoogle className="text-3xl" />
        </div>
        {/* <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
          <FaLinkedinIn className="text-2xl text-white" />
        </div> */}
      </div>
      <p
        className="text-center text-white text-sm my-3 hover:text-lime-100 cursor-pointer text-shadow"
        onClick={handleSignIn}
      >
        No Account? Create Signup here
      </p>
    </div>
  );
};

export default Login;
