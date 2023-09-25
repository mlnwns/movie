import { useState } from "react";
import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";

const homeMenu = [
  { iconType: "account", title: "마이페이지" },
  { iconType: "viewlist", title: "대여내역" },
  { iconType: "home", title: "홈" },
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-6 h-6">
      {isOpen ? (
        <div className="flex flex-col gap-2 z-50 absolute">
          <button
            className="absolute w-screen h-[120vh] -left-6 -top-24 backdrop-blur-sm bg-[#00000050]"
            aria-label="close"
            onClick={toggleOpen}
          ></button>
          <button className="absolute" onClick={toggleOpen} aria-label="close">
            <Icon type="close" />
          </button>
          <div className="top-8 absolute flex flex-col w-40 gap-2">
            {homeMenu.map((item) => (
              <button className="flex justify-between py-2 px-4 rounded-lg border border-[#62AB05] bg-white">
                <Icon type={item.iconType} />
                <Txt typography="h6" className="text-center flex-1">
                  {item.title}
                </Txt>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={toggleOpen} aria-label="hamberger absolute">
          <Icon type="hamberger" />
        </button>
      )}
    </div>
  );
};
