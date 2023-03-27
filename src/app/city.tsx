import { AppBar, Input, Scaffold } from "../components";

import { useAppStore } from "../hooks/useAppStore";

const appBar = <AppBar sticky background="material"></AppBar>;

export default function PageCity() {
  const { city, setCity } = useAppStore((state) => ({
    city: state.city,
    setCity: state.setCity,
  }));

  return (
    <Scaffold gap={4}>
      <p className="text-2xl font-bold">Change your Location City</p>
      <p className="text-lg">We are only available in a few cities</p>
      <Input
        type="select"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Delhi">Delhi</option>
        <option value="Greater Noida">Greater Noida</option>
        <option value="Lucknow">Lucknow</option>
      </Input>
    </Scaffold>
  );
}
