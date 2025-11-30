import { cn } from "@/lib/utils"

interface ScrollingBannerProps {
  text: string
  direction: "left" | "right"
  className?: string
}

export function ScrollingBanner({ text, direction, className }: ScrollingBannerProps) {
  const animationClass = direction === "right" ? "animate-scroll-right" : "animate-scroll-left"

  return (
    <div className={cn("py-3 md:py-4 overflow-hidden relative", className)}>
      <div className={`flex gap-4 md:gap-8 ${animationClass}`}>
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="text-base md:text-lg lg:text-xl font-bold whitespace-nowrap flex items-center gap-2 md:gap-3"
          >
            <span>{text}</span>
            <span className="text-yellow-400">▶</span>
          </span>
        ))}
      </div>
    </div>
  )
}
