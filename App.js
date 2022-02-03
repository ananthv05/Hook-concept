import { useState } from "react";

function App() {
  const [name, showName] = useState("Iteron");
  const changeTheName = () => {
    showName("Ananth");
  };

  return (
    <div>
      <h1>UseState</h1>
      <p>Hi, I am {name}</p>
      <button onClick={changeTheName}> Click this </button>
    </div>
  );
}

export default App;


/*import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  );
}

export default App;*/


