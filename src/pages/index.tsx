import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [bombMap, setBombMap] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const board: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

  const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];

  const bombrize = () => {
    let bombCount = 0;
    while (bombCount < 10) {
      const randomRow = Math.floor(Math.random() * 9);
      const randomCol = Math.floor(Math.random() * 9);
      if (userInputs[randomRow][randomCol] !== 1) {
        setBombMap((prevBombMap) => {
          const newBombMap = [...prevBombMap];
          newBombMap[randomRow][randomCol] = 1;
          return newBombMap;
        });
        bombCount++;
      }
    }
  };

  for (let t = 0; t < 9; t++) {
    for (let n = 0; n < 9; n++) {
      if (userInputs[t][n] === 1) {
        let bombnum = 0;
        for (const d of directions) {
          if (bombMap[t + d[0]] === undefined || bombMap[t + d[0]][n + d[1]] === undefined) {
            continue;
          } else if (bombMap[t + d[0]][n + d[1]] === 1) {
            bombnum++;
          }
        }
        board[t][n] = bombnum;
        console.table(board);
        //ばくだん
        if (bombMap[t][n] === 1) {
          board[t][n] = 11;
        }
      }
    }
  }

  //空白分裂

  const onClick = (x: number, y: number) => {
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    const newbombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
    if (bombMap[y][x] === 1) {
      alert('爆発！');
    }
    newuserInputs[y][x] = 1;
    console.table(bombMap);
    console.log('aaaaaa');
    setUserInputs(newuserInputs);

    // ここは爆弾を置く if
    const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
    if (!isPlaying) {
      bombrize();
      // for (let t = 0; t < 9; t++) {
      //   for (let n = 0; n < 9; t++) {
      //     let bombnum = 0;
      //     for (const d of directions) {
      //       if (bombMap[t + d[0]] !== undefined && bombMap[t + d[0]][n + d[1]] !== undefined) {
      //         continue;
      //       }
      //       bombnum++;
      //     }
      //     board[t][n] = 1;
      //   }
      // }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lowboard}>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                style={{
                  opacity: color === 0 ? 0 : 1,
                  backgroundImage: color !== -1 ? 'url()' : '',
                  border: color !== -1 ? '' : '',
                }}
                key={`${x}-${y}`}
                onClick={() => onClick(x, y)}
              >
                {color !== 0 && (
                  <div
                    className={styles.tile}
                    style={{
                      backgroundPosition: `-${(color - 1) * 30}px`,
                      opacity: color === -1 ? 0 : 1,
                    }}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
