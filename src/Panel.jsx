import { useContext } from "react";
import { ThemeContext } from "./App";

// eslint-disable-next-line react/prop-types
const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
