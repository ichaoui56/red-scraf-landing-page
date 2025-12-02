"use client"

import { useState } from "react"

const images = [
  {
    url: "/images/img-0899.jpg",
    alt: "Red Mikasa scarf with gift wrapping",
  },
  {
    url: "/images/img-0901-20-281-29.jpg",
    alt: "Red knitted scarf with bows",
  },
  {
    url: "/images/img-0896-202.avif",
    alt: "Red Mikasa scarf product",
  },
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative h-full mb-6 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img
          src={images[selectedImage].url || "/placeholder.svg"}
          alt={images[selectedImage].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105",
              selectedImage === index
                ? "ring-4 ring-red-500 shadow-lg shadow-red-500/50"
                : "ring-2 ring-white/20 hover:ring-red-400",
            )}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
