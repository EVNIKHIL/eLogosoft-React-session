import { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Initial render");
    return () => {
      //
    };
  }, []);

  //   useEffect()

  return (
    <div>
      Count : {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Useeffect;
