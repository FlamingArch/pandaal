import { useNavigate } from "@tanstack/router";
import { AppBar, Button, Scaffold } from "../components";
import { IconBack } from "../components/icons";

import { useAppStore } from "../hooks/useAppStore";

export default function PageCity() {
  const { city: citySelected, setCity } = useAppStore((state) => ({
    city: state.city,
    setCity: state.setCity,
  }));

  const navigate = useNavigate({ from: "/city" });

  const cities = ["Delhi", "Greater Noida", "Lucknow"];

  return (
    <Scaffold
      appBar={
        <AppBar
          sticky
          background="material"
          gap={4}
          leading={
            <Button
              Icon={IconBack}
              buttonStyle="action"
              label="Home"
              onClick={() => navigate({ to: "/" })}
            />
          }
        >
          <p className="text-2xl font-bold">Change your Location City</p>
        </AppBar>
      }
      padding={{ top: 0 }}
    >
      <div className="flex flex-col rounded-2xl overflow-hidden">
        {cities.map((city) => (
          <Button
            id={city}
            onClick={() => {
              setCity(city);
              navigate({ to: "/" });
            }}
            className={
              "rounded-none " +
              (city == citySelected
                ? "bg-primary-500 text-white hover:bg-primary-500 hover:text-white"
                : "bg-primary-50")
            }
          >
            {city}
            <div className="flex-grow" />
          </Button>
        ))}
      </div>
    </Scaffold>
  );
}
