import { Link } from "react-router-dom";
import { Icon } from "./Icon.component";
import { Txt } from "./Txt.component";

/**
 * @param {{
 *  to: string
 * }}
 */
export const AppBar = ({ to, title }) => {
  return (
    <Link className="px-4 py-4 flex justify-between items-center" to={to}>
      <Icon size="large" type="back" />
      <div className="flex-1 text-center">
        <Txt typography="h4">{title}</Txt>
      </div>
      <div className="h-8 w-8"></div>
    </Link>
  );
};
