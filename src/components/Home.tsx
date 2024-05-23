
// import ViewBtn from "./ViewBtn";
import img from "../assets/programmer.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div
        id="home"
        className="h-screen py-24  text-white  "
      >

        <div className="flex flex-wrap justify-around items-center  ">
           <motion.div
            initial={{ opacity: 0, x: 64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
            }}
          >
            <div className="text-9xl  font-bold">Portfolio</div>
          </motion.div>
          <motion.img
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src={img}
            alt="programmer"
            className="w-1/3"
          />

        </div>
       
      {/* <div className="absolute w-full h-[25%] bottom-0 left-0 bg-gradient-to-t from-[#06141D] to-transparent z-40"></div> */}
         

        {/* <div className="rounded-full bg-blue-400 w-[100px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> */}
        {/* <div className="card">
          <div className="card-border-top"></div>
          <div className="img"></div>
          <span> Person</span>
          <p className="job"> Job Title</p>
          <button> Click</button>
        </div> */}
      </div>
    </>
  );
};

export default Home;
