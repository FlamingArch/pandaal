import styles from "../styles-legacy/TextField.module.scss";

const TextField = ({ value, onChange, Icon, label, className, classNames }) => {
  return (
    <div
      className={`${styles.container} ${
        classNames && classNames.container
      } ${className}`}
    >
      {Icon && (
        <Icon className={`${styles.icon} ${classNames && classNames.icon}`} />
      )}
      <input
        className={`${styles.input} ${classNames && classNames.input}`}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default TextField;
