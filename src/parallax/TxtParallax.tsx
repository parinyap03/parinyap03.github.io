import { useRef } from "react";
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

interface TxtParallaxProps {
  text: string;
}

const TxtParallax = ({ text }: TxtParallaxProps) => {
  return (
    <>
      <ParallaxText baseVelocity={3}>{text}</ParallaxText>
    </>
  );
};

export default TxtParallax;
