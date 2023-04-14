import * as React from "react";
import { motion } from "framer-motion";
import { Tentacle1, Tentacle2 } from "./tentacle";
import UserAvatar from "./userAvatar";

function ImageAvatar() {
  return (
    <div
      className="relative flex h-[580px] w-[528px] justify-center overflow-hidden"
      role="img"
      arial-aria-label="cool image.svg"
    >
      {/* Left */}
      <motion.div
        animate={{
          // scale: [1, 2, 2, 1, 1],
          rotate: [0, 3, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.4, 0.8, 1],
          duration: 2,
          type: "tween",
        }}
        className="absolute bottom-1/3 left-4 origin-right scale-125"
      >
        <Tentacle1 />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.02, 1, 1],
          rotate: [0, -3, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.4, 0.8, 1],
          delay: 0.4,
          duration: 3,
          type: "tween",
        }}
        className="absolute left-4 top-2/3 origin-right scale-150"
      >
        <Tentacle2 className="h-auto w-full" />
      </motion.div>

      {/* Right */}
      <motion.div
        animate={{
          scale: [1.25, 1.26, 1.24, 1.25],
          rotate: [180, 180, 180, 180],
          translateY: [-2, -10, -2, -2],
          // translateX: [0, 0, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.4, 0.8, 1],
          delay: 0.4,
          duration: 4,
          type: "tween",
        }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-[7%] left-full right-0 origin-left"
      >
        <Tentacle1 />
      </motion.div>
      <motion.div
        animate={{
          scale: [1.25, 1.26, 1.24, 1.25],
          rotate: [180, 180, 180, 180],
          translateY: [0, -2, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          times: [0, 0.3, 0.7, 1],
          delay: 0,
          duration: 3,
          type: "tween",
        }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-[25%] left-full origin-left scale-125"
      >
        <Tentacle2 />
      </motion.div>

      {/* body */}
      <UserAvatar className="absolute top-0" />
    </div>
  );
}

export default ImageAvatar;
