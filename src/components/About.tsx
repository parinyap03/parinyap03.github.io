
import Card from "./Social";
import charact from "../assets/character.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div id="home" className="h-screen p-[50px] text-white ">
        <div className="text-3xl font-bold uppercase">about home</div>

        <div className=" flex  p-10 justify-evenly items-center">
          {/* <div className="p-[200px] rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div> */}
          {/* <div className="flex-col"> */}
          <motion.img
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src={charact}
            alt="charact"
            className="w-1/3 "
          />
          {/* <Social />
          </div> */}

          <div className=" flex flex-col justify-start ">
            <div className="p-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
