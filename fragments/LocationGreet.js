import { List } from "../components-legacy";
import { IconLocationEdit } from "../legacy/components/Icons";

const LocationGreet = () => {
  return (
    <List.Section heading="Hey Harsh,">
      <p className="text-4xl font-bold">Showing all the getaway spots near</p>
      <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50 dark:hover:bg-pink-900">
        Greater Noida
        <IconLocationEdit className="w-12 h-12 fill-pink-600" />
      </div>
    </List.Section>
  );
};

export default LocationGreet;
