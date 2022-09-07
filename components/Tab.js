import { createContext, useContext, useState } from "react";
import styles from "../styles/Tab.module.scss";

const Context = createContext();

const Provider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <Context.Provider value={{ index: index, setIndex: setIndex }}>
      {children}
    </Context.Provider>
  );
};

const Item = ({ Icon, children, trailing, onClick, index, active }) => {
  return (
    <div
      className={
        active == index ? `${styles.item} ${styles.selected}` : styles.item
      }
      onClick={onClick}
    >
      {Icon && <Icon className={styles.icon} />}
      {children}
      {trailing}
    </div>
  );
};

const View = ({ children }) => {
  const { index } = useContext(Context);
  return children[index];
};

const Bar = ({ items }) => {
  const { index, setIndex } = useContext(Context);
  return (
    <div className={styles.navbar}>
      {items.map((e, i) => (
        <Item
          key={i}
          Icon={e.icon}
          xw
          onClick={() => setIndex(i)}
          index={i}
          active={index}
        >
          {e.label}
        </Item>
      ))}
    </div>
  );
};

const Tab = {
  Context: Context,
  Controller: Provider,
  View: View,
  Bar: Bar,
  Item: Item,
};

export default Tab;
