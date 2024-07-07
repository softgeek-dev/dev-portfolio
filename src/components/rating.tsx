import { Star } from 'lucide-react'
import React from 'react'

interface RatingProps {
  rating: number
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 5
  const stars = Array(maxRating).fill(0)

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <Star
          key={index}
          className={`w-3 h-3 ${
            index < rating ? 'text-[yellow]' : 'text-muted'
          }`}
        />
      ))}
    </div>
  )
}
