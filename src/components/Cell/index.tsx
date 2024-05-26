import type { CellProps } from '@/types/Cell';
import CellIcon from '@/components/CellIcon';
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
        {value && <CellIcon symbol={value === 'A' ? 'X' : 'O'} />}
      </button>
    </div>
  );
}

export default Cell;
