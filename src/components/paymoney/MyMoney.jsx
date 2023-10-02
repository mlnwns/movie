import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Br } from "../common/Br.component";
import { Button } from "../common/Button.component";
import { Txt } from "../common/Txt.component";
import { Modal } from "../common/Modal.component";

export const MyMoney = () => {
    const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
    const navigate = useNavigate();

    const {
        piece,
    } = {
        piece: "20000",
    };


    const handleButtonClick = () => {
        navigate('/paymoney/charge');
    };

    return (
        <>
            <div className="bg-FCFCFE p-4 rounded-lg">
                <Txt typography="h5">{piece}원</Txt>
                <Button onClick={() => setIsModalAlertOpen((prev) => !prev)}>출금</Button>
                <Modal.Alert
                    isOpen={isModalAlertOpen}
                    onClose={() => {
                        setIsModalAlertOpen(false);
                    }}
                    onRequestClose={() => setIsModalAlertOpen(false)}
                >
                    boromi@gmail.com로
                    <br />
                    예금주명, 계좌번호, 은행명,
                    <br />
                    출금 금액에 관한 내용을
                    <br />
                    전달해 주시기 바랍니다 :)
                    <br />
                    <br />
                </Modal.Alert>
                <Button onClick={handleButtonClick}>충전</Button>

            </div>

        </>
    )

}