import { BiSearch, BiMessageRoundedDetail } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";

const IconSize = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
};

/**
 * @param {{
 *  type: keyof typeof IconType,
 *  size: keyof typeof IconSize
 * }}
 */
export const Icon = ({ type, size = "medium" }) => {
  const IconType = {
    search: <BiSearch className={IconSize[size]} />,
    back: <BsChevronLeft className={IconSize[size]} />,
    hamberger: <RxHamburgerMenu className={IconSize[size]} />,
    home: <RiHome5Line className={IconSize[size]} />,
    close: <AiOutlineClose className={IconSize[size]} />,
    account: <VscAccount className={IconSize[size]} />,
    viewlist: <CiViewList className={IconSize[size]} />,
    message: <BiMessageRoundedDetail className={IconSize[size]} />,
  };

  return IconType[type];
};
