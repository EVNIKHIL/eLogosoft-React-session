import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      Count: {count}
    </div>
  );
};

export default Usestate;
