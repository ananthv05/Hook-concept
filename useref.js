import { useRef } from "react";

function Logi() {
  const counter = useRef(0);
  const IncreaseCounter = () => {
    counter.current= counter.current+1;
  };

  return (
    <div>
      <h1>UseRef</h1>
      <p>Value: {counter.current}</p>
      <button onClick={IncreaseCounter}>
        Increase counter
      </button>
    </div>
  );
}

export default Logi;