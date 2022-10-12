import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, isPresented, dismiss }) => {
  return (
    <AnimatePresence>
      {isPresented && (
        <motion.div
          animate={{ translateX: [window.innerWidth, 0] }}
          exit={{ translateX: window.innerWidth }}
          transition={{
            duration: 0.24,
          }}
          className="z-[999] fixed top-0 left-0 w-screen h-screen bg-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
