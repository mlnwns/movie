import classnames from "classnames";
import { BASE_LEFT_PADDING_MINUS, MOBILE_WIDTH } from "../../constants";
import { isMobile } from "react-device-detect";

export const Br = () => {
  return (
    <div className="py-1 h-[1px] relative">
      <span
        className={classnames(
          "absolute h-[1px] bg-[#D4D4D4]",
          BASE_LEFT_PADDING_MINUS,
          !isMobile ? `${MOBILE_WIDTH}` : "w-[calc(100%+3rem)]"
        )}
      ></span>
    </div>
  );
};
