import type { CellValue } from '@/types/CellValue';

export const checkDiagonals = (cells: CellValue[]) => {
  const primaryDiag = checkDiagonal(cells, true);
  const secondaryDiag = checkDiagonal(cells);

  return primaryDiag || secondaryDiag;
};

const checkDiagonal = (cells: CellValue[], isPrimaryDiag = false) => {
  const indexes = isPrimaryDiag ? [0, 4, 8] : [2, 4, 6];

  const diagonal = cells.filter((_, indexCell) => indexes.includes(indexCell));

  const isValidDiag = diagonal.every((diagonal) => diagonal);

  if (!isValidDiag) {
    return false;
  }

  const firstDiagElement = diagonal[0];
  return diagonal.every(
    (diagonalElement) => diagonalElement === firstDiagElement
  );
};
