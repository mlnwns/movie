import { BASE_PADDING, MOBILE_WIDTH } from "../../constants";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";
import { Menu } from "./Menu.component";
import classnames from "classnames";
import { isMobile } from "react-device-detect";

export const HomeHeader = () => {
  return (
    <div className="h-12">
      <div
        className={classnames(
          `fixed w-full left-0 px-[${BASE_PADDING}] flex justify-between py-2 border-b bg-white z-40`,
          !isMobile && `w-[${MOBILE_WIDTH}] left-6`
        )}
      >
        <div className="flex gap-4">
          <Menu />
          <Txt>전남대</Txt>
        </div>
        <Icon type="search" />
      </div>
    </div>
  );
};
