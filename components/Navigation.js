import { createContext, useContext, useState } from "react";
import styles from "../styles/Navigation.module.scss";

const Context = createContext();

const Provider = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <Context.Provider value={{ index: index, setIndex: setIndex }}>
      {children}
    </Context.Provider>
  );
};

const Item = ({
  Icon,
  children,
  trailing,
  onClick,
  index,
  active,
  className,
  classNames,
}) => {
  return (
    <div
      className={`${styles.item} ${
        classNames && classNames.item
      } ${className} ${active == index && ` ${styles.selected}`}`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={`${styles.icon} ${classNames && classNames.icon} icon`}
        />
      )}
      {children}
      {trailing}
    </div>
  );
};

const View = ({ children, className }) => {
  const { index } = useContext(Context);
  return <div className={`${className}`}>{children[index]}</div>;
};

const Bar = ({ items, className }) => {
  const { index, setIndex } = useContext(Context);
  return (
    <div className={`${styles.navbar} ${className}`}>
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

const Navigation = {
  Context: Context,
  Controller: Provider,
  View: View,
  Bar: Bar,
  Item: Item,
};

export default Navigation;
