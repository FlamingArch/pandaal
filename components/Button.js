import { IconAdd } from "./Icons";

const Button = ({ onClick, className }) => {
  return (
    <button
      className={
        "flex gap-1 px-4 py-3 mx-6 mt-6 text-center text-white transition duration-200 ease-in-out rounded-full cursor-pointer bg-primary full hover:bg-primary-dark" +
        ` ${className}`
      }
      onClick={onClick}
    >
      <IconAdd className="w-6 h-6 fill-white" />
      <p className="flex-grow text-white">New Event</p>
      <IconAdd className="w-6 h-6 opacity-0 fill-white" />
    </button>
  );
};

export default Button;
