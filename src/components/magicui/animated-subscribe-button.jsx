"use client";;
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimatedSubscribeButton = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);

  return (
    (<AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex md:w-[150px] h-[43px]  max-w-full items-center justify-center overflow-hidden rounded-md bg-white md:p-[8px] p-2 outline outline-1 outline-black"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}>
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex md:w-[150px] max-w-full h-[43px] cursor-pointer items-center justify-center rounded-md border-none md:p-[5px] p-0"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}>
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>)
  );
};
