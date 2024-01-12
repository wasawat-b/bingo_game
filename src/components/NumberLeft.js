import { genNumberList } from "../Function";

const NumberLeft = ({ passedList }) => {
  const oneList = genNumberList(1, 17);
  const twoList = genNumberList(18, 34);
  const threeList = genNumberList(35, 51);

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

export default NumberLeft;
