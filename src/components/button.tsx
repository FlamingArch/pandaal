import buttonStyles from "../tailwind/button";
import { ButtonProps, ButtonStyles } from "../types/button";

function getButtonStyles(style: ButtonStyles) {
  return buttonStyles[style] ?? buttonStyles.primary;
}

export default function Button({
  children,
  buttonStyle,
  className,
  Icon,
  label,
  ...rest
}: ButtonProps) {
  const styles = getButtonStyles(buttonStyle ?? "secondary");
  return (
    <button {...rest} className={`${styles.button} ${className}`}>
      {Icon && (
        <section className={styles.iconContainer}>
          <Icon className={styles.icon}></Icon>
        </section>
      )}
      {label && <div className={styles.label}>{label}</div>}
      {children}
    </button>
  );
}
