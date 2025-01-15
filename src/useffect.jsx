import React, { useEffect, useState } from "react";

function Useffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, [count]);
  return (
    <div>
      <h1>Hello world {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Useffect;
