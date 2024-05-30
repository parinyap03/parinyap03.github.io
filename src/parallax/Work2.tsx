import pokemonv1 from "../assets/works/pokemonv1.png";
import pokemonv2 from "../assets/works/pokemonv2.png";
import digital from "../assets/works/card2.png";
import harry from "../assets/works/harry2.png";
import form from "../assets/works/form.png";
import quiz from "../assets/works/quiz2.png";
import flex from "../assets/works/flex.png";
import news from "../assets/works/news.png";
import vocab from "../assets/works/vocab2.png";
import fromregis from "../assets/works/redux2.png";
import "./Style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxText from "./TxtParallax";
const work = [
  {
    name: "Pokemon Dex ver 1",
    image: pokemonv1,
    desc: "learn to get api by redux rtk query",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Pokemon Dex ver 2",
    image: pokemonv2,
    desc: "learn to  get api by redux rtk query",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Digital Name Card ",
    image: digital,
    desc: "a responsive digital name card ",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Harry Potter API",
    image: harry,
    desc: "learn to use API by axios",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Typescript", "API", "Ant Design", "Tailwind", "HTML", "CSS"],
  },

  {
    name: "Quiz",
    image: quiz,
    desc: "a quiz website using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Typescript", "Ant Design", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Register Form",
    image: form,
    desc: "a register form using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Typescript", "Ant Design", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Layout Flex",
    image: flex,
    desc: "learn to use flex and module css",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Tailwind", "HTML", "CSS"],
  },
  {
    name: "Ogs News",
    image: news,
    desc: "learn to use react-router-dom",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Typescript", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Vocabulary List",
    image: vocab,
    desc: "a vocabulary list website learn to use react hook",
    link: "https://github.com/parinyap03/ogs-assignment2.git",
    skills: ["Typescript", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Regiter Form ",
    image: fromregis,
    desc: "a regiter form use react redux",
    link: "https://github.com/parinyap03/ogs-assignment2.git",
    skills: ["Typescript", "Tailwind", "HTML", "CSS"],
  },
];
const Work2 = () => {
  const span_2 = [1, 4, 5, 8, 9];
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      <ParallaxText text="My Works"></ParallaxText>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 h-full p-40"
      >
        {work.map((item, index) => (
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.07,
            }}
            href={item.link} target="_blank"
            className={`card-work group relative flex h-48 items-end  overflow-hidden rounded-lg  md:h-80 ${
              span_2.includes(index + 1) ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              loading="lazy"
              alt={item.name}
              className="img-work absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="h-[110px]  hidden lg:block desc-card backdrop-blur-md absolute w-full text-center -bottom-[67px] flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 text-black">
              <span className="font-bold text-3xl mb-[5px] text-center ">
                {item.name}
              </span>
              <p className=" text-center mt-[6px] mb-[5px]">{item.desc}</p>
              <div className="flex w-full justify-center">
                {item.skills?.map((skill, skillIndex) => (
                  <div
                    className="opacity-70 rounded-full border-2 ml-1 border-[#1F2937] "
                    key={skillIndex}
                  >
                    <div className="text-[12px] p-1  text-black">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Work2;
