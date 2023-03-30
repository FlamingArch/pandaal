type ColorBackdropProps = {
  color?: string;
};

export default function colorBackdrop({
  color = "primary",
}: ColorBackdropProps) {
  return <div className={`bg-${color}-500 w-screen h-screen -z-10 fixed`} />;
}
