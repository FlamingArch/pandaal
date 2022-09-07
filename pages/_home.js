import { EventCard } from "../components/Index";
import { IconLocationEdit } from "../components/Icons";

const PageHome = () => (
  <div className="overflow-scroll content">
    <flex className="flex flex-row justify-end w-full p-6">
      <div className="w-16 h-16 bg-blue-700 rounded-full"></div>
    </flex>
    <section className="flex flex-col gap-4 p-6">
      <div className="text-2xl font-light">Hey Harsh,</div>
      <p className="text-4xl font-bold">Showing all the getaway spots near</p>
      <div className="flex p-4 text-4xl font-bold text-pink-600 transition-colors duration-300 cursor-pointer rounded-3xl w-fit hover:bg-pink-50">
        Greater Noida
        <IconLocationEdit className="w-12 h-12 fill-pink-600" />
      </div>
    </section>

    <section className="grid grid-flow-row gap-4 p-6">
      <div className="text-2xl">In Your City</div>
      <div className="flex flex-row w-screen gap-4 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </div>
    </section>

    <section className="grid grid-flow-row gap-4 p-6">
      <div className="text-2xl">Online</div>
      <div className="flex flex-row w-screen gap-4 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </div>
    </section>

    <section className="grid grid-flow-row gap-4 p-6">
      <div className="text-2xl">Gaming Tournaments</div>
      <div className="flex flex-row w-screen gap-4 overflow-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </div>
    </section>

    <section className="grid grid-flow-row gap-4 p-6">
      <div className="text-2xl">Workshops</div>
      <div className="flex flex-row w-screen gap-4 overflow-scroll">
        {[1].map((_, i) => (
          <EventCard
            key={i}
            date="Mon, 26 Sep 2022,"
            title="The Ultimate Battle Royal in VR"
            image="https://source.unsplash.com/random"
            address="Greater Noida"
          />
        ))}
      </div>
    </section>
  </div>
);

export default PageHome;
