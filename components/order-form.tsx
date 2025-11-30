"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function OrderForm() {
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: "",
  })

  const pricePerItem = 100
  const shippingCost = 0
  const actualQuantity = quantity >= 2 ? Math.floor(quantity / 2) * 3 + (quantity % 2) : quantity
  const savings = quantity >= 2 ? Math.floor(quantity / 2) * pricePerItem : 0
  const total = pricePerItem * quantity + shippingCost
  const freeItems = actualQuantity - quantity

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Order submitted:", { ...formData, quantity, actualQuantity, total })
    alert(`شكرا على طلبك! سنتصل بك قريبا للتأكيد\n\nستحصل على ${actualQuantity} وشاح بسعر ${total}.00 MAD`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-sm border-2 border-red-500/40 rounded-3xl p-6 md:p-10 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-400">اطلب الآن</h2>

        <div className="space-y-2 mb-6">
          <Label htmlFor="quantity" className="text-white text-lg">
            الكمية
          </Label>
          <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-500/50 rounded-xl p-3 mb-3">
            <p className="text-center text-base sm:text-lg md:text-xl font-bold text-yellow-300">
              🎁 عرض خاص: اشتري 2 واحصل على 1 مجانا!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-black/40 border-red-500/40 text-white hover:bg-red-900/40 text-2xl w-12 h-12"
            >
              -
            </Button>
            <Input
              id="quantity"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(10, Number.parseInt(e.target.value) || 1)))}
              className="bg-black/40 border-red-500/40 text-white text-center text-2xl font-bold h-12"
            />
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="bg-black/40 border-red-500/40 text-white hover:bg-red-900/40 text-2xl w-12 h-12"
            >
              +
            </Button>
          </div>

          <div className="bg-black/60 rounded-xl p-5 mt-4 border-2 border-yellow-500/30">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">تدفع مقابل:</p>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {Array.from({ length: quantity }).map((_, i) => (
                    <span key={i} className="text-4xl">
                      🧣
                    </span>
                  ))}
                </div>
                <p className="text-red-400 text-2xl font-bold">{quantity} وشاح</p>
                <p className="text-gray-300 text-lg">{total}.00 MAD</p>
              </div>

              <div className="text-center border-l-2 border-yellow-500/30">
                <p className="text-gray-400 text-sm mb-2">تحصل على:</p>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {Array.from({ length: actualQuantity }).map((_, i) => (
                    <span key={i} className={`text-4xl ${i >= quantity ? "animate-bounce" : ""}`}>
                      🧣{i >= quantity && "🎁"}
                    </span>
                  ))}
                </div>
                <p className="text-green-400 text-2xl font-bold">{actualQuantity} وشاح!</p>
                {freeItems > 0 && <p className="text-yellow-300 text-lg font-semibold">+ {freeItems} مجاني 🎉</p>}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setQuantity(2)}
              className="flex-1 bg-green-600/20 border-green-500/40 text-green-300 hover:bg-green-600/30 font-bold text-xs sm:text-sm md:text-base py-3 sm:py-2 px-2"
            >
              <span className="text-center">ادفع 2 = احصل على 3 🎁</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setQuantity(4)}
              className="flex-1 bg-green-600/20 border-green-500/40 text-green-300 hover:bg-green-600/30 font-bold text-xs sm:text-sm md:text-base py-3 sm:py-2 px-2"
            >
              <span className="text-center">ادفع 4 = احصل على 6 🎁</span>
            </Button>
          </div>
        </div>

        {quantity >= 2 && (
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-2 border-green-500/50 rounded-xl p-6 mb-6 text-center">
            <p className="text-2xl font-bold text-green-300 mb-1">🎉 مبروك! وفرت {savings}.00 MAD</p>
            <p className="text-lg text-white">
              ستستلم <span className="text-yellow-300 font-bold text-2xl">{actualQuantity} وشاح</span> بثمن{" "}
              <span className="text-red-400 font-bold">{quantity} فقط</span>
            </p>
          </div>
        )}

        {/* Pricing Breakdown */}
        <div className="bg-black/40 rounded-2xl p-6 mb-8 space-y-4">
          <div className="flex justify-between items-center text-xl">
            <span className="text-gray-300">الثمن (وحدة واحدة):</span>
            <span className="text-white font-bold">{pricePerItem}.00 MAD</span>
          </div>
          <div className="flex justify-between items-center text-xl">
            <span className="text-gray-300">الكمية المدفوعة:</span>
            <span className="text-white font-bold">{quantity}</span>
          </div>
          <div className="flex justify-between items-center text-2xl bg-green-600/20 -mx-2 px-2 py-3 rounded-lg border-2 border-green-500/40">
            <span className="text-green-300 font-bold">الكمية المستلمة:</span>
            <span className="text-green-300 font-bold text-3xl">{actualQuantity} وشاح 🎁</span>
          </div>
          <div className="flex justify-between items-center text-xl">
            <span className="text-gray-300">التوصيل:</span>
            <span className="text-green-400 font-bold">مجاني</span>
          </div>
          {savings > 0 && (
            <div className="flex justify-between items-center text-xl text-green-400">
              <span className="font-semibold">التوفير:</span>
              <span className="font-bold">- {savings}.00 MAD</span>
            </div>
          )}
          <div className="border-t border-red-500/30 pt-4 flex justify-between items-center text-2xl">
            <span className="text-white font-bold">المجموع:</span>
            <span className="text-red-400 font-bold">{total}.00 MAD</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3 bg-green-900/20 border border-green-500/40 rounded-xl p-4">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white">الدفع عند الاستلام</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-900/20 border border-blue-500/40 rounded-xl p-4">
            <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <span className="text-white">توصيل لجميع المدن</span>
          </div>
        </div>

        {/* Free Gift Banner */}
        <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-2 border-yellow-500/50 rounded-xl p-4 mb-8 text-center">
          <p className="text-xl font-bold text-yellow-300">🎁 عرض الهدية: اطلب الآن واحصل على مدية إضافية مجانية</p>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white text-lg">
              الاسم الكامل
            </Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-black/40 border-red-500/40 text-white text-lg h-12"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white text-lg">
              رقم الهاتف
            </Label>
            <Input
              id="phone"
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-black/40 border-red-500/40 text-white text-lg h-12"
              placeholder="06xxxxxxxx"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-white text-lg">
              المدينة
            </Label>
            <Input
              id="city"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="bg-black/40 border-red-500/40 text-white text-lg h-12"
              placeholder="الدار البيضاء، الرباط، مراكش..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-white text-lg">
              العنوان الكامل
            </Label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="bg-black/40 border-red-500/40 text-white text-lg h-12"
              placeholder="رقم، شارع، حي..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-base sm:text-xl md:text-2xl py-6 sm:py-7 md:py-8 rounded-xl shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 transition-all duration-300 hover:scale-105"
          >
            <span className="block text-center leading-tight">
              أكد الطلب - استلم {actualQuantity} وشاح ({total}.00 MAD)
            </span>
          </Button>
        </form>
      </div>
    </div>
  )
}
