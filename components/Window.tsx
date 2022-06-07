import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useAtom } from "jotai";
import { IWindow, reorderWindowToTop } from "../lib/windowStore";

type Props = {
  window: IWindow;
};

const Window: React.FC<Props> = ({ window }) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [ox, oy] }) => {
    api.start({ x: ox, y: oy });
  });

  function onFocusHandler() {
    console.log("focus:::", window.id);
  }

  return (
    <animated.div
      tabIndex={0}
      className="absolute w-48 h-48 bg-white border-2 border-black cursor-pointer rounded-3xl top-6 left-6 touch-none focus:outline-2 focus:outline-red-400"
      {...bind()}
      style={{ x, y }}
      onFocus={onFocusHandler}
    ></animated.div>
  );
};

export default Window;
