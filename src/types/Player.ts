export type SymbolType = 'X' | 'O';

export interface PlayerProps {
  isActive: boolean;
  isWin: boolean;
  name: string;
  symbol: SymbolType;
}
