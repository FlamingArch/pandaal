import { EventCard } from "../components/Index";
import { IconLocationEdit } from "../components/Icons";

const PageHome = () => (
  <div className="content overflow-scroll">
    <flex className="flex-row justify-end flex w-full p-6">
      <div className="bg-blue-700 rounded-full w-16 h-16"></div>
    </flex>
    <section className="p-6 flex flex-col gap-4">
      <div className="font-light text-2xl">Hey Harsh,</div>
      <p className="font-bold text-4xl">Showing all the getaway spots near</p>
      <div className="flex font-bold cursor-pointer rounded-3xl transition-colors duration-300 w-fit hover:bg-pink-50 text-4xl text-pink-600 p-4">
        Greater Noida
        <IconLocationEdit className="w-12 h-12 fill-pink-600" />
      </div>
    </section>

    <section className="p-6 grid grid-flow-row gap-4">
      <div className="text-2xl">In Your City</div>
      <div className="flex flex-row gap-4 overflow-scroll w-screen">
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

    <section className="p-6 grid grid-flow-row gap-4">
      <div className="text-2xl">Online</div>
      <div className="flex flex-row gap-4 overflow-scroll w-screen">
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

    <section className="p-6 grid grid-flow-row gap-4">
      <div className="text-2xl">Gaming Tournaments</div>
      <div className="flex flex-row gap-4 overflow-scroll w-screen">
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

    <section className="p-6 grid grid-flow-row gap-4">
      <div className="text-2xl">Workshops</div>
      <div className="flex flex-row gap-4 overflow-scroll w-screen">
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
