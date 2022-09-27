import { createContext, useState, useContext } from "react";
import styles from "../styles-legacy/Tab.module.scss";

const Context = createContext();

const Provider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <Context.Provider value={{ index: index, setIndex: setIndex }}>
      {children}
    </Context.Provider>
  );
};

const Bar = ({ items, className }) => {
  const { index, setIndex } = useContext(Context);

  return (
    <div className={`${styles.tabbar} ${className}`}>
      {items.map((e, i) => (
        <div
          key={i}
          className={
            index == i ? `${styles.tab} ${styles.selected}` : styles.tab
          }
          onClick={() => setIndex(i)}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

const View = ({ children, className }) => {
  const { index } = useContext(Context);
  return <div className={className}>{children[index]}</div>;
};

const Tab = {
  Context: Context,
  Provider: Provider,
  Bar: Bar,
  View: View,
};

export default Tab;
