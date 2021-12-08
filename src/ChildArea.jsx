import React from "react";
import { memo } from "react";
const style = {
  width: "100px",
  height: "200PX",
  backgroundColor: "gray"
};

export const ChildArea = memo((props) => {
  const { open, close } = props;
  console.log("レンダリング！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("forEach");
  });
  return (
    <>
      {open ? (
        <div>
          <p style={style}>Child</p>
          <button onClick={close}>Close</button>
        </div>
      ) : null}
    </>
  );
});
