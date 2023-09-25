import { Icon } from "../common/Icon.component";
import { Txt } from "../common/Txt.component";
import { Menu } from "./Menu.component";

export const HomeHeader = () => {
  return (
    <div className="h-12">
      <div className="absolute  w-full left-0 px-6 flex justify-between py-2 border-b">
        <div className="flex gap-4">
          <Menu />
          <Txt>전남대</Txt>
        </div>
        <Icon type="search" />
      </div>
    </div>
  );
};
