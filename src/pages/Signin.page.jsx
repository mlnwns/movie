import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import { InputText, InputPassword } from "../components/sign/Input.component";

export const SigninPage = () => {
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
      <div class="flex justify-center">
        <img src="/images/logo.png" alt="app logo" class="w-350 h-auto" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4">
          <InputText label="Email" />
        </div>
        <div className="w-3/4">
          <InputPassword label="Password" />
        </div>
      </div>

      <BottomFullLink title="로그인" to={`/`} />
    </main>
  );
};
