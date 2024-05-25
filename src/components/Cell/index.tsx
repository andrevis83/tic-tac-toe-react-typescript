import type { CellProps } from '@/types/Cell';
import './cell.style.css';

function Cell({ onClick, isWin, position, value }: CellProps) {
  const handleClick = (arg: number) => {
    onClick(arg);
  };

  return (
    <div className="cell">
      <button
        className="cell__button"
        disabled={Boolean(value) || isWin}
        onClick={() => handleClick(position)}
      >
        {value && (
          <span className="cell__icon">{value === 'A' ? 'X' : 'O'}</span>
        )}
      </button>
    </div>
  );
}

export default Cell;
