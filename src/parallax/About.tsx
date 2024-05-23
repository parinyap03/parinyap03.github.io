import C2 from "@/assets/character/c2.png";
import "./Style.css";
// import "./AboutStyle.css";

import {
  motion
} from "framer-motion";
// interface ParallaxProps {
//   children: string;
//   baseVelocity: number;
// }

// function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   // return (
//   //   <div className="parallax">
//   //     <motion.div className="scroller" style={{ x }}>
//   //       {[...Array(15)].map((_, i) => (
//   //         <span key={i}>{children} </span>
//   //       ))}
//   //     </motion.div>
//   //   </div>
//   // );
//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//         <span>{children} </span>
//       </motion.div>
//     </div>
//   );
// }
const About = () => {
  return (
    <div className="z-40 w-full  relative sm:mt-[0px]">
   
      <div className=" text-neutral-300   text-center">
  
        <div className="flex-col sm:h-full sm:p-10 md:flex sm:flex  justify-center lg:flex lg:mt-[100px] items-center w-full lg:h-[700px] md:mt-[10px] 2xl:mt-[0px] xl:mt-0 ">
          <motion.img
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src={C2}
            alt=""
            className="lg:w-[350px] sm:w-[250px] w-[200px]  m-auto"
          />

          <div className="article flex-col justify-center items-center  text-balance">
            <div className="px-10 lg:text-6xl sm:text-[45px]">
              My name is <span className="text-red-400">Parinyaporn Saengnolad</span>
            </div>

             <p className="px-10 p-10 lg:text-xl sm:text-sm">
              I am a computer science student from College of Computing Khon Kaen University. Who have been learning programming for 3 years
              and always ready to learn new things. I am interested in web development and like to create a minimal and clean design. 
            </p> 
             
          </div>
        </div>
      </div>
      {/* <div className="absolute w-full h-[25%] bottom-0 left-0 bg-gradient-to-t from-[#06141D] to-transparent z-40"></div> */}
    </div>

   
  );
};

export default About;
