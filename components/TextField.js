import styles from "../styles/TextField.module.scss";

const TextField = ({ value, onChange, Icon, label }) => {
  return (
    <div className={styles.container}>
      {Icon && <Icon className={styles.container} />}
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default TextField;
