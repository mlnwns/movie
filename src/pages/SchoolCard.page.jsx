import { BASE_PADDING } from "../constants";
import { isIOS, isMobile } from "react-device-detect";
import classnames from "classnames";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { Txt } from "../components/common/Txt.component";
import { Input } from "../components/common/Input.component";
import { SlidePannel } from "../components/common/SlidePannel.component";

export const SchoolCardPage = () => {
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
        <div className="flex justify-center">
          <SlidePannel className="bg-[#D9D9D9] mt-20 mx-2" />
          <SlidePannel className="bg-[#D9D9D9] mt-20 mx-2" />
          <SlidePannel className="bg-[#62AB05] mt-20 mx-2" />
        </div>

        <div className="flex flex-col items-center">
          <Txt typography="h6" colors="black" className="my-20">
            안녕하세요!
          </Txt>
          <Txt typography="h3" colors="black" className="mb-20 text-center">
            당신의 학교를
            <br />
            알고 싶어요
          </Txt>
          <div class="w-80 h-44 border border-[#62AB05] rounded-xl"></div>
          <Txt typography="subtitle" colors="secondaryLight" className="my-1">
            학생증을 촬영해주세요
          </Txt>
        </div>

        <BottomFullLink title="다음으로" to={`/`} />
      </main>
    </>
  );
};
