import { Icon } from "../common/Icon.component";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Txt } from "../common/Txt.component";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom";
import "react-day-picker/dist/style.css";
import "./calender.css";

export const RentCalendar = () => {
  const [value, onChange] = useAtom(rentDateAtom);

  return (
    <div className="h-full flex flex-col items-center">
      <DayPicker
        mode="range"
        fromDate={new Date()}
        defaultMonth={new Date()}
        selected={value}
        onSelect={onChange}
        locale={ko}
      />
      <div className="w-full">
        <Txt typography="h4" className="font-normal w-full text-left">
          대여기간
        </Txt>
        <div className="flex justify-around items-center border-b border-black py-4">
          <Txt typography="h5" className="font-normal flex-1 text-center">
            {value.from.toLocaleDateString()}
          </Txt>
          <div className="h-[1px] w-4 bg-black"></div>
          <Txt typography="h5" className="font-normal flex-1 text-center">
            {value.to?.toLocaleDateString()}
          </Txt>
        </div>
      </div>
    </div>
  );
};
