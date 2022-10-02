import styles from "../styles/Modal.module.scss";

const Partial = ({
  isPresented,
  onDismiss,
  parentRef,
  children,
  className,
  classNames,
}) => {
  return (
    isPresented && (
      <div
        className={`${styles.container} ${
          classNames && classNames.container
        } ${className}`}
      >
        <div
          className={`${styles.modal} ${classNames && classNames.modal} modal`}
        >
          {children}
        </div>
      </div>
    )
  );
};

const Full = ({
  isPresented,
  onDismiss,
  parentRef,
  children,
  className,
  classNames,
}) => {
  return (
    isPresented && (
      <div
        className={`${styles.container} ${
          classNames && classNames.container
        } ${className}`}
      >
        {children}
      </div>
    )
  );
};

const Modal = {
  Partial: Partial,
  Full: Full,
};

export default Modal;
