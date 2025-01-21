export default function task11() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNum = num.filter((num) => num % 2 === 0);
    const oddNum = num.filter((num) => num % 2 !== 0);
    return (
      <div>
        <div>
          <h2>Even Num</h2>
          <ul>
            {evenNum.map((num) => (
              <li>Even:{num}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h2>Odd Num</h2>
          <ul>
            {oddNum.map((num) => (
              <li> Odd:{num}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }