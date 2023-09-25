import { BiSearch } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiHome5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";

const IconType = {
  search: <BiSearch />,
  back: <BsChevronLeft />,
  hamberger: <RxHamburgerMenu />,
  home: <RiHome5Line />,
  close: <AiOutlineClose />,
  account: <VscAccount />,
  viewlist: <CiViewList />,
};

/**
 * @param {{
 *  type: keyof typeof IconType,
 * }}
 */
export const Icon = ({ type, size = "medium" }) => IconType[type];
