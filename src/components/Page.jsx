import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Full = ({ children, className, appBar }) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: [0, 1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={"w-screen h-screen overflow-scroll " + className}
      >
        {appBar}
        <div className="flex flex-col gap-4 p-6">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

const Responsive = ({ children, className, appBar }) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: [0, 1] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={
          "w-screen max-w-[900px] h-fit mx-auto overflow-scroll gap-4 p-6" +
          className
        }
      >
        {appBar}
        <div className="flex flex-col">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

const Page = {
  Full: Full,
  Responsive: Responsive,
};

export default Page;
