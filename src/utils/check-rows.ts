import type { CellValue } from '@/types/CellValue';

export const checkRows = (cells: CellValue[]) => {
  let isWinning = false;

  for (let indexRow = 0; indexRow < cells.length; indexRow += 3) {
    const firstElementRow = cells[indexRow];
    const secondElementRow = cells[indexRow + 1];
    const thirdlementRow = cells[indexRow + 2];

    if (
      firstElementRow &&
      secondElementRow &&
      thirdlementRow &&
      firstElementRow === secondElementRow &&
      secondElementRow === thirdlementRow
    ) {
      isWinning = true;
    }
  }

  return isWinning;
};
