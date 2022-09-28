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
        {logo && <div className={styles.logo}>{logo}</div>}
        {leading && <div className={styles.leading}>{leading}</div>}
        {middle && <div className={styles.middle}>{middle}</div>}
        {trailing && <div className={styles.trailing}>{trailing}</div>}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
