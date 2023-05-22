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
  //初期化
  const reset = () => {
    setUserInputs([
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
    setBombMap([
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
  };

  const bombrize = (one: (0 | 1 | 2 | 3)[][]) => {
    let bombCount = 0;
    const newBombMap = [...bombMap]; // 新しい爆弾の配置を保持する配列

    while (bombCount < 10) {
      const randomRow = Math.floor(Math.random() * 9);
      const randomCol = Math.floor(Math.random() * 9);

      if (one[randomRow][randomCol] !== 1 && newBombMap[randomRow][randomCol] !== 1) {
        newBombMap[randomRow][randomCol] = 1;
        bombCount++;
      }
    }

    setBombMap(newBombMap); // 新しい爆弾の配置をセット
  };

  const void_chain = (t: number, n: number) => {
    let bombnum = 0;
    if (bombMap[t][n] !== 1) {
      for (const d of directions) {
        const k = t + d[0];
        const p = n + d[1];
        if (bombMap[t + d[0]] === undefined || bombMap[t + d[0]][n + d[1]] === undefined) {
          continue;
        } else if (bombMap[k][p] === 1) {
          bombnum++;
        }
      }
      if (bombnum === 0) {
        board[t][n] = 0;
        for (const d of directions) {
          if (
            board[t + d[0]] === undefined ||
            board[t + d[0]][n + d[1]] === undefined ||
            board[t + d[0]][n + d[1]] === 0
          ) {
            continue;
          }
          board[t + d[0]][n + d[1]] = 0;
          void_chain(t + d[0], n + d[1]);
        }
      }
      if (bombnum !== 0) {
        board[t][n] = bombnum;
      }
    } else {
      for (let p = 0; p < 9; p++) {
        for (let k = 0; k < 9; k++) {
          if (bombMap[p][k] === 1) {
            board[p][k] = 11;
          }
        }
      }
    }
  };

  //空白分裂
  for (let t = 0; t < 9; t++) {
    for (let n = 0; n < 9; n++) {
      if (userInputs[t][n] === 1) {
        void_chain(t, n);
      }
    }
  }

  const onClick = (x: number, y: number) => {
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );

    if (bombMap[y][x] === 1) {
      alert('爆発！');
    }
    newuserInputs[y][x] = 1;

    // ここは爆弾を置く if
    const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
    if (!isPlaying) {
      bombrize(newuserInputs);
    }
    setUserInputs(newuserInputs);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lowboard}>
        <div className={styles.reset} onClick={reset} />
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                style={{
                  borderTopColor: color === -1 ? 'rgb(255 255 255)' : 'rgb(74 74 74)',
                  borderRightColor: color === -1 ? 'rgb(134 134 134)' : 'rgb(74 74 74)',
                  borderBottomColor: color === -1 ? 'rgb(134 134 134)' : 'rgb(74 74 74)',
                  borderLeftColor: color === -1 ? 'rgb(255 255 255)' : 'rgb(74 74 74)',
                  borderWidth: color === -1 ? '4px' : '0.5px',
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
