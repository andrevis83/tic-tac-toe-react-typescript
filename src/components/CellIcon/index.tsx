import type { CellIconProps } from '@/types/CellIcon';
import './cell-icon.style.css';
import Circle from './Circle';
import Cross from './Cross';

function CellIcon({ symbol }: CellIconProps) {
  return symbol === 'O' ? <Circle /> : <Cross />;
}

export default CellIcon;
