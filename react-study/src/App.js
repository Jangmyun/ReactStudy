import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);
  const [btcNum, setBtcNum] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! ({coins.length})</h1>
      <input
        onChange={(e) => setMyMoney(e.target.value)}
        value={myMoney}
        type="number"
        placeholder="Dollar"
      />
      <button
        onClick={() => {
          setBtcNum((prev) => myMoney / btcPrice);
        }}
      >
        Calculate BTC
      </button>
      <h3>{btcNum}</h3>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select
          onChange={(e) => {
            setBtcPrice(e.target.value);
          }}
        >
          {coins.map((item) => (
            <option key={item.id} value={item.quotes.USD.price}>
              {item.name} ({item.symbol}): {item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
