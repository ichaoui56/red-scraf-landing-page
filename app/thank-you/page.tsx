"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState({
    quantity: 1,
    actualQuantity: 1,
    total: 100,
  })

  useEffect(() => {
    const quantity = Number.parseInt(searchParams.get("quantity") || "1")
    const actualQuantity = Number.parseInt(searchParams.get("actualQuantity") || "1")
    const total = Number.parseInt(searchParams.get("total") || "100")

    setOrderDetails({ quantity, actualQuantity, total })
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Hearts */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <svg className="w-8 h-8 text-red-500/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}

        {/* Flowers */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <svg className="w-6 h-6 text-pink-400/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c-1.1 0-2-.9-2-2v-2.5c-2.5-.4-4.5-2.4-4.9-4.9H2.5c-1.1 0-2-.9-2-2s.9-2 2-2h2.6c.4-2.5 2.4-4.5 4.9-4.9V1.2c0-1.1.9-2 2-2s2 .9 2 2v2.5c2.5.4 4.5 2.4 4.9 4.9h2.6c1.1 0 2 .9 2 2s-.9 2-2 2h-2.6c-.4 2.5-2.4 4.5-4.9 4.9V20c0 1.1-.9 2-2 2zm0-14c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl w-full">
        <div className="bg-gradient-to-br from-red-900/40 via-red-950/30 to-black/40 backdrop-blur-xl border-2 border-red-500/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-600/20">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-full p-6 shadow-xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">شكرا على طلبك! 🎉</h1>
            <p className="text-xl md:text-2xl text-red-300 mb-2 leading-relaxed">تم استلام طلبك بنجاح</p>
            <p className="text-lg text-gray-300 leading-relaxed">سنتصل بك خلال 24 ساعة للتأكيد</p>
          </div>

          {/* Order Summary */}
          <div className="bg-black/60 rounded-2xl p-6 md:p-8 border-2 border-yellow-500/40 mb-8">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">ملخص الطلب</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-300">الكمية المدفوعة:</span>
                <span className="text-white font-bold">{orderDetails.quantity} وشاح</span>
              </div>

              <div className="flex justify-between items-center text-xl bg-green-600/20 px-4 py-3 rounded-lg border border-green-500/40">
                <span className="text-green-300 font-bold">الكمية المستلمة:</span>
                <div className="flex items-center gap-2">
                  <span className="text-green-300 font-bold text-2xl">{orderDetails.actualQuantity} وشاح</span>
                  <span className="text-2xl">🎁</span>
                </div>
              </div>

              {orderDetails.actualQuantity > orderDetails.quantity && (
                <div className="flex justify-between items-center text-lg text-green-400">
                  <span className="font-semibold">هدية مجانية:</span>
                  <span className="font-bold">+{orderDetails.actualQuantity - orderDetails.quantity} وشاح 🎉</span>
                </div>
              )}

              <div className="border-t border-red-500/30 pt-4 flex justify-between items-center text-2xl">
                <span className="text-white font-bold">المجموع:</span>
                <span className="text-red-400 font-bold">{orderDetails.total}.00 MAD</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/20 rounded-2xl p-6 border border-blue-500/30 mb-8">
            <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">ماذا بعد؟</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600/40 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">سنتصل بك للتأكيد</p>
                  <p className="text-gray-400 text-sm">خلال 24 ساعة من فريق خدمة العملاء</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600/40 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">شحن الطلب</p>
                  <p className="text-gray-400 text-sm">توصيل مجاني لجميع مدن المغرب</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600/40 rounded-full p-2 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">الدفع عند الاستلام</p>
                  <p className="text-gray-400 text-sm">ادفع فقط عند استلام الوشاح</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Message */}
          <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 rounded-xl p-6 border border-red-500/40 mb-8 text-center">
            <p className="text-xl text-white leading-relaxed">
              "تعبير عن ذاتك ومشاعرك
              <br />
              أو كهدية لمن تحب"
            </p>
            <p className="text-red-300 mt-2">وشاح ميكاسا يحمل قصة لا تُنسى 🧣</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-red-600/30 transition-all duration-300 hover:scale-105">
                العودة للصفحة الرئيسية
              </button>
            </Link>
            <button
              onClick={() => (window.location.href = "https://wa.me/212602393795", "_blank")}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-lg font-bold py-4 rounded-xl shadow-xl shadow-green-600/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
