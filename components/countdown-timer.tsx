"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Get or set the countdown start time
    const startTimeKey = "countdownStartTime"
    let startTime = localStorage.getItem(startTimeKey)

    if (!startTime) {
      startTime = Date.now().toString()
      localStorage.setItem(startTimeKey, startTime)
    }

    const calculateTimeLeft = () => {
      const now = Date.now()
      const elapsed = now - Number.parseInt(startTime!)
      const totalSeconds = 5 * 60 * 60 - Math.floor(elapsed / 1000) // 5 hours in seconds

      if (totalSeconds <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 }
      }

      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      return { hours, minutes, seconds }
    }

    // Update immediately
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)

      // If time is up, clear the stored start time
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        localStorage.removeItem(startTimeKey)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl md:text-2xl text-red-400 font-semibold">ينتهي العرض خلال:</p>
      <div className="flex gap-3 md:gap-6">
        <TimeUnit value={timeLeft.hours} label="ساعات" />
        <div className="text-4xl md:text-6xl font-bold text-red-500 animate-pulse">:</div>
        <TimeUnit value={timeLeft.minutes} label="دقائق" />
        <div className="text-4xl md:text-6xl font-bold text-red-500 animate-pulse">:</div>
        <TimeUnit value={timeLeft.seconds} label="ثواني" />
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-xl">
        <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <span className="text-sm md:text-lg text-gray-400 mt-2">{label}</span>
    </div>
  )
}
