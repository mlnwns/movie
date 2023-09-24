import classnames from "classnames";

const typographyType = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base",
};

const colorsType = {
  black: "text-black",
};

/**
 * @param {{
 *  typography: keyof typeof typographyType,
 *  colors: keyof typeof colorsType,
 *  children: React.ReactNode
 * }}
 * */
export const Txt = ({ typography = "p", colors = "black", children }) => {
  return (
    <span
      className={classnames(typographyType[typography], colorsType[colors])}
    >
      {children}
    </span>
  );
};
