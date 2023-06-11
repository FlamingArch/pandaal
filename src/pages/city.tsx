import { useNavigate } from "react-router-dom";
import { AppBar, Button, Page } from "../components";
import { IconBack } from "../components/icons";

import { useAppStore } from "../hooks/useAppStore";

export default function PageCity() {
  const { city: citySelected, setCity } = useAppStore((state) => ({
    city: state.city,
    setCity: state.setCity,
  }));

  document.title = "Choose your City";

  const navigate = useNavigate();

  const cities = ["Delhi", "Greater Noida", "Lucknow"];

  return (
    <Page
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
              onClick={() => navigate(-1)}
            />
          }
          heading="Change your Location City"
        />
      }
      padding={{ top: 0 }}
    >
      <div className="flex flex-col rounded-2xl overflow-hidden">
        {cities.map((city) => (
          <Button
            id={city}
            onClick={() => {
              setCity(city);
              navigate(-1);
            }}
            buttonStyle={city == citySelected ? "primary" : "secondary"}
            className={
              (city == citySelected ? "text-white " : "") + "rounded-none "
            }
          >
            {city}
            <div className="flex-grow" />
          </Button>
        ))}
      </div>
    </Page>
  );
}
