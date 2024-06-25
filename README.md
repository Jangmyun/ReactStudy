# React 복습

```javascript
function App() {
  const [amount, setAmount] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);

  const change = (e) => {
    setAmount(e.target.value);
  };

  const invert = () => {
    setInverted((current) => !current);
  };

  return <div></div>;
}
```

#### 여러 개 컴포넌트 중 하나를 display

```javascript
function App() {
  const [index, setIndex] = React.useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}
```

###### 삼항연산자 사용, `{}` 안에서 컴포넌트 선택하기
