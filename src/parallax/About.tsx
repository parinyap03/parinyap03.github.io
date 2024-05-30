import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import daysk from "@/assets/sky/daysk.jpg";
import pinktree from "@/assets/sky/pinktree.jpg";
import cpsk from "@/assets/sky/cpsk.jpg";
import smile from "@/assets/sticker/stk-smile.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxText from "./TxtParallax";
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
    <ParallaxText text="About Me"></ParallaxText>
      <div ref={ref} className=" lg:px-[100px] h-screen ">
        <div className="container  mx-auto flex flex-col md:flex-row items-center  md:my-36 justify-around w-full  ">
          
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0, 0, 0, 1],
            }}
            className="flex flex-col w-full lg:w-1/2 justify-center items-start p-4 py-10   "
          >
            
            <div className="txt-slide text-5xl">
              <div className="flex items-center text-white p-2">
                <div>Hello</div>
             <div className="px-4"> I'm</div>
                
                <div className="roller ">
                  <span id="rolltext">
                    Parinyaporn
                    <br />
                    CS Student
                    <br />
                    Web Developer
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[30px] md:text-base text-gray-50 mb-4 indent-5 p-2 tracking-widest">
              I am a computer science student from College of Computing Khon
              Kaen University. Who have been learning programming for 3 years
              and always ready to learn new things. I am interested in web
              development and like to create a minimal design.
            </div>
            <div className="p-2 flex justify-center sm:justify-start">
              <a
                href="https://github.com/parinyap03"
                className="bg-transparent hover:bg-[#EF4444] text-[#EF4444] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#EF4444] hover:border-transparent"
              >
                Explore My Github
                <FontAwesomeIcon icon={faGithub} className="ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div
         
            initial={{ opacity: 0, x: 38 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: [0, 0, 0, 1],
            }}
          >
            <div className="sky-img h-full">
              <p>
                <span>
                  <img src={daysk} alt="sky" className="img-about" />
                </span>
              </p>
              <p>
                <span>
                  <img src={cpsk} alt="cpsk" className="img-about" />
                </span>
              </p>
              <p>
                <span>
                  <img src={pinktree} alt="pinktree" className="img-about" />
                </span>
              </p>
            </div>
            <div className="flex justify-end">Bam's photo </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
