import { Navigate } from "react-router-dom";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import { Txt } from "../common/Txt.component";

export const MyMoney = () => {
    const {
        piece,
    } = {
        piece: "20000",
    };
    const handleButtonClick1 = () => {

    };

    const handleButtonClick2 = () => {
        Navigate("/payment/charge");
    };

    return (
        <>
            <div className="bg-FCFCFE p-4 rounded-lg">
                <Txt typography="h5">{piece}원</Txt>
                <Button onClick={handleButtonClick1}>출금</Button>
                <Button onClick={handleButtonClick2}>충전</Button>
            </div>

        </>
    )

}