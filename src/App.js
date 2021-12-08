import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // console.log("呼び出された！");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>Count Up!</button> */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} close={onClickClose} />
    </div>
  );
}
