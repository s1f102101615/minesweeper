import { useIndex } from '../hooks/useIndex';
import styles from './index.module.css';

const Home = () => {
  const { board, onClick, leftClick, reset, displayTime } = useIndex();

  return (
    <div className={styles.container}>
      <div className={styles.lowboard}>
        <div className={styles.reset} onClick={reset} />
        <div className={styles.timer}>
          <a>{displayTime}</a>
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                style={{
                  borderTopColor:
                    color === -1 || color === 10 ? 'rgb(255 255 255)' : 'rgb(74 74 74)',
                  borderRightColor:
                    color === -1 || color === 10 ? 'rgb(134 134 134)' : 'rgb(74 74 74)',
                  borderBottomColor:
                    color === -1 || color === 10 ? 'rgb(134 134 134)' : 'rgb(74 74 74)',
                  borderLeftColor:
                    color === -1 || color === 10 ? 'rgb(255 255 255)' : 'rgb(74 74 74)',
                  borderWidth: color === -1 || color === 10 ? '4px' : '0.5px',
                }}
                key={`${x}-${y}`}
                onClick={() => onClick(x, y)}
                onContextMenu={(event) => leftClick(x, y, event)}
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
