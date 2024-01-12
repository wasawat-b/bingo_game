import { useState } from "react";
import BingoNumberPage from "./BingoNumber";
// import PassedNumberPage from "./BingoPassedNumber(Inactive)";
import NumberLeft from "./NumberLeft";
import NumberRight from "./NumberRight";
import { genNumberList, bingoGame, convertToString } from "../Function";
import LogoStore from "./LogoStore";

function BingoScreen() {
  const [list, setList] = useState(genNumberList(1, 99));
  const [passedList, setPassedList] = useState([]);
  const [number, setNumber] = useState(0);

  const onClickBingoGame = () => {
    const [randomNumber, recievedNumList, recievePassedList] = bingoGame(
      list,
      passedList
    );
    setList(recievedNumList);
    setPassedList(recievePassedList);
    setNumber(randomNumber);
  };

  return (
    <div className="container-fluid row align-items-center justify-content-around m-0 p-0 full-height-container">
      <div className="col-3">
        <NumberLeft passedList={passedList} />
      </div>
      <div className="col-6 my-0">
        <BingoNumberPage
          number={passedList.length <= 99 ? number : ""}
          onClick={onClickBingoGame}
        />
        {/* <PassedNumberPage
          passedList={passedList}
          convertToString={convertToString}
        /> */}
        <LogoStore />
      </div>
      <div className="col-3">
        <NumberRight passedList={passedList} />
      </div>
    </div>
  );
}

export default BingoScreen;
