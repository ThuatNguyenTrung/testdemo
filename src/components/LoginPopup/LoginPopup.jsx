import { useRef, useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import { motion } from "framer-motion";

const LoginPopup = () => {
  const [showSignin, setShowSignin] = useState(false);
  const handleSignIn = () => {
    setShowSignin(!showSignin);
  };

  const loginPopupRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target === loginPopupRef.current) {
      setShowSignin(false);
    }
  });
  return (
    <>
      <div className="" ref={loginPopupRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className=" bg-primary/70 backdrop-blur-md  w-full h-full"
        >
          {showSignin ? (
            <Signin handleSignIn={handleSignIn} />
          ) : (
            <Login handleSignIn={handleSignIn} />
          )}
        </motion.div>
      </div>
    </>
  );
};
export default LoginPopup;
