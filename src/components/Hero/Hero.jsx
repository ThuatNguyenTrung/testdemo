import Img from "../../assets/img.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <motion.div
        className=" bg-white backdrop-blur-md w-full h-full col-span-2 container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="md:grid grid-cols-2 relative">
          <div className="flex flex-col mt-40 ml-16 space-y-8">
            <motion.h1
              className="uppercase  text-5xl font-semibold  text-black "
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              vibrant moments
            </motion.h1>
            <motion.h1
              className="uppercase  text-9xl font-semibold  text-black "
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
                duration: 0.4,
              }}
            >
              smart
            </motion.h1>
            <motion.h1
              className="uppercase   text-5xl font-semibold text-black "
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              innovation
            </motion.h1>
          </div>
          <div className="">
            <motion.img
              src={Img}
              alt=""
              className=" w-full relative z-30  top-48 -right-8"
              initial={{ opacity: 0, x: 100, scale: 0.2 }}
              whileInView={{ opacity: 1, x: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            />
            {/* <div className="absolute top-24 left-1/2 border-[20px] border-cyan-200 rounded-full h-[400px] w-[400px] glowing-shadow"></div> */}
          </div>
        </div>
        <motion.p
          className=" text-black mt-32 underline "
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          *Smart Kerel is a leading distributor of smart electronic devices,
          providing modern and convenient solutions for your home. If you
          haven't experienced our products yet, visit www.congty-xyz.com to
          explore get your today.
        </motion.p>
      </motion.div>
    </>
  );
};
export default Hero;
