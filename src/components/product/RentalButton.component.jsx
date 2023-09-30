import { isIOS, isMobile } from "react-device-detect";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import classnames from "classnames";
import { MOBILE_WIDTH } from "../../constants";

/**
 * @param {{
 *  id: string
 * }}
 */
export const RentalButton = ({ id }) => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 pb-[env(safe-area-inset-bottom)] z-20 bg-white",
        isMobile ? "w-full" : MOBILE_WIDTH
      )}
    >
      <Br className="py-0 pb-3" />
      <Button className="w-[calc(100%-3rem)]">대여하기</Button>
    </div>
  );
};
