import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const Window: React.FC = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [ox, oy] }) => {
    api.start({ x: ox, y: oy });
  });

  return (
    <animated.div
      className="absolute w-48 h-48 bg-white border-2 border-black cursor-pointer rounded-3xl top-6 left-6 touch-none"
      {...bind()}
      style={{ x, y }}
    ></animated.div>
  );
};

export default Window;
