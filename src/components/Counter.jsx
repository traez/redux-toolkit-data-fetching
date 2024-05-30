import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reduxtk/counterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-c">
      <h1>{value}</h1>
      <nav>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </nav>
    </div>
  );
};

export default Counter;
