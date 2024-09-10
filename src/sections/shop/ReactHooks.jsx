// /* eslint-disable no-unused-vars */
// import { useState } from "react";

// const ReactHooks = () => {
//   let num = 0;
//   const [state, setState] = useState(0);

//   const handleClick = () => {
//     console.log("SUbmittinf");
//     num = num + 1;
//     console.log(num);
//     setState(state + 1);
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "50px",
//         }}
//       >
//         <button onClick={handleClick}>submit</button>
//       </div>
//       <div style={{ marginTop: "50px" }}>
//         <p style={{ fontSize: "2rem", textAlign: "center" }}>{state}</p>
//       </div>
//     </>
//   );
// };

// export default ReactHooks;

import { useState } from "react";
import { useEffect } from "react";

const ReactHooks = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, [num]);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <button onClick={handleClick}>submit</button>
      </div>
      <div style={{ marginTop: "50px" }}>
        <p style={{ fontSize: "2rem", textAlign: "center" }}>{num}</p>
      </div>
    </>
  );
};

export default ReactHooks;
