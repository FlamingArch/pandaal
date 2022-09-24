import { IconLocationEdit } from "../components/Icons";
import { AppBar, EventCard, List } from "../components";
import { Page } from "../components";

const Sections = {
  "In Your City": [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
    date: "Mon, 26 Sep 2022,",
    title: "The Ultimate Battle Royal in VR",
    image: "https://source.unsplash.com/random",
    address: "Greater Noida",
  })),
  Online: [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
    date: "Mon, 26 Sep 2022,",
    title: "The Ultimate Battle Royal in VR",
    image: "https://source.unsplash.com/random",
    address: "Greater Noida",
  })),
  "Gaming Tournaments": [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => ({
    date: "Mon, 26 Sep 2022,",
    title: "The Ultimate Battle Royal in VR",
    image: "https://source.unsplash.com/random",
    address: "Greater Noida",
  })),
  Workshops: [1, 2].map((_, i) => ({
    date: "Mon, 26 Sep 2022,",
    title: "The Ultimate Battle Royal in VR",
    image: "https://source.unsplash.com/random",
    address: "Greater Noida",
  })),
};

const PageHome = () => (
  <Page
    appbar={
      <AppBar heading="Home">
        <div className="grid w-12 h-12 bg-indigo-600 rounded-full aspect-square place-content-center">
          H
        </div>
      </AppBar>
    }
    paddingBottom={10}
  >
    <List.View>
      <List.Section heading="Hey Harsh,">
        <p className="text-4xl font-bold">Showing all the getaway spots near</p>
        <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50 dark:hover:bg-pink-900">
          Greater Noida
          <IconLocationEdit className="w-12 h-12 fill-pink-600" />
        </div>
      </List.Section>

      {Object.keys(Sections).map((title, i) => (
        <List.Section key={i} heading={title} orientation="row">
          {Sections[title].map((e, i) => (
            <EventCard key={i} {...e} />
          ))}
        </List.Section>
      ))}
    </List.View>
  </Page>
);

export default PageHome;
