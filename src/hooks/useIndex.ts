import type React from 'react';
import { useState } from 'react';
import { useBoard } from './useBoard';
export const useIndex = () => {
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
  const [timer, setTimer] = useState({
    startedTime: 0,
    currentTime: 0,
    timer: 1,
  });
  const displayTime = Math.floor(((timer.currentTime - timer.startedTime) * timer.timer) / 1000);
  function gow(x: boolean | undefined) {
    setTimer((prevTime) => ({ ...prevTime, startedTime: Date.now() }));
    setTimer((prevTime) => ({ ...prevTime, currentTime: Date.now() }));
    if (x) {
      setTimer((prevTime) => ({ ...prevTime, timer: 1 }));
      console.log('true');
      setInterval(function () {
        setTimer(function (prevTimer) {
          return {
            ...prevTimer,
            currentTime: Date.now(),
          };
        });
      }, 1000);
    } else {
      console.log('false');
      setTimer((prevTime) => ({ ...prevTime, timer: 0 }));
    }
  }

  const board = useBoard({
    userInputs,
    bombMap,
  });

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
    gow(false);
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
  const leftClick = (x: number, y: number, event?: React.MouseEvent<HTMLDivElement>) => {
    if (event) {
      event.preventDefault(); // 右クリックのデフォルトの挙動を無効化
    }
    const leftuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    if (leftuserInputs[y][x] === 3) {
      leftuserInputs[y][x] = 0;
      setUserInputs(leftuserInputs);
    } else if (board[y][x] === -1) {
      leftuserInputs[y][x] = 3;
      setUserInputs(leftuserInputs);
    }
  };

  const onClick = (x: number, y: number) => {
    const newuserInputs: (0 | 1 | 2 | 3)[][] = userInputs.map((row) =>
      row.map((cell) => cell as 0 | 1 | 2 | 3)
    );
    if (userInputs[y][x] !== 3) {
      if (bombMap[y][x] === 1) {
        alert('爆発！');
      }
      newuserInputs[y][x] = 1;

      // ここは爆弾を置く if
      const isPlaying = userInputs.some((row) => row.some((input) => input === 1));
      if (!isPlaying) {
        bombrize(newuserInputs);
        gow(true);
      }
      setUserInputs(newuserInputs);
    }
  };

  return { board, onClick, leftClick, reset, displayTime };
};
