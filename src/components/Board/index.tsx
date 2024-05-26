import { useEffect, useState } from 'react';
import { CellValue } from '@/types/CellValue';
import Cell from '@/components/Cell';
import Player from '@/components/Player';
import Players from '@/components/Players';
import Reset from '@/components/Reset';
import { checkColumns } from '@/utils/check-columns';
import { checkDiagonals } from '@/utils/check-diagonals';
import { checkRows } from '@/utils/check-rows';
import './board.style.css';

const INITIAL_STATE: CellValue[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
function Board() {
  const [activePlayer, setActivePlayer] = useState<CellValue>(null);
  const [cells, setCells] = useState(INITIAL_STATE);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    const isInitialState = cells.every((cell) => !cell);

    if (isInitialState) {
      setActivePlayer('A');
      return;
    }

    const existsWinningCol = checkColumns(cells);
    const existsWinningRow = checkRows(cells);
    const existsWinningDiag = checkDiagonals(cells);

    if (existsWinningCol || existsWinningRow || existsWinningDiag) {
      setIsWin(true);
      return;
    }

    setActivePlayer((prevState) => (prevState === 'A' ? 'B' : 'A'));
  }, [cells]);

  const handleTurn = (position: number) => {
    setCells((prevCells) =>
      prevCells.map((prevCell, indexPrevCell) =>
        indexPrevCell === position ? activePlayer : prevCell
      )
    );
  };

  const reset = () => {
    setCells(INITIAL_STATE);
    setActivePlayer(null);
    setIsWin(false);
  };

  return (
    <div className="paper">
      <Players>
        <Player isActive={activePlayer === 'A'} name="A" cellIcon="X" />
        <Player isActive={activePlayer === 'B'} name="B" cellIcon="O" />
      </Players>
      <div className="paper__board">
        {cells.map((cell, indexcCell) => (
          <Cell
            key={indexcCell}
            isWin={isWin}
            position={indexcCell}
            value={cell}
            onClick={handleTurn}
          />
        ))}
      </div>
      <Reset onClick={reset} />
    </div>
  );
}

export default Board;
