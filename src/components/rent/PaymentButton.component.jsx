import { isMobile } from "react-device-detect";
import { Button } from "../common/Button.component";
import classnames from "classnames";
import { MOBILE_WIDTH } from "../../constants";
import { Link } from "react-router-dom";

/**
 * @param {{
 *  id: string
 * }}
 */
export const PaymentButton = ({ id }) => {
  return (
    <div
      className={classnames(
        "fixed bottom-0 z-20 bg-white",
        isMobile
          ? "w-[calc(100%-3rem)] pb-[env(safe-area-inset-bottom)]"
          : `${MOBILE_WIDTH} pb-4`
      )}
    >
      <Link to={`/payment/${id}`}>
        <Button>결제하기</Button>
      </Link>
    </div>
  );
};
