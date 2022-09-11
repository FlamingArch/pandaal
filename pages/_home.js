import { IconLocationEdit } from "../components/Icons";
import { EventCard, List } from "../components";

const PageHome = () => (
  <List.View>
    <div className="flex flex-row justify-end w-full p-6">
      <div className="w-12 h-12 bg-blue-700 rounded-full"></div>
    </div>
    <div className="flex flex-col gap-6 overflow-scroll content">
      <List.Section heading="Hey Harsh,">
        <p className="text-4xl font-bold">Showing all the getaway spots near</p>
        <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50 dark:hover:bg-pink-900">
          Greater Noida
          <IconLocationEdit className="w-12 h-12 fill-pink-600" />
        </div>
      </List.Section>
      <List.Section orientation="row" heading="In Your City">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </List.Section>

      <List.Section orientation="row" heading="Online">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </List.Section>

      <List.Section orientation="row" heading="Gaming Tournaments">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </List.Section>

      <List.Section orientation="row" heading="Workshops">
        {[1].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </List.Section>
    </div>
  </List.View>
);

export default PageHome;
