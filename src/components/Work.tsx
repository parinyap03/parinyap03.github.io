import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./Style.css";

import bg from "../assets/computer.png";
import img2 from "../assets/programmer.png";
import img3 from "../assets/character.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import { GithubOutlined } from "@ant-design/icons";
const work = [
  {
    name: "Project1",
    date: "03/03/2021",
    image: bg,
    desc: "description xxxxxxxxx",
  },
  {
    name: "Project2",
    date: "04/03/2021",
    image: img2,
    desc: "description xxxxxxxxx",
  },
  {
    name: "Project3",
    date: "04/03/2021",
    image: img3,
    desc: "description xxxxxxxxx",
  },
];

const Work = () => {
  return (
    <>
      <div id="work" className="h-screen p-[50px]  ">
        <div className="text-3xl font-bold uppercase text-white">works</div>
        <div className="flex justify-evenly items-center  h-full">
          <Swiper
           spaceBetween={10}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
             pagination={{ clickable: true }}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 5,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper "
          >
            {work.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center " >
                
                <div className=" bg-lime-400 group w-[300px] group overflow-hidden relative text-gray-50 h-72 rounded-2xl hover:duration-700 duration-700">
                  <div className="flex justify-between p-[10px] w-full ">
                    <div className=" opacity-70 rounded-full p-2 text-sm">{item.date}</div>
                    <div className=" p-[5px]  rounded-full opacity-55 bg-black w-fit cursor-pointer">
                      <GithubOutlined style={{width:25}} className="flex justify-center items-center mt-[5px]"/>
                    </div>
                  </div>
                  <img src={item.image} alt="bg" className="w-full h-40  " />

                  <div className="absolute w-full bg-gray-50 -bottom-14  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                    <span className="text-gray-800 font-bold text-3xl mb-5">
                      {item.name}
                    </span>

                    <p className="text-neutral-800">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controller flex justify-center p-5 mb-10">
              <div className="swiper-button-prev rounded-full bg-white">
                <LeftOutlined className="text-xl p-5" />
              </div>
              <div className="swiper-button-next rounded-full bg-white ml-5">
                <RightOutlined className="text-xl p-5" />
              </div>
            </div>
          </Swiper>
          {/* <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="text-white bg-red-500 text-center"
          >
            <SwiperSlide className="bg-gray-500">Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default Work;
