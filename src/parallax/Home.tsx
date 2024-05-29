import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import imgfull from "../assets/image-full.jpg";
import imgbt from "../assets/image-bottom.png";
import moon from "@/assets/moon.png";
import "./Style.css";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      setMouseX(pageX);
      setMouseY(pageY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateBackgroundPosition = () => {
    const trackX = (0.5 * mouseX) / 170 + 50;
    const trackY = (4 * mouseY) / 170 + 50;
    return `${trackX}% ${trackY}%`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imgfull})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div className="flex justify-evenly lg:justify-end md:justify-end sm:justify-end font-bold text-white relative z-10 mb-[200px]">
        <motion.h1
          style={{
            y: textY,
            backgroundPosition: calculateBackgroundPosition(),
          }}
          className="title min-[430px]:text-[60px] lg:ml-[300px] lg:text-[120px] md:text-[80px] sm:text-[70px] min-[320px]:text-[40px] min-[320px]:ml-[70px] font-bold"
        >
          PORTFOLIO
        </motion.h1>
        <motion.img
          src={moon}
          style={{ y: moonY }}
          className="lg:w-40 lg:h-40 md:w-40 md:h-40 mt-[-100px] lg:mr-[10px] xl:ml-[80px] opacity-50 min-[320px]:w-[130px] min-[320px]:h-[130px] min-[320px]:ml-[-30px]"
        />
      </motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${imgbt})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-[#06141D] to-transparent z-40"></div>
    </div>
  );
};

export default Home;
