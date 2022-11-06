import React from "react";
import styles from "../styles/Home.module.scss";
import { IconEdit } from "../components/Icons";

export default function Home() {
  const [navColor, setNavColor] = React.useState(`white`);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight - 10) {
      setNavColor(`black`);
    } else {
      setNavColor(`white`);
    }
  };

  React.useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
  }, []);

  function scrollToHowItWorks() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: `smooth`,
    });
  }

  return (
    <>
      <header className={`fixed w-screen top-0 z-50 text-${navColor}`}>
        <div className="max-w-[1200px] mx-auto p-10 flex justify-between">
          <p
            className={`text-xl font-bold  transition-color  text-${
              navColor === "black" ? `primary-400` : "white"
            }`}
          >
            pandaal
          </p>
          <nav>
            <ul className="flex gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      <section
        className={
          "grid place-content-center text-center gap-4 w-screen h-screen bg-black text-white " +
          ` ${styles.primary}`
        }
      >
        <div className="absolute bg-black w-full h-full opacity-30"></div>
        <div className="grid z-10 place-content-center text-center gap-4 p-4">
          <p className="text-4xl font-bold md:text-6xl">Event Management is Hard</p>
          <p className="text-2xl font-medium md:text-4xl">We can make it easy for you</p>
          <div className="flex gap-6 pt-4 w-full place-content-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.hoest.pandaal"
              className="bg-white text-primary-400 rounded-full p-2 px-8 w-fit"
            >
              Download
            </a>
            <button onClick={scrollToHowItWorks}>How it Works?</button>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen gap-10 bg-primary-100 grid place-content-center text-center p-4">
        <div className="text-4xl font-bold">How it Works?</div>
        <p className="md:max-w-[40vw] mx-auto text-2xl md:text-3xl text-gray-500">
          Our{" "}
          <span className="font-bold text-black">
            Event Management Platform
          </span>{" "}
          provides you with the tools to design and run a successful
          Online/Offline event
        </p>
        <div className="flex flex-col place-items-center items-stretch">
          <Card leading={<Badge Icon={IconEdit} />}>
            <h1 className="text-lg font-bold text-primary-400">
              Fill The Event Form
            </h1>
            <p>After signing up, fill up the event form</p>
          </Card>
          <Line />
          <Card leading={<Badge Icon={IconEdit} />}>
            <h1 className="text-lg font-bold text-primary-400">
              Launch Your Event
            </h1>
            <p>
              Your event gets live in your city, Share it on your social media
              handles.
            </p>
          </Card>
          <Line />
          <Card leading={<Badge Icon={IconEdit} />}>
            <h1 className="text-lg font-bold text-primary-400">
              Pour Some Fine Wine
            </h1>
            <p>
              You go ahead and pour yourself a glass of wine, let us handle the
              rest.
            </p>
          </Card>
        </div>
      </section>
      <section className="w-screen h-screen">
        <div className="grid md:grid-cols-2 place-content-center text-center h-screen max-w-[900px] mx-auto gap-6 p-6">
          <div className="text-2xl md:text-4xl text-left w-full grid place-content-center gap-6 pt-24">
            <h1 className="font-bold">
              QR Code based Event Tickets for Secure Entry
            </h1>
            <p className="opacity-60 font-medium">
              We will provide your audience with a QR code for Secure entry ,
              these tickets can further be Validated on entry.{" "}
            </p>{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.hoest.pandaal"
              className="bg-primary-400 hover:bg-primary-500 text-white text-base rounded-full p-2 px-8 w-fit"
            >
              Download
            </a>
          </div>
          <img
            src="https://unsplash.com/photos/QiPe0UpC0_U/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8cXIlMjBzY2FubmVyfGVufDB8fHx8MTY2Nzc2MTcyMQ&force=true"
            className="w-full rounded-2xl"
          ></img>
        </div>
      </section>
      <section className="w-screen h-screen bg-primary-100 grid place-content-center">
        <div className="flex flex-col p-8 pt-24 max-w-[900px] mx-auto gap-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center max-w-[80%] mx-auto">
            Select From A{" "}
            <span className="text-primary-400">Range Of Categories</span> To
            Provide An{" "}
            <span className="text-primary-400">Immersive Experience</span>
          </h1>
          <grid className="md:grid-cols-3 grid gap-6">
            <ImageCard
              src="https://unsplash.com/photos/QBpZGqEMsKg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3NzYzNTQ1&force=true"
              label="Hackathons"
            />
            <ImageCard
              src="https://unsplash.com/photos/qeij_dhDhGg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3NzYxNzM5&force=true"
              label="Online Events"
            />
            <ImageCard
              src="https://unsplash.com/photos/ZhQCZjr9fHo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3NzY0Mzkx&force=true"
              label="Concerts"
            />
          </grid>
        </div>
      </section>
      <section className="w-screen">
        <div className="p-24 mx-auto max-w-[900px] grid place-items-center text-center">
          <div className="text-4xl font-bold text-primary-400 pb-4">pandaal</div>
          <p>Created with ❤️ by Hoest</p>
        </div>
      </section>
      <section className="w-screen bg-primary-400 grid place-content-center">
        <div className="p-8 mx-auto max-w-[900px] flex place-items-center gap-8">
          <a href="https://www.facebook.com/pandaalapp">
            <i className="fab hover:text-primary-200 transition-colors text-white w-6 h-6 text-xl fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/pandaalapp">
            <i className="fab hover:text-primary-200 transition-colors text-white w-6 h-6 text-xl fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/pandaalapp">
            <i className="fab hover:text-primary-200 transition-colors text-white w-6 h-6 text-xl fa-instagram"></i>
          </a>
          <a href="https://in.pinterest.com/pandaalapp/">
            <i className="fab hover:text-primary-200 transition-colors text-white w-6 h-6 text-xl fa-pinterest-p"></i>
          </a>
        </div>
      </section>
    </>
  );
}

function Card({ children, leading }) {
  return (
    <div className="p-6 gap-4 hover:shadow-2xl hover:shadow-primary-200 rounded-2xl transition-shadow bg-white flex">
      {leading}
      <div className="flex flex-col text-left">{children}</div>
    </div>
  );
}

function Badge({ Icon }) {
  return (
    <div className="w-16 h-16 p-4 bg-primary-200 rounded-xl">
      <Icon className="w-8 h-8 fill-primary-400" />
    </div>
  );
}

function Line() {
  return <div className="border h-8 w-[1px] border-primary-200 mx-auto"></div>;
}

function ImageCard({ src, label }) {
  return (
    <div className="overflow-hidden rounded-2xl relative bg-black md:aspect-[9/12]">
      <img
        src={src}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="w-full h-full hover:scale-110 transition-all opacity-60"
      ></img>
      <p className="z-10 absolute bottom-0 left-0 p-6 text-xl font-medium text-white">
        {label}
      </p>
    </div>
  );
}
