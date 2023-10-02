import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import { Input } from "../components/common/Input.component";

export const SignupPage = () => {
  return (
    <>
      <main
        aria-label="main"
        className={classnames(
          "bg-white overflow-auto",
          BASE_PADDING,
          isMobile && isIOS
            ? "h-[calc(100vh-10rem-env(safe-area-inset-top))]"
            : "h-[calc(100vh-8.5rem)]"
        )}
      >
        <Txt typography="h4" colors="secondaryLight" className="flex">
          안녕하세요!
        </Txt>
        <Txt typography="h4" colors="secondaryLight" className="flex">
          당신을 어떤 이름으로 부르면 좋을까요?
        </Txt>
        <Input type="text" />

        <BottomFullLink title="다음으로" to={`/`} />
      </main>
    </>
  );
};
