import type { CellValue } from '@/types/CellValue';

export const checkColumns = (cells: CellValue[]) => {
  let isWinning = false;

  const maxIndexCol = cells.length / 3;

  for (let indexCol = 0; indexCol < maxIndexCol; indexCol++) {
    const firstElementCol = cells[indexCol];
    const secondElementCol = cells[indexCol + 3];
    const thirdlementCol = cells[indexCol + 6];

    const isAllValued = firstElementCol && secondElementCol && thirdlementCol;

    if (
      isAllValued &&
      firstElementCol === secondElementCol &&
      secondElementCol === thirdlementCol
    ) {
      isWinning = true;
    }
  }

  return isWinning;
};
