import { EventCard, List } from "../components";
import { IconFavorites } from "../components/Icons";

const footer = (
  <>
    <p className="text-center">Thats all Folks!</p>
    <p className="text-xl text-center">
      Made with <IconFavorites className="inline-block w-6 h-6 fill-red-500" />
      <span className="text-red-500"> by Team Pandaal</span>
    </p>
  </>
);

const PageFavourites = () => {
  return (
    <List.View>
      <List.Heading>Favorites</List.Heading>
      <List.Section heading="Upcoming" orientation="row" description={footer}>
        {/* {fakeContent} */}
      </List.Section>
    </List.View>
  );
};

export default PageFavourites;
