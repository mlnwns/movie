import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import { Input } from "../components/sign/Input.component";
import { SlidePannel } from "../components/sign/SlidePannel.component";
import { SignInformation } from "../components/sign/Information.component";

export const SignupPage = () => {
  return (
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
      <div className="flex justify-center">
        <SlidePannel className="bg-[#62AB05] mt-20 mx-2" />
        <SlidePannel className="bg-[#D9D9D9] mt-20 mx-2" />
        <SlidePannel className="bg-[#D9D9D9] mt-20 mx-2" />
      </div>

      <div className="flex flex-col items-center">
        <SignInformation title={`당신을 어떤 이름으로\n부르면 좋을까요?`} />
        <Input type="text" className="mt-20 w-3/4" />
        <Txt typography="subtitle" colors="secondaryLight" className="my-1">
          2글자에서 10글자 이내로 사용할 수 있어요.
        </Txt>
      </div>

      <BottomFullLink title="다음으로" to={`/signup/account`} />
    </main>
  );
};
