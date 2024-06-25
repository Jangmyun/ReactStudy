import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const click = () => {
    setCounter((prev) => prev + 1);
  };
  const inputChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  console.log("all the time");
  useEffect(() => {
    console.log("CALL API");
  }, []);
  console.log("Search For", keyword);

  return (
    <div>
      <input
        value={keyword}
        onChange={inputChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={click}>Click</button>
    </div>
  );
}

export default App;
