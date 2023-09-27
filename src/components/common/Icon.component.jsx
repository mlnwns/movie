import { BiSearch } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const IconType = {
  search: <BiSearch />,
  back: <BsChevronLeft />,
  hamberger: <RxHamburgerMenu />,
  home: <BiHomeAlt2 />,
  close: <AiOutlineClose />,
};

/**
 * @param {{
 *  type: keyof typeof IconType,
 * }}
 */
export const Icon = ({ type, size = "medium" }) => IconType[type];
