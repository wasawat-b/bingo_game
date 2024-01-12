export const genNumberList = (start, end) => {
  let list = [];
  let i = start;
  while (i <= end) {
    const num = i;
    list.push(num);
    i++;
  }
  return list;
};

export const bingoGame = (numList, passedList) => {
  const randomIndex = Math.floor(Math.random() * numList.length);
  const randomNumber = numList[randomIndex];

  passedList.push(randomNumber);
  numList.splice(randomIndex, 1);

  return [randomNumber, numList, passedList]
//   setList(numList);
//   setPassedList(passedList);
//   setNumber(randomNumber);
};

export const convertToString = (list) => {
  const newString = list.sort((a, b) => a - b).toString();
  const neww = list.join(" , ");

  return <p className="m-0">{neww}</p>;
};

export const checkBingo = (bingo, passedList) => {
  let flag = "Y";
  for (const item of bingo) {
    if (!passedList.includes(item)) {
      flag = "N";
    }
  }

  return flag;
};
