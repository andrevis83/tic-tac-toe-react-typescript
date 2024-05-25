import type { CellValue } from './CellValue';

export interface CellProps {
  isWin: boolean;
  position: number;
  value: CellValue;
  onClick: (arg: number) => void;
}
