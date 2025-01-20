'use client'

import React from 'react'
import { Cell as CellType } from '@/types/game'

interface CellProps {
  value: CellType
  index: number
  onCellClick: (index: number) => void
  isWinningCell?: boolean
}

const Cell: React.FC<CellProps> = ({ value, index, onCellClick, isWinningCell = false }) => {
  const handleClick = () => {
    if (!value) {
      onCellClick(index)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Cell ${index + 1}, ${value || 'empty'}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`
        flex items-center justify-center
        h-24 w-24
        border-2 border-gray-300
        text-4xl font-bold
        transition-all duration-200
        cursor-pointer
        hover:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-blue-400
        ${isWinningCell ? 'bg-green-100' : ''}
        ${value ? 'cursor-not-allowed' : ''}
      `}
    >
      <span className={`
        ${value === 'X' ? 'text-blue-500' : 'text-red-500'}
        transform transition-transform duration-200 scale-100
        ${value ? 'animate-pop-in' : ''}
      `}>
        {value}
      </span>
    </div>
  )
}

export default Cell 