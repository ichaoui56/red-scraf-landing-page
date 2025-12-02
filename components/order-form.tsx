"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const calculatePrice = (quantity: number) => {
  const pairs = Math.floor(quantity / 2)
  const singles = quantity % 2
  return pairs * 180 + singles * 99
}

export function OrderForm() {
  const router = useRouter()
  const { showToast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: "",
  })
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: "",
  })

  const shippingCost = 0
  const subtotal = calculatePrice(quantity)
  const total = subtotal + shippingCost

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phone: "",
      city: "",
      address: "",
    }
    let isValid = true

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب"
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب"
      isValid = false
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "رقم الهاتف غير صحيح (يجب أن يكون 10 أرقام)"
      isValid = false
    }

    if (!formData.city.trim()) {
      newErrors.city = "المدينة مطلوبة"
      isValid = false
    }

    if (!formData.address.trim()) {
      newErrors.address = "العنوان الكامل مطلوب"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      showToast("الرجاء ملء جميع الحقول بشكل صحيح", "error")
      return
    }

    showToast("جاري إرسال طلبك...", "success")

    try {
      const orderData = {
        ...formData,
        quantity,
        total,
        subtotal,
      }

      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit order")
      }

      showToast("تم إرسال طلبك بنجاح! جاري التحويل...", "success")

      setTimeout(() => {
        router.push(`/thank-you?quantity=${quantity}&total=${total}`)
      }, 1000)
    } catch (error) {
      console.error("Error submitting order:", error)
      showToast("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.", "error")
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" })
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-sm border-2 border-red-500/40 rounded-3xl p-6 md:p-10 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-400">اطلب الآن</h2>

        <div className="space-y-2 mb-6">
          <Label htmlFor="quantity" className="text-white text-lg">
            الكمية
          </Label>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-black/60 border-red-500/40 text-white hover:bg-red-900/40 text-2xl w-12 h-12"
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
              className="bg-black/60 border-red-500/40 text-white text-center text-2xl font-bold h-12"
            />
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="bg-black/60 border-red-500/40 text-white hover:bg-red-900/40 text-2xl w-12 h-12"
            >
              +
            </Button>
          </div>
        </div>

        <div className="bg-black/60 rounded-2xl p-6 mb-6 space-y-4">
          <div className="flex justify-between items-center text-xl">
            <span className="text-gray-300">الكمية:</span>
            <span className="text-white font-bold">{quantity} وشاح</span>
          </div>

          <div className="flex justify-between items-center text-xl">
            <span className="text-gray-300">التوصيل:</span>
            <span className="text-green-400 font-bold">مجاني</span>
          </div>

          <div className="border-t border-red-500/30 pt-4 flex justify-between items-center text-2xl">
            <span className="text-white font-bold">المجموع:</span>
            <span className="text-red-400 font-bold">{total}.00 درهم</span>
          </div>
        </div>

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
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="text-white">توصيل لجميع المدن</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white text-lg">
              الاسم الكامل
            </Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className={`bg-black/60 border-red-500/40 text-white text-lg h-12 ${errors.fullName ? "border-red-600 border-2" : ""}`}
              placeholder="أدخل اسمك الكامل"
            />
            {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
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
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`bg-black/60 border-red-500/40 text-white text-lg h-12 ${errors.phone ? "border-red-600 border-2" : ""}`}
              placeholder="06xxxxxxxx"
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-white text-lg">
              المدينة
            </Label>
            <Input
              id="city"
              required
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className={`bg-black/60 border-red-500/40 text-white text-lg h-12 ${errors.city ? "border-red-600 border-2" : ""}`}
              placeholder="الدار البيضاء، الرباط، مراكش..."
            />
            {errors.city && <p className="text-red-400 text-sm">{errors.city}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-white text-lg">
              العنوان الكامل
            </Label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={`bg-black/60 border-red-500/40 text-white text-lg h-12 ${errors.address ? "border-red-600 border-2" : ""}`}
              placeholder="رقم، شارع، حي..."
            />
            {errors.address && <p className="text-red-400 text-sm">{errors.address}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-base sm:text-xl md:text-2xl py-6 sm:py-7 md:py-8 rounded-xl shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 transition-all duration-300 hover:scale-105"
          >
            <span className="block text-center leading-tight">
              أكد الطلب - {quantity} وشاح ({total}.00 درهم)
            </span>
          </Button>
        </form>
      </div>
    </div>
  )
}
