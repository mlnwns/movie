import Txt from "./Txt.component";

/** @param {{children: import("react").ReactNode}} */
const Title = ({ children }) => {
  return <Txt typography="h1">{children}</Txt>;
};

export default Title;
