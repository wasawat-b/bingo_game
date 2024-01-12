import { genNumberList } from "../Function";

const NumberRight = ({ passedList }) => {
  const oneList = genNumberList(52, 67);
  const twoList = genNumberList(68, 83);
  const threeList = genNumberList(84, 99);

  return (
    <div className="container">
      {/* <p className="text-light">Number list</p> */}
      <div className="row justify-content-around">
        <ul className="col-4 list-group">
          {oneList.map((item) => (
            <li
              class={`list-group-item ${
                passedList.includes(item)
                  ? "list-group-item-passed"
                  : "list-group-item"
              }`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="col-4 list-group">
          {twoList.map((item) => (
            <li
              class={`list-group-item ${
                passedList.includes(item)
                  ? "list-group-item-passed"
                  : "list-group-item"
              }`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="col-4 list-group">
          {threeList.map((item) => (
            <li
              class={`list-group-item ${
                passedList.includes(item)
                  ? "list-group-item-passed"
                  : "list-group-item"
              }`}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberRight;
