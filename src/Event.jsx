import { useState } from "react";

export default function Event() {
  const [count, setCount] = useState(0);

  return (
    <button
      id="counter"
      type="button"
      className="counter"
      onClick={() => setCount((currentCount) => currentCount + 1)}
    >
      Count is {count}
    </button>
  );
}
