import type { CellIconProps } from '@/types/CellIcon';
import Circle from '@/components/Circle';
import Cross from '@/components/Cross';
import './cell-icon.style.css';

function CellIcon({ symbol }: CellIconProps) {
  return (
    <figure className="cell-icon">
      {symbol === 'O' ? <Circle /> : <Cross />}
    </figure>
  );
}

export default CellIcon;
