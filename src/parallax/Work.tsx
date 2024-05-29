import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Style.css";
import pokemonv1 from "../assets/works/pokemonv1.png";
import pokemonv2 from "../assets/works/pokemonv2.png";
import digital from "../assets/works/digital.png";
import harry from "../assets/works/harry.png";
import form from "../assets/works/form.png";
import quiz from "../assets/works/quiz.png";
import flex from "../assets/works/flex.png";
import news from "../assets/works/news.png";
import vocab from "../assets/works/vocab.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
} from "swiper/modules";

import { GithubOutlined } from "@ant-design/icons";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const work = [
  {
    name: "Pokemon Dex ver 1",
    image: pokemonv1,
    desc: "a pokemon dex using pokemonapi",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Tailwind", "HTML", "CSS"],
  },
  {
    name: "Pokemon Dex ver 2",
    image: pokemonv2,
    desc: "a pokemon dex using pokeapi ver. 2",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Digital Name Card ",
    image: digital,
    desc: "a digital name card",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["API", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Harry Potter API",
    image: harry,
    desc: "learn to use API",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "API", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Register Form",
    image: form,
    desc: "a register form using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Quiz",
    image: quiz,
    desc: "a quiz website using react-redux",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "AntD", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Layout Flex",
    image: flex,
    desc: "learn to use flex",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["Tailwind", "HTML", "CSS"],
  },
  {
    name: "Ogs News",
    image: news,
    desc: "learn to use react-router-dom",
    link: "https://github.com/parinyap03/ogs-assignmentNews.git",
    skills: ["TS", "Tailwind", "HTML", "CSS"],
  },
  {
    name: "Vocabulary List",
    image: vocab,
    desc: "a vocabulary list website ",
    link: "https://github.com/parinyap03/ogs-assignment2.git",
    skills: ["TS", "Tailwind", "HTML", "CSS"],
  },
];

// Work component swipers
const Work = () => {

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <div className="w-full">
      <div className="text-neutral-300 lg:p-0 md:p-0 sm:p-0 sm:m-auto">
        <div
          className="flex justify-center items-center w-full my-[20px] h-[600px]"
          ref={ref}
        >
          <Swiper
            loop={true}
            freeMode={true}
            initialSlide={0}
            spaceBetween={120}
            centeredSlides={true}
            pagination={{ el: ".pagination", clickable: true }}
            slidesPerView={"auto"}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper lg:w-full"
          >
            {work.map((item, index) => (
              <SwiperSlide className="flex justify-center w-full" key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="relative border-2 group overflow-hidden text-gray-50 h-72 rounded-2xl"
                >
                  <div className="flex">
                    <div className="flex p-[10px] w-full">
                      {item.skills?.map((skill, skillIndex) => (
                        <div
                          className="opacity-70 rounded-full border-2 ml-1"
                          key={skillIndex}
                        >
                          <div className="text-[10px] p-1">{skill}</div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="m-2 cursor-pointer">
                        <GithubOutlined className="text-[30px] h-full flex justify-center items-center mt-[5px]" />
                      </div>
                    </a>
                  </div>
                  <img
                    src={item.image}
                    alt="bg"
                    className="w-full h-40 top-[50px]"
                  />
                  <div className="absolute w-full bg-red-400 -bottom-9 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-gray-800 font-bold text-3xl mb-5 text-center">
                      {item.name}
                    </span>
                    <p className="text-neutral-800 text-center">{item.desc}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            <div className="pagination flex justify-center mt-[60px]"></div>
            <div className="slider-controller flex justify-center mt-[40px]">
              <div className="swiper-button-prev rounded-full bg-white">
                <LeftOutlined className=" 2xl:text-xl p-5 text-black" />
              </div>
              <div className="swiper-button-next rounded-full bg-white ml-5">
                <RightOutlined className=" 2xl:text-xl p-5 text-black" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Work;
