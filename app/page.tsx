"use client"

import { useState, useEffect } from "react"
import { CountdownTimer } from "@/components/countdown-timer"
import { ScrollingBanner } from "@/components/scrolling-banner"
import { ProductGallery } from "@/components/product-gallery"
import { OrderForm } from "@/components/order-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Floating decorative elements - hearts, flowers, and red snowflakes scattered across the page */}
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
        {/* Top left area */}
        <div className="absolute top-[5%] left-[5%] animate-float">
          <svg className="w-8 h-8 md:w-12 md:h-12 text-red-400/30" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute top-[12%] left-[15%] animate-float animation-delay-200">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-red-300/25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5,0.5C12,0.5 12.5,0.64 12.87,1C13.24,1.31 13.5,1.76 13.5,2.25C13.5,2.74 13.36,3.19 13,3.56C12.64,3.93 12.19,4.17 11.7,4.17C11.21,4.17 10.76,4.03 10.39,3.67C10.02,3.31 9.78,2.86 9.78,2.37C9.78,1.88 9.92,1.43 10.28,1.06C10.64,0.69 11.09,0.45 11.58,0.45M18.5,6.5C19,6.5 19.5,6.64 19.87,7C20.24,7.31 20.5,7.76 20.5,8.25C20.5,8.74 20.36,9.19 20,9.56C19.64,9.93 19.19,10.17 18.7,10.17C18.21,10.17 17.76,10.03 17.39,9.67C17.02,9.31 16.78,8.86 16.78,8.37C16.78,7.88 16.92,7.43 17.28,7.06C17.64,6.69 18.09,6.45 18.58,6.45M5.5,6.5C6,6.5 6.5,6.64 6.87,7C7.24,7.31 7.5,7.76 7.5,8.25C7.5,8.74 7.36,9.19 7,9.56C6.64,9.93 6.19,10.17 5.7,10.17C5.21,10.17 4.76,10.03 4.39,9.67C4.02,9.31 3.78,8.86 3.78,8.37C3.78,7.88 3.92,7.43 4.28,7.06C4.64,6.69 5.09,6.45 5.58,6.45M12,8L9.5,10.5L12,13L14.5,10.5L12,8M18.5,12.5C19,12.5 19.5,12.64 19.87,13C20.24,13.31 20.5,13.76 20.5,14.25C20.5,14.74 20.36,15.19 20,15.56C19.64,15.93 19.19,16.17 18.7,16.17C18.21,16.17 17.76,16.03 17.39,15.67C17.02,15.31 16.78,14.86 16.78,14.37C16.78,13.88 16.92,13.43 17.28,13.06C17.64,12.69 18.09,12.45 18.58,12.45M5.5,12.5C6,12.5 6.5,12.64 6.87,13C7.24,13.31 7.5,13.76 7.5,14.25C7.5,14.74 7.36,15.19 7,15.56C6.64,15.93 6.19,16.17 5.7,16.17C5.21,16.17 4.76,16.03 4.39,15.67C4.02,15.31 3.78,14.86 3.78,14.37C3.78,13.88 3.92,13.43 4.28,13.06C4.64,12.69 5.09,12.45 5.58,12.45M11.5,18.5C12,18.5 12.5,18.64 12.87,19C13.24,19.31 13.5,19.76 13.5,20.25C13.5,20.74 13.36,21.19 13,21.56C12.64,21.93 12.19,22.17 11.7,22.17C11.21,22.17 10.76,22.03 10.39,21.67C10.02,21.31 9.78,20.86 9.78,20.37C9.78,19.88 9.92,19.43 10.28,19.06C10.64,18.69 11.09,18.45 11.58,18.45Z" />
          </svg>
        </div>

        {/* Red snowflakes top area */}
        <div className="absolute top-[8%] left-[25%] animate-float animation-delay-400">
          <svg className="w-7 h-7 md:w-10 md:h-10 text-red-400/35" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.79,13.95L18.46,14.57L16.87,13.5V10.5L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.86,8.76L13,7.59V5.33L14.71,3.62L13.29,2.21L12,3.5L10.71,2.21L9.29,3.62L11,5.33V7.59L8.15,8.76L6.56,7.69L5.94,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.14,10.5V13.5L5.55,14.57L3.22,13.95L2.7,15.88L4.47,16.35L4,18.12L5.94,18.64L6.56,16.31L8.15,15.24L11,16.41V18.67L9.29,20.38L10.71,21.79L12,20.5L13.29,21.79L14.71,20.38L13,18.67V16.41L15.86,15.24L17.45,16.31L18.07,18.64L20,18.12L19.54,16.35L21.31,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" />
          </svg>
        </div>

        {/* Top right area */}
        <div className="absolute top-[10%] right-[8%] animate-pulse animation-delay-600">
          <svg className="w-7 h-7 md:w-11 md:h-11 text-red-400/30" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute top-[18%] right-[18%] animate-float animation-delay-800">
          <svg className="w-6 h-6 md:w-9 md:h-9 text-red-300/25" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5,0.5C12,0.5 12.5,0.64 12.87,1C13.24,1.31 13.5,1.76 13.5,2.25C13.5,2.74 13.36,3.19 13,3.56C12.64,3.93 12.19,4.17 11.7,4.17C11.21,4.17 10.76,4.03 10.39,3.67C10.02,3.31 9.78,2.86 9.78,2.37C9.78,1.88 9.92,1.43 10.28,1.06C10.64,0.69 11.09,0.45 11.58,0.45M18.5,6.5C19,6.5 19.5,6.64 19.87,7C20.24,7.31 20.5,7.76 20.5,8.25C20.5,8.74 20.36,9.19 20,9.56C19.64,9.93 19.19,10.17 18.7,10.17C18.21,10.17 17.76,10.03 17.39,9.67C17.02,9.31 16.78,8.86 16.78,8.37C16.78,7.88 16.92,7.43 17.28,7.06C17.64,6.69 18.09,6.45 18.58,6.45M5.5,6.5C6,6.5 6.5,6.64 6.87,7C7.24,7.31 7.5,7.76 7.5,8.25C7.5,8.74 7.36,9.19 7,9.56C6.64,9.93 6.19,10.17 5.7,10.17C5.21,10.17 4.76,10.03 4.39,9.67C4.02,9.31 3.78,8.86 3.78,8.37C3.78,7.88 3.92,7.43 4.28,7.06C4.64,6.69 5.09,6.45 5.58,6.45M12,8L9.5,10.5L12,13L14.5,10.5L12,8M18.5,12.5C19,12.5 19.5,12.64 19.87,13C20.24,13.31 20.5,13.76 20.5,14.25C20.5,14.74 20.36,15.19 20,15.56C19.64,15.93 19.19,16.17 18.7,16.17C18.21,16.17 17.76,16.03 17.39,15.67C17.02,15.31 16.78,14.86 16.78,14.37C16.78,13.88 16.92,13.43 17.28,13.06C17.64,12.69 18.09,12.45 18.58,12.45M5.5,12.5C6,12.5 6.5,12.64 6.87,13C7.24,13.31 7.5,13.76 7.5,14.25C7.5,14.74 7.36,15.19 7,15.56C6.64,15.93 6.19,16.17 5.7,16.17C5.21,16.17 4.76,16.03 4.39,15.67C4.02,15.31 3.78,14.86 3.78,14.37C3.78,13.88 3.92,13.43 4.28,13.06C4.64,12.69 5.09,12.45 5.58,12.45M11.5,18.5C12,18.5 12.5,18.64 12.87,19C13.24,19.31 13.5,19.76 13.5,20.25C13.5,20.74 13.36,21.19 13,21.56C12.64,21.93 12.19,22.17 11.7,22.17C11.21,22.17 10.76,22.03 10.39,21.67C10.02,21.31 9.78,20.86 9.78,20.37C9.78,19.88 9.92,19.43 10.28,19.06C10.64,18.69 11.09,18.45 11.58,18.45Z" />
          </svg>
        </div>

        {/* Middle left area */}
        <div className="absolute top-[35%] left-[3%] animate-pulse animation-delay-1000">
          <svg className="w-8 h-8 md:w-11 md:h-11 text-red-400/30" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute top-[45%] left-[12%] animate-float animation-delay-1200">
          <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/25" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Middle right area */}
        <div className="absolute top-[40%] right-[5%] animate-float animation-delay-1400">
          <svg className="w-7 h-7 md:w-10 md:h-10 text-red-300/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5,0.5C12,0.5 12.5,0.64 12.87,1C13.24,1.31 13.5,1.76 13.5,2.25C13.5,2.74 13.36,3.19 13,3.56C12.64,3.93 12.19,4.17 11.7,4.17C11.21,4.17 10.76,4.03 10.39,3.67C10.02,3.31 9.78,2.86 9.78,2.37C9.78,1.88 9.92,1.43 10.28,1.06C10.64,0.69 11.09,0.45 11.58,0.45M18.5,6.5C19,6.5 19.5,6.64 19.87,7C20.24,7.31 20.5,7.76 20.5,8.25C20.5,8.74 20.36,9.19 20,9.56C19.64,9.93 19.19,10.17 18.7,10.17C18.21,10.17 17.76,10.03 17.39,9.67C17.02,9.31 16.78,8.86 16.78,8.37C16.78,7.88 16.92,7.43 17.28,7.06C17.64,6.69 18.09,6.45 18.58,6.45M5.5,6.5C6,6.5 6.5,6.64 6.87,7C7.24,7.31 7.5,7.76 7.5,8.25C7.5,8.74 7.36,9.19 7,9.56C6.64,9.93 6.19,10.17 5.7,10.17C5.21,10.17 4.76,10.03 4.39,9.67C4.02,9.31 3.78,8.86 3.78,8.37C3.78,7.88 3.92,7.43 4.28,7.06C4.64,6.69 5.09,6.45 5.58,6.45M12,8L9.5,10.5L12,13L14.5,10.5L12,8M18.5,12.5C19,12.5 19.5,12.64 19.87,13C20.24,13.31 20.5,13.76 20.5,14.25C20.5,14.74 20.36,15.19 20,15.56C19.64,15.93 19.19,16.17 18.7,16.17C18.21,16.17 17.76,16.03 17.39,15.67C17.02,15.31 16.78,14.86 16.78,14.37C16.78,13.88 16.92,13.43 17.28,13.06C17.64,12.69 18.09,12.45 18.58,12.45M5.5,12.5C6,12.5 6.5,12.64 6.87,13C7.24,13.31 7.5,13.76 7.5,14.25C7.5,14.74 7.36,15.19 7,15.56C6.64,15.93 6.19,16.17 5.7,16.17C5.21,16.17 4.76,16.03 4.39,15.67C4.02,15.31 3.78,14.86 3.78,14.37C3.78,13.88 3.92,13.43 4.28,13.06C4.64,12.69 5.09,12.45 5.58,12.45M11.5,18.5C12,18.5 12.5,18.64 12.87,19C13.24,19.31 13.5,19.76 13.5,20.25C13.5,20.74 13.36,21.19 13,21.56C12.64,21.93 12.19,22.17 11.7,22.17C11.21,22.17 10.76,22.03 10.39,21.67C10.02,21.31 9.78,20.86 9.78,20.37C9.78,19.88 9.92,19.43 10.28,19.06C10.64,18.69 11.09,18.45 11.58,18.45Z" />
          </svg>
        </div>
        <div className="absolute top-[52%] right-[15%] animate-pulse animation-delay-1600">
          <svg className="w-8 h-8 md:w-11 md:h-11 text-red-400/30" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Bottom left area */}
        <div className="absolute bottom-[25%] left-[8%] animate-float animation-delay-1800">
          <svg className="w-7 h-7 md:w-10 md:h-10 text-red-400/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.79,13.95L18.46,14.57L16.87,13.5V10.5L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.86,8.76L13,7.59V5.33L14.71,3.62L13.29,2.21L12,3.5L10.71,2.21L9.29,3.62L11,5.33V7.59L8.15,8.76L6.56,7.69L5.94,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.14,10.5V13.5L5.55,14.57L3.22,13.95L2.7,15.88L4.47,16.35L4,18.12L5.94,18.64L6.56,16.31L8.15,15.24L11,16.41V18.67L9.29,20.38L10.71,21.79L12,20.5L13.29,21.79L14.71,20.38L13,18.67V16.41L15.86,15.24L17.45,16.31L18.07,18.64L20,18.12L19.54,16.35L21.31,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[18%] animate-pulse animation-delay-2000">
          <svg className="w-6 h-6 md:w-9 md:h-9 text-red-300/25" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute bottom-[35%] left-[22%] animate-float animation-delay-2200">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-red-300/25" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Bottom right area */}
        <div className="absolute bottom-[20%] right-[10%] animate-pulse animation-delay-2400">
          <svg className="w-8 h-8 md:w-11 md:h-11 text-red-400/30" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute bottom-[30%] right-[20%] animate-float animation-delay-2600">
          <svg className="w-7 h-7 md:w-10 md:h-10 text-red-300/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.79,13.95L18.46,14.57L16.87,13.5V10.5L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.86,8.76L13,7.59V5.33L14.71,3.62L13.29,2.21L12,3.5L10.71,2.21L9.29,3.62L11,5.33V7.59L8.15,8.76L6.56,7.69L5.94,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.14,10.5V13.5L5.55,14.57L3.22,13.95L2.7,15.88L4.47,16.35L4,18.12L5.94,18.64L6.56,16.31L8.15,15.24L11,16.41V18.67L9.29,20.38L10.71,21.79L12,20.5L13.29,21.79L14.71,20.38L13,18.67V16.41L15.86,15.24L17.45,16.31L18.07,18.64L20,18.12L19.54,16.35L21.31,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" />
          </svg>
        </div>
        <div className="absolute bottom-[12%] right-[25%] animate-float animation-delay-2800">
          <svg className="w-6 h-6 md:w-9 md:h-9 text-red-300/25" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Bottom center area */}
        <div className="absolute bottom-[8%] left-[40%] animate-pulse animation-delay-3000">
          <svg className="w-7 h-7 md:w-10 md:h-10 text-red-400/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.79,13.95L18.46,14.57L16.87,13.5V10.5L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.86,8.76L13,7.59V5.33L14.71,3.62L13.29,2.21L12,3.5L10.71,2.21L9.29,3.62L11,5.33V7.59L8.15,8.76L6.56,7.69L5.94,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.14,10.5V13.5L5.55,14.57L3.22,13.95L2.7,15.88L4.47,16.35L4,18.12L5.94,18.64L6.56,16.31L8.15,15.24L11,16.41V18.67L9.29,20.38L10.71,21.79L12,20.5L13.29,21.79L14.71,20.38L13,18.67V16.41L15.86,15.24L17.45,16.31L18.07,18.64L20,18.12L19.54,16.35L21.31,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" />
          </svg>
        </div>
        <div className="absolute bottom-[5%] right-[45%] animate-float animation-delay-3200">
          <svg className="w-6 h-6 md:w-9 md:h-9 text-red-300/25" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Center area decorations */}
        <div className="absolute top-[60%] left-[30%] animate-float animation-delay-3400">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-red-300/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.5,0.5C12,0.5 12.5,0.64 12.87,1C13.24,1.31 13.5,1.76 13.5,2.25C13.5,2.74 13.36,3.19 13,3.56C12.64,3.93 12.19,4.17 11.7,4.17C11.21,4.17 10.76,4.03 10.39,3.67C10.02,3.31 9.78,2.86 9.78,2.37C9.78,1.88 9.92,1.43 10.28,1.06C10.64,0.69 11.09,0.45 11.58,0.45M18.5,6.5C19,6.5 19.5,6.64 19.87,7C20.24,7.31 20.5,7.76 20.5,8.25C20.5,8.74 20.36,9.19 20,9.56C19.64,9.93 19.19,10.17 18.7,10.17C18.21,10.17 17.76,10.03 17.39,9.67C17.02,9.31 16.78,8.86 16.78,8.37C16.78,7.88 16.92,7.43 17.28,7.06C17.64,6.69 18.09,6.45 18.58,6.45M5.5,6.5C6,6.5 6.5,6.64 6.87,7C7.24,7.31 7.5,7.76 7.5,8.25C7.5,8.74 7.36,9.19 7,9.56C6.64,9.93 6.19,10.17 5.7,10.17C5.21,10.17 4.76,10.03 4.39,9.67C4.02,9.31 3.78,8.86 3.78,8.37C3.78,7.88 3.92,7.43 4.28,7.06C4.64,6.69 5.09,6.45 5.58,6.45M12,8L9.5,10.5L12,13L14.5,10.5L12,8M18.5,12.5C19,12.5 19.5,12.64 19.87,13C20.24,13.31 20.5,13.76 20.5,14.25C20.5,14.74 20.36,15.19 20,15.56C19.64,15.93 19.19,16.17 18.7,16.17C18.21,16.17 17.76,16.03 17.39,15.67C17.02,15.31 16.78,14.86 16.78,14.37C16.78,13.88 16.92,13.43 17.28,13.06C17.64,12.69 18.09,12.45 18.58,12.45M5.5,12.5C6,12.5 6.5,12.64 6.87,13C7.24,13.31 7.5,13.76 7.5,14.25C7.5,14.74 7.36,15.19 7,15.56C6.64,15.93 6.19,16.17 5.7,16.17C5.21,16.17 4.76,16.03 4.39,15.67C4.02,15.31 3.78,14.86 3.78,14.37C3.78,13.88 3.92,13.43 4.28,13.06C4.64,12.69 5.09,12.45 5.58,12.45M11.5,18.5C12,18.5 12.5,18.64 12.87,19C13.24,19.31 13.5,19.76 13.5,20.25C13.5,20.74 13.36,21.19 13,21.56C12.64,21.93 12.19,22.17 11.7,22.17C11.21,22.17 10.76,22.03 10.39,21.67C10.02,21.31 9.78,20.86 9.78,20.37C9.78,19.88 9.92,19.43 10.28,19.06C10.64,18.69 11.09,18.45 11.58,18.45Z" />
          </svg>
        </div>
        <div className="absolute top-[70%] right-[35%] animate-pulse animation-delay-3600">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-red-400/25" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Left smoke */}
        <div className="absolute left-0 top-0 h-full w-[40%] bg-gradient-to-r from-red-900/40 via-red-600/20 to-transparent blur-3xl" />
        {/* Right smoke */}
        <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-red-900/40 via-red-600/20 to-transparent blur-3xl" />
        {/* Top smoke */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-red-900/30 via-red-600/15 to-transparent blur-2xl" />
        {/* Bottom smoke */}
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-red-900/30 via-red-600/15 to-transparent blur-2xl" />
      </div>

      {/* Top Scrolling Banner */}
      <ScrollingBanner text="عرض خاص: اشتري 2 احصل على 1 مجانا" direction="right" className="bg-white text-black" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-8 md:py-12">
          <div className="relative bg-gradient-to-b from-red-500/40 via-red-600/30 to-red-700/20 backdrop-blur-sm">
            {/* Decorative Hearts - Top corners */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 animate-pulse">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-red-400/60" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 animate-pulse animation-delay-200">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-red-400/60" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Decorative Flowers - Scattered around */}
            <div className="absolute top-20 left-[10%] animate-float">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4C10 4.5 10.2 5 10.59 5.41C11 5.81 11.5 6 12 6C12.5 6 13 5.81 13.41 5.41C13.81 5 14 4.5 14 4C14 3.5 13.81 3 13.41 2.59C13 2.19 12.5 2 12 2M18 8C17.5 8 17 8.19 16.59 8.59C16.2 9 16 9.5 16 10C16 10.5 16.2 11 16.59 11.41C17 11.81 17.5 12 18 12C18.5 12 19 11.81 19.41 11.41C19.81 11 20 10.5 20 10C20 9.5 19.81 9 19.41 8.59C19 8.19 18.5 8 18 8M6 8C5.5 8 5 8.19 4.59 8.59C4.2 9 4 9.5 4 10C4 10.5 4.2 11 4.59 11.41C5 11.81 5.5 12 6 12C6.5 12 7 11.81 7.41 11.41C7.81 11 8 10.5 8 10C8 9.5 7.81 9 7.41 8.59C7 8.19 6.5 8 6 8M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10M18 14C17.5 14 17 14.19 16.59 14.59C16.2 15 16 15.5 16 16C16 16.5 16.2 17 16.59 17.41C17 17.81 17.5 18 18 18C18.5 18 19 17.81 19.41 17.41C19.81 17 20 16.5 20 16C20 15.5 19.81 15 19.41 14.59C19 14.19 18.5 14 18 14M6 14C5.5 14 5 14.19 4.59 14.59C4.2 15 4 15.5 4 16C4 16.5 4.2 17 4.59 17.41C5 17.81 5.5 18 6 18C6.5 18 7 17.81 7.41 17.41C7.81 17 8 16.5 8 16C8 15.5 7.81 15 7.41 14.59C7 14.19 6.5 14 6 14M12 18C11.5 18 11 18.19 10.59 18.59C10.2 19 10 19.5 10 20C10 20.5 10.2 21 10.59 21.41C11 21.81 11.5 22 12 22C12.5 22 13 21.81 13.41 21.41C13.81 21 14 20.5 14 20C14 19.5 13.81 19 13.41 18.59C13 18.19 12.5 18 12 18Z" />
              </svg>
            </div>
            <div className="absolute top-32 right-[15%] animate-float animation-delay-400">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4C10 4.5 10.2 5 10.59 5.41C11 5.81 11.5 6 12 6C12.5 6 13 5.81 13.41 5.41C13.81 5 14 4.5 14 4C14 3.5 13.81 3 13.41 2.59C13 2.19 12.5 2 12 2M18 8C17.5 8 17 8.19 16.59 8.59C16.2 9 16 9.5 16 10C16 10.5 16.2 11 16.59 11.41C17 11.81 17.5 12 18 12C18.5 12 19 11.81 19.41 11.41C19.81 11 20 10.5 20 10C20 9.5 19.81 9 19.41 8.59C19 8.19 18.5 8 18 8M6 8C5.5 8 5 8.19 4.59 8.59C4.2 9 4 9.5 4 10C4 10.5 4.2 11 4.59 11.41C5 11.81 5.5 12 6 12C6.5 12 7 11.81 7.41 11.41C7.81 11 8 10.5 8 10C8 9.5 7.81 9 7.41 8.59C7 8.19 6.5 8 6 8M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10M18 14C17.5 14 17 14.19 16.59 14.59C16.2 15 16 15.5 16 16C16 16.5 16.2 17 16.59 17.41C17 17.81 17.5 18 18 18C18.5 18 19 17.81 19.41 17.41C19.81 17 20 16.5 20 16C20 15.5 19.81 15 19.41 14.59C19 14.19 18.5 14 18 14M6 14C5.5 14 5 14.19 4.59 14.59C4.2 15 4 15.5 4 16C4 16.5 4.2 17 4.59 17.41C5 17.81 5.5 18 6 18C6.5 18 7 17.81 7.41 17.41C7.81 17 8 16.5 8 16C8 15.5 7.81 15 7.41 14.59C7 14.19 6.5 8 6 8M12 18C11.5 18 11 18.19 10.59 18.59C10.2 19 10 19.5 10 20C10 20.5 10.2 21 10.59 21.41C11 21.81 11.5 22 12 22C12.5 22 13 21.81 13.41 21.41C13.81 21 14 20.5 14 20C14 19.5 13.81 19 13.41 18.59C13 18.19 12.5 18 12 18Z" />
              </svg>
            </div>
            <div className="absolute top-16 right-[12%] animate-float animation-delay-600">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
              {/* Title */}
              <div className="text-center mb-8 md:mb-12 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">شال ميكاسا</h1>
                <p className="text-2xl md:text-4xl text-white/90 font-semibold drop-shadow-lg">رمز الصحبة والدفء</p>
              </div>

              <div className="flex flex-row gap-4 md:gap-12 items-center justify-center max-w-6xl mx-auto">
                {/* Scarf Image 1 - Smaller size */}
                <div className="relative group animate-fade-in w-[35%] md:w-[40%] flex justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                  <img
                    src="/images/scarf-image-1.png"
                    alt="Mikasa Scarf Product"
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Mikasa Image - Larger, main focus */}
                <div className="relative group animate-fade-in animation-delay-200 w-[65%] md:w-[60%] flex justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                  <img
                    src="/images/mikasa-with-scarf.png"
                    alt="Mikasa wearing the red scarf"
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Below Section 1 */}
              <div className="text-center mt-8 md:mt-12 animate-fade-in animation-delay-400">
                <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed max-w-3xl mx-auto">
                  كتعبير عن ذاتك ومشاعرك
                  <br />
                  أو كهدية لمن تحب
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-[20%] animate-pulse animation-delay-600">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute bottom-4 right-[20%] animate-pulse animation-delay-800">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/50 via-red-600/60 to-red-500/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/40 to-transparent blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/50 to-red-600/30 blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/40 via-red-600/30 to-transparent blur-2xl" />

            {/* CTA Button in center */}
            <Button
              onClick={scrollToOrder}
              size="lg"
              className="relative z-20 bg-gradient-to-br from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white text-lg md:text-2xl px-6 md:px-12 py-5 md:py-8 rounded-2xl shadow-2xl shadow-red-600/60 hover:shadow-red-600/80 transition-all duration-300 hover:scale-105 font-bold border-2 border-red-500/50"
            >
              اطلب الآن
              <br />
              <span className="text-sm md:text-lg font-normal">مع الدفع عند الاستلام</span>
            </Button>
          </div>

          <div className="relative bg-gradient-to-b from-red-600/30 via-red-500/20 to-transparent backdrop-blur-sm">
            {/* Decorative Flowers - Top area */}
            <div className="absolute top-8 left-[8%] animate-float animation-delay-200">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4C10 4.5 10.2 5 10.59 5.41C11 5.81 11.5 6 12 6C12.5 6 13 5.81 13.41 5.41C13.81 5 14 4.5 14 4C14 3.5 13.81 3 13.41 2.59C13 2.19 12.5 2 12 2M18 8C17.5 8 17 8.19 16.59 8.59C16.2 9 16 9.5 16 10C16 10.5 16.2 11 16.59 11.41C17 11.81 17.5 12 18 12C18.5 12 19 11.81 19.41 11.41C19.81 11 20 10.5 20 10C20 9.5 19.81 9 19.41 8.59C19 8.19 18.5 8 18 8M6 8C5.5 8 5 8.19 4.59 8.59C4.2 9 4 9.5 4 10C4 10.5 4.2 11 4.59 11.41C5 11.81 5.5 12 6 12C6.5 12 7 11.81 7.41 11.41C7.81 11 8 10.5 8 10C8 9.5 7.81 9 7.41 8.59C7 8.19 6.5 8 6 8M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10M18 14C17.5 14 17 14.19 16.59 14.59C16.2 15 16 15.5 16 16C16 16.5 16.2 17 16.59 17.41C17 17.81 17.5 18 18 18C18.5 18 19 17.81 19.41 17.41C19.81 17 20 16.5 20 16C20 15.5 19.81 15 19.41 14.59C19 14.19 18.5 14 18 14M6 14C5.5 14 5 14.19 4.59 14.59C4.2 15 4 15.5 4 16C4 16.5 4.2 17 4.59 17.41C5 17.81 5.5 18 6 18C6.5 18 7 17.81 7.41 17.41C7.81 17 8 16.5 8 16C8 15.5 7.81 15 7.41 14.59C7 14.19 6.5 14 6 14M12 18C11.5 18 11 18.19 10.59 18.59C10.2 19 10 19.5 10 20C10 20.5 10.2 21 10.59 21.41C11 21.81 11.5 22 12 22C12.5 22 13 21.81 13.41 21.41C13.81 21 14 20.5 14 20C14 19.5 13.81 19 13.41 18.59C13 18.19 12.5 18 12 18Z" />
              </svg>
            </div>
            <div className="absolute top-16 right-[12%] animate-float animation-delay-600">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59C10.2 3 10 3.5 10 4C10 4.5 10.2 5 10.59 5.41C11 5.81 11.5 6 12 6C12.5 6 13 5.81 13.41 5.41C13.81 5 14 4.5 14 4C14 3.5 13.81 3 13.41 2.59C13 2.19 12.5 2 12 2M18 8C17.5 8 17 8.19 16.59 8.59C16.2 9 16 9.5 16 10C16 10.5 16.2 11 16.59 11.41C17 11.81 17.5 12 18 12C18.5 12 19 11.81 19.41 11.41C19.81 11 20 10.5 20 10C20 9.5 19.81 9 19.41 8.59C19 8.19 18.5 8 18 8M6 8C5.5 8 5 8.19 4.59 8.59C4.2 9 4 9.5 4 10C4 10.5 4.2 11 4.59 11.41C5 11.81 5.5 12 6 12C6.5 12 7 11.81 7.41 11.41C7.81 11 8 10.5 8 10C8 9.5 7.81 9 7.41 8.59C7 8.19 6.5 8 6 8M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10M18 14C17.5 14 17 14.19 16.59 14.59C16.2 15 16 15.5 16 16C16 16.5 16.2 17 16.59 17.41C17 17.81 17.5 18 18 18C18.5 18 19 17.81 19.41 17.41C19.81 17 20 16.5 20 16C20 15.5 19.81 15 19.41 14.59C19 14.19 18.5 14 18 14M6 14C5.5 14 5 14.19 4.59 14.59C4.2 15 4 15.5 4 16C4 16.5 4.2 17 4.59 17.41C5 17.81 5.5 18 6 18C6.5 18 7 17.81 7.41 17.41C7.81 17 8 16.5 8 16C8 15.5 7.81 15 7.41 14.59C7 14.19 6.5 14 6 14M12 18C11.5 18 11 18.19 10.59 18.59C10.2 19 10 19.5 10 20C10 20.5 10.2 21 10.59 21.41C11 21.81 11.5 22 12 22C12.5 22 13 21.81 13.41 21.41C13.81 21 14 20.5 14 20C14 19.5 13.81 19 13.41 18.59C13 18.19 12.5 18 12 18Z" />
              </svg>
            </div>

            {/* Hearts scattered */}
            <div className="absolute top-24 left-[5%] animate-pulse">
              <svg className="w-5 h-5 md:w-8 md:h-8 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute top-28 right-[8%] animate-pulse animation-delay-400">
              <svg className="w-5 h-5 md:w-8 md:h-8 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
              {/* Title for Section 2 */}
              <div className="text-center mb-8 md:mb-12 animate-fade-in">
                <p className="text-3xl md:text-5xl text-white font-bold mb-6 drop-shadow-lg leading-relaxed">
                  سواء ان كنت ستشتريه
                </p>
              </div>

              <div className="flex flex-row gap-4 md:gap-12 items-center justify-center max-w-6xl mx-auto">
                {/* Eren & Mikasa Image - Larger, main focus */}
                <div className="relative group animate-fade-in w-[65%] md:w-[60%] flex justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                  <img
                    src="/images/eren-mikasa.png"
                    alt="Eren wrapping scarf around Mikasa"
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Scarf Image 2 - Smaller size */}
                <div className="relative group animate-fade-in animation-delay-200 w-[35%] md:w-[40%] flex justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                  <img
                    src="/images/scarf-image-2.png"
                    alt="Mikasa Scarf Product 2"
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* CTA and Benefits */}
              <div className="text-center mt-12 md:mt-16 space-y-8 animate-fade-in animation-delay-400">
                {/* Countdown Timer */}
                {mounted && <CountdownTimer />}

                {/* Main CTA Text */}
                <div className="bg-red-600/40 backdrop-blur-md border-2 border-red-400/50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">عند طلبك اليوم ستحصل على</p>

                  {/* Benefits List */}
                  <div className="space-y-3 text-right">
                    {["وشاح ميكاسا الأصلي", "هدية إضافية مجانية", "تغليف جاهز للإهداء", "توصيل سريع داخل المغرب"].map(
                      (item, index) => (
                        <div key={index} className="flex items-center gap-3 justify-end">
                          <span className="text-lg md:text-xl text-white font-medium">{item}</span>
                          <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-8 left-[15%] animate-pulse animation-delay-1000">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute bottom-8 right-[15%] animate-pulse animation-delay-1200">
              <svg className="w-6 h-6 md:w-10 md:h-10 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-red-900/40 to-red-950/40 backdrop-blur-sm border-2 border-red-500/50 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-500/20 border-2 border-yellow-400 rounded-full px-6 py-2 mb-4">
                <p className="text-xl md:text-2xl font-bold text-yellow-300">🔥 عرض خاص: اشتري 2 واحصل على 1 مجانا!</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">عرض محدود</h2>
              <p className="text-2xl md:text-3xl text-white font-semibold">عند طلبك اليوم ستصل على:</p>
            </div>

            <div className="space-y-4">
              {[
                "🎁 اشتري 2 واحصل على 1 مجانا",
                "وشاح ميكاسا الأصلي",
                "تغليف جاهز للهدية",
                "توصيل سريع داخل المغرب",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 rounded-xl p-4 hover:bg-black/50 transition-all duration-300 ${
                    index === 0 ? "bg-green-600/30 border-2 border-green-500/50" : "bg-black/30"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index === 0 ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className={`text-xl ${index === 0 ? "text-green-200 font-bold" : "text-white"}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-400">تفاصيل المنتج</h2>

          <ProductGallery />

          <div className="max-w-3xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
            {[
              "ثيم ديال Attack on Titan أصلية",
              "خامة دافية للشتاء",
              "جودة عالية ومتينة",
              "تصميم أنمي أصلي",
              "مثالية للبرد والأناقة",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gradient-to-br from-red-900/20 to-transparent backdrop-blur-sm border border-red-500/30 rounded-xl p-5 hover:border-red-500/60 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-lg text-white">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Order Section */}
        <section id="order-section" className="container mx-auto px-4 py-16">
          <OrderForm />
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-sm border-t border-red-900/30 py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 bg-red-600/20 border border-red-500/50 rounded-full px-8 py-4 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-2xl font-bold text-white">الدفع عند الاستلام</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-400">
              <p className="text-lg">توصيل مجاني لجميع المدن المغربية</p>
              <p className="text-lg">جودة عالية • خدمة ممتازة • ضمان الرضا</p>
            </div>

            <div className="mt-8 pt-8 border-t border-red-900/30">
              <p className="text-gray-500">© 2025 Mikasa Scarf Morocco. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Bottom Scrolling Banner */}
      <ScrollingBanner
        text="توصيل مجاني لكل المغرب > جودة عالية > ضمان الجودة > هدية مثالية"
        direction="left"
        className="bg-red-600 text-white"
      />
    </div>
  )
}
