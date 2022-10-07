import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import illustration1 from "../res/welcome.svg";
import illustration2 from "../res/welcome.svg";
import illustration3 from "../res/welcome.svg";
import { TextField } from "../legacy/components";
import { IconAdd, IconBack } from "../legacy/components/Icons";
import React, { useContext } from "react";
import FirebaseIntegration from "../fragments/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PageSignIn({ setPage }) {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [phone, setPhone] = React.useState("");
  const [code, setCode] = React.useState("");
  const Firebase = useContext(FirebaseIntegration.Context);

  const generateRecaptchaVerifier = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          setSelectedItem(1);
        },
      },
      Firebase.authentication.auth
    );
  };

  const requestOTP = () => {
    console.log(Firebase.authentication.auth);
    if (phone.length >= 12) {
      generateRecaptchaVerifier();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(Firebase.authentication.auth, phone, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((e) => console.log(`Error Generating OTP: ${e}`));
    }
  };

  const verifyOTP = () => {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        console.log(result);
        setPage(undefined);
      })
      .catch((e) => console.log(`Error Verifying OTP: ${e}`));
  };
  return (
    <div className="grid w-screen h-screen grid-cols-1 bg-white md:grid-cols-2 dark:bg-black">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        // BUG: Update Back link in edit profile page.
        // TODO: Hide Arrow Controls
        // TODO: Move Indicator Below Subtext and Use colors that are visible
        // TODO: Change Color of Button to #F3F8FE
        // TODO: Update Illustrations
        // ERROR: Error Generating OTP: Error: reCAPTCHA has already been rendered in this element
        // BUG: Transparent Background on Carousel
        // BUG: Transparent App bar in Settings Page
        // MISSING: Icons for Carousel

        className="bg-white dark:bg-black hidden-mobile"
      >
        <TipExplore />
        <TipBuild />
        <TipGrowing />
      </Carousel>
      <Carousel
        showThumbs={false}
        selectedItem={selectedItem}
        showIndicators={false}
        showStatus={false}
        className="bg-white dark:bg-black"
      >
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
            onChange={(e) => {
              setPhone(`${e.target.value}`);
            }}
          />
          <div
            className="cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold"
            onClick={requestOTP}
          >
            Send OTP
          </div>
        </div>
        <div className="grid gap-4 h-screen px-[10vw] w-full place-content-center">
          <div
            onClick={() => setSelectedItem(0)}
            className="w-fit mb-12 cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold"
          >
            <IconBack />
          </div>
          <Text0>Enter OTP sent to {phone}</Text0>
          <Text2>
            We need to validate your phone number by sending a 6 digit OTP
          </Text2>
          <TextField
            className="mt-6"
            Icon={IconAdd}
            label="OTP"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
          <div
            onClick={verifyOTP}
            className="cursor-pointer bg-[#c7dbf5] grid place-content-center p-4 rounded-[1.2rem] text-primary font-bold"
          >
            Continue
          </div>
          <div id="recaptcha-container" className="w-full h-48"></div>

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
