type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  style?: "action" | "primary" | "emphasis";
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="p-3 rounded-xl bg-primary-50 transition bg-opacity-80 hover:bg-primary-100 backdrop-blur-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
