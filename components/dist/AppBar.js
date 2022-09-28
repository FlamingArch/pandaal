import styles from "./AppBar.module.scss";

export default function AppBar({ leading, title, trailing, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.leading}>{leading}</div>
      <div className={styles.primary}>
        <div className={styles.title}>{title}</div>
        <div className={styles.children}>{children}</div>
      </div>
      <div className={styles.trailing}>{trailing}</div>
    </div>
  );
}
