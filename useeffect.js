import { useState, useEffect } from "react";

function Apps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  });

  return (
    <div>
        <h1>UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Apps;