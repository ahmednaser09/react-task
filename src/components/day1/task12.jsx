// export default function task11() {
//     const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const evenNum = num.filter((num) => num % 2 === 0);
//     const oddNum = num.filter((num) => num % 2 !== 0);
//     return (
//       <div>
//         <div>
//           <h2>Even Num</h2>
//           <ul>
//             {evenNum.map((num) => (
//               <li>Even:{num}</li>
//             ))}
//           </ul>
//         </div>
  
//         <div>
//           <h2>Odd Num</h2>
//           <ul>
//             {oddNum.map((num) => (
//               <li> Odd:{num}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // تعريف الحالة

  const increment = () => setCount(count + 1); // زيادة العد
  const decrement = () => setCount(count - 1); // تقليل العد

  return (
    <div>
      <h1>العدّاد: {count}</h1>
      <button onClick={increment}>زيادة</button>
      <button onClick={decrement}>نقصان</button>
    </div>
  );
}

export default Counter;
