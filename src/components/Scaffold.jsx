import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [pages, setPages] = React.useState([]);
  const push = (item) => setPages([...pages, item]);
  const pop = () => setPages(pages.slice(0, -1));
  const peek = () => pages[pages.length - 1];
  const dismiss = () => setPages([]);

  return (
    <Context.Provider value={{ pages, push, pop, peek, dismiss }}>
      {children}
    </Context.Provider>
  );
};

const View = ({ children }) => {
  return (
    <Provider>
      <div className="w-screen h-screen overflow-hidden fixed top-0 left-0">
        {children}
      </div>
      <NavigationView />
    </Provider>
  );
};
const NavigationView = () => {
  const { peek } = React.useContext(Context);

  return (
    <AnimatePresence>
      {peek() && (
        <motion.div
          animate={{ translateX: [window.innerWidth, 0] }}
          exit={{ translateX: window.innerWidth }}
          transition={{ duration: 0.3 }}
          className="bg-white fixed top-0 left-0 w-screen h-screen"
        >
          {peek()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Scaffold = {
  Context: Context,
  Provider: Provider,
  View: View,
};

export default Scaffold;
