'use client'

import { useEffect, useState } from 'react'

const UserDisplay = () => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    // Get username from localStorage if available
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  if (!username) return null

  return (
    <div className="absolute top-4 right-4 flex items-center">
      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
        {username[0].toUpperCase()}
      </div>
      <span className="text-white font-medium ml-2">{username}</span>
    </div>
  )
}

export default UserDisplay 