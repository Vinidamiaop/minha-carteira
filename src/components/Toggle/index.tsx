import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";
const Toggle: React.FC = () => {
  const [active, setActive] = React.useState(false);

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setActive(!active)}
        checked={active}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
