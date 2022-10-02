import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import illustration1 from "../res/welcome.svg";
import illustration2 from "../res/welcome.svg";
import illustration3 from "../res/welcome.svg";
import { TextField } from "../legacy/components";
import { IconAdd, IconBack } from "../legacy/components/Icons";
import React from "react";

export default function PageSignIn() {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <div className="grid w-screen h-screen grid-cols-1 bg-white md:grid-cols-2 dark:bg-black">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        className="hidden-mobile"
      >
        <TipExplore />
        <TipBuild />
        <TipGrowing />
      </Carousel>
      <Carousel
        selectedItem={selectedItem}
        showIndicators={false}
        showStatus={false}
      >
        <PhonePrompt
          next={() => setSelectedItem(1)}
          phone={phoneNumber}
          change={(val) => {
            setPhoneNumber(val.value);
          }}
        />
        <OTPPrompt back={() => setSelectedItem(0)} />
      </Carousel>
    </div>
  );
}

const Text0 = ({ children }) => {
  return <p className="text-3xl font-bold text-center">{children}</p>;
};

const Text1 = ({ children }) => {
  return <p className="text-xl font-bold text-center">{children}</p>;
};

const Text2 = ({ children }) => {
  return <p className="pt-4 text-center opacity-50">{children}</p>;
};

const TipExplore = () => {
  return (
    <div className="grid h-screen px-[10vw] place-content-center">
      <Image
        src={illustration1}
        alt=""
        className="h-[50vh] scale-75 aspect-square"
      />
      <Text1>Explore Events in your City</Text1>
      <Text2>
        With pandaal, you have the power to explore and be part of the most
        amazing events happening in your city.
      </Text2>
    </div>
  );
};

const TipBuild = () => {
  return (
    <div className="grid h-screen px-[10vw] place-content-center">
      <Image
        src={illustration1}
        alt=""
        className="h-[50vh] scale-75 aspect-square"
      />
      <Text1>Build with Confidence</Text1>
      <Text2>
        We provide an individual the tools to create and run any successful
        event, all you need to do is Sign-Up.
      </Text2>
    </div>
  );
};

const TipGrowing = () => {
  return (
    <div className="grid h-screen px-[10vw] place-content-center">
      <Image
        src={illustration1}
        alt=""
        className="h-[50vh] scale-75 aspect-square"
      />
      <Text1>Keep Growing</Text1>
      <Text2>
        Weather you are a creator or a spectator, with our tools and services
        you always have more and more opportunities to keep growing
      </Text2>
    </div>
  );
};

const PhonePrompt = ({ next, phone, change }) => (
  <div className="grid gap-4 h-screen px-[10vw] w-full place-content-center">
    <Text0>Enter your Phone Number</Text0>
    <Text2>
      We need to validate your phone number by sending a 6 digit OTP
    </Text2>
    <TextField
      className="mt-6"
      Icon={IconAdd}
      label="Phone Number"
      value={phone}
      onChange={change}
    />
    <div
      className="cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold"
      onClick={next}
    >
      Send OTP
    </div>
  </div>
);

const OTPPrompt = ({ back }) => (
  <div className="grid gap-4 h-screen px-[10vw] w-full place-content-center">
    <div
      onClick={back}
      className="w-fit mb-12 cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold"
    >
      <IconBack />
    </div>
    <Text0>Enter OTP sent to +919876543210</Text0>
    <Text2>
      We need to validate your phone number by sending a 6 digit OTP
    </Text2>
    <TextField className="mt-6" Icon={IconAdd} label="Phone Number" />
    <div className="cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold">
      Continue
    </div>
    <div className="mt-12">
      <p>Didn{"'"}t Recieve OTP</p>
      <p className="pt-4 font-bold text-primary">RESEND</p>
      <p className="pt-6 pb-16">
        By pressing continue, you accept our{" "}
        <a className="font-bold" href="https://pandaal.in/t&c.html">
          Terms and Conditions
        </a>
      </p>
    </div>
  </div>
);
