import {
  createContext,
  useState,
  useContext,
  Children,
  cloneElement,
} from "react";
import styles from "./Navigation.module.scss";

const Context = createContext();

const Provider = ({ children }) => {
  const [index, setIndex] = useState(0);
  return (
    <Context.Provider value={{ index: index, setIndex: setIndex }}>
      {children}
    </Context.Provider>
  );
};

const Bar = ({ children, style }) => {
  const { index, setIndex } = useContext(Context);
  return (
    <div className={styles[`${style}Bar`]}>
      {Children.map(children, (child, idx) => {
        return cloneElement(child, {
          currentIndex: idx,
          selectedIndex: index,
          onClick: () => setIndex(idx),
          style: style,
        });
      })}
    </div>
  );
};

const Item = ({ Icon, label, currentIndex, selectedIndex, onClick, style }) => {
  return (
    <div
      className={`${styles[`${style}Item`]} ${
        selectedIndex == currentIndex && styles.selected
      }`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {label}
    </div>
  );
};

const View = ({ children }) => {
  const { index } = useContext(Context);
  return children[index];
};

const Navigation = {
  Bar: Bar,
  Context: Context,
  Item: Item,
  Provider: Provider,
  View: View,
};

export default Navigation;
