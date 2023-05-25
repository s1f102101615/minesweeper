import { useMemo } from 'react';

export const useBoard = ({
  userInputs,
  bombMap,
}: {
  userInputs: (0 | 1 | 2 | 3)[][];
  bombMap: number[][];
}) => {
  const board: number[][] = useMemo(() => {
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
    const void_chain = (t: number, n: number) => {
      if (userInputs[t][n] !== 3) {
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
                board[t + d[0]][n + d[1]] === 0 ||
                userInputs[t + d[0]][n + d[1]] === 3
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
      } else {
        return;
      }
    };
    //空白分裂
    for (let t = 0; t < 9; t++) {
      for (let n = 0; n < 9; n++) {
        if (userInputs[t][n] === 3) {
          board[t][n] = 10;
        }
        if (userInputs[t][n] === 1) {
          void_chain(t, n);
        }
      }
    }
    return board;
  }, [bombMap, userInputs]);
  return board;
};
