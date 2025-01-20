export type Player = 'X' | 'O'
export type Cell = Player | null
export type Board = Cell[]

export interface GameState {
  board: Board
  currentPlayer: Player
  winner: Player | 'DRAW' | null
  scores: {
    X: number
    O: number
  }
}

export interface GameContextType {
  gameState: GameState
  handleCellClick: (index: number) => void
  handleResetGame: () => void
  handleNewGame: () => void
} 