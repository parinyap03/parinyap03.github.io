import Home from "./parallax/Home";
import About from "./parallax/About";
import Nav from "./parallax/Nav";
// import Work from "./parallax/Work";
import Social from "./parallax/Social";
import Work from "./parallax/Work2";
import "@/parallax/Style.css";
import "./index.css";
import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}
import Lenis from "lenis";

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -3;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 3;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {[...Array(10)].map((_, i) => (
          <span key={i}>{children} </span>
        ))}
      </motion.div>
    </div>
  );
}
const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), Fade());

  return (
    <>
      <Nav />

      <ScrollContainer>
        <ScrollPage>
          <div id="home">
            <Home />
          </div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <div></div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <Animator animation={ZoomInScrollOut}>
            <div className=" flex justify-end px-[330px] text-white ">
              <div className="text-head flex items-center w-fit ">
                AB
                <div className="letter-o ">
                  <div className="counter"></div>
                </div>
                UT
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="bg-[#06141D]">
          <div id="about">
            <ParallaxText baseVelocity={3}>About Me</ParallaxText>
            <Animator animation={MoveIn(1800, 0)}>
              <About />
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <div></div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <Animator animation={ZoomInScrollOut}>
            <div className="text-white flex justify-center px-[330px]">
              <div className="flex items-center text-head  text-center   ">
                W{" "}
                <div className="letter-o mr-[20px]">
                  <div className="counter"></div>
                </div>
                RKS
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="bg-[#06141D] " style={{ height: "fit-content" }}>
          <div id="works">
            <ParallaxText baseVelocity={-3}>My Works</ParallaxText>
            <Work />
          </div>
        </ScrollPage>
      </ScrollContainer>
      <div className="z-50 fixed bottom-10 left-10">
        <Social />
      </div>
    </>
  );
};

export default App;
