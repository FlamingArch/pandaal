import styles from "./Scaffold.module.scss";

export default function Scaffold({
  logo,
  children,
  leading,
  trailing,
  middle,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.leading}>{leading}</div>
        <div className={styles.middle}>{middle}</div>
        <div className={styles.trailing}>{trailing}</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
