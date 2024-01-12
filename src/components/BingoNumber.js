const BingoNumberPage = ({ number, onClick }) => {
  return (
    <div className="containe mx-5 mt-0 pt-0 full-height-container-bingoNum">
      <div className="text-center row align-items-center justify-content-around">
          <h1 style={{ fontSize: 3.5 + "em", fontWeight: 900 }} className="topicBingo p-0">Bingo Number</h1>
          <p
            style={{ fontSize: 15 + "em" }}
            className="my-0 mx-4 p-0 buttonRandom"
            onClick={onClick}
          >
            {number}
          </p>
      </div>
    </div>
  );
};

export default BingoNumberPage;
