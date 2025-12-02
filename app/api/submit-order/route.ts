import { NextResponse } from "next/server"

interface OrderData {
  quantity: number
  fullName: string
  phone: string
  city: string
  address: string
  pricePerItem: number
  total: number
}

export async function POST(request: Request) {
  try {
    const orderData: OrderData = await request.json()

    const orderNumber = `ORD-${Date.now()}`
    const timestamp = new Date().toLocaleString("ar-MA", {
      timeZone: "Africa/Casablanca",
      dateStyle: "full",
      timeStyle: "short",
    })

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          .header-icon {
            font-size: 60px;
            margin-bottom: 15px;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 600;
            margin: 0;
          }
          .order-number {
            background: rgba(255,255,255,0.2);
            display: inline-block;
            padding: 8px 20px;
            border-radius: 20px;
            margin-top: 15px;
            font-size: 14px;
            font-weight: 500;
          }
          .content {
            padding: 40px 30px;
          }
          .section-title {
            color: #333;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
          }
          .info-box {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            color: #6c757d;
            font-weight: 500;
          }
          .value {
            color: #212529;
            font-weight: 600;
            text-align: left;
          }
          .total-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            margin-top: 30px;
          }
          .total-label {
            font-size: 18px;
            margin-bottom: 10px;
            opacity: 0.9;
          }
          .total-amount {
            font-size: 42px;
            font-weight: bold;
          }
          .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
          }
          .scarves {
            text-align: center;
            font-size: 50px;
            padding: 20px;
            margin: 20px 0;
            background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
            border-radius: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="header-icon">🧣</div>
            <h1>طلب جديد - وشاح ميكاسا</h1>
            <div class="order-number">${orderNumber}</div>
          </div>
          
          <div class="content">
            <div class="scarves">
              ${Array.from({ length: orderData.quantity })
                .map(() => "🧣")
                .join(" ")}
            </div>

            <h2 class="section-title">معلومات العميل</h2>
            <div class="info-box">
              <div class="info-row">
                <span class="label">الاسم الكامل</span>
                <span class="value">${orderData.fullName}</span>
              </div>
              <div class="info-row">
                <span class="label">رقم الهاتف</span>
                <span class="value">${orderData.phone}</span>
              </div>
              <div class="info-row">
                <span class="label">المدينة</span>
                <span class="value">${orderData.city}</span>
              </div>
              <div class="info-row">
                <span class="label">العنوان الكامل</span>
                <span class="value">${orderData.address}</span>
              </div>
            </div>
            
            <h2 class="section-title">تفاصيل الطلب</h2>
            <div class="info-box">
              <div class="info-row">
                <span class="label">الكمية</span>
                <span class="value">${orderData.quantity} وشاح</span>
              </div>
              <div class="info-row">
                <span class="label">ثمن الوحدة</span>
                <span class="value">${orderData.pricePerItem}.00 MAD</span>
              </div>
              <div class="info-row">
                <span class="label">التوصيل</span>
                <span class="value" style="color: #28a745;">مجاني ✓</span>
              </div>
            </div>

            <div class="total-box">
              <div class="total-label">المبلغ الإجمالي</div>
              <div class="total-amount">${orderData.total}.00 MAD</div>
              <div style="margin-top: 15px; font-size: 16px; opacity: 0.95;">💰 الدفع عند الاستلام</div>
            </div>
          </div>
          
          <div class="footer">
            <p><strong>تم إرسال هذا الطلب من موقع وشاح ميكاسا</strong></p>
            <p style="margin-top: 10px;">التاريخ: ${timestamp}</p>
          </div>
        </div>
      </body>
      </html>
    `

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Mikasa Scarf <onboarding@resend.dev>",
        to: "mikasa.akerman.scarf@gmail.com",
        subject: `🧣 طلب جديد - ${orderData.fullName} - ${orderData.quantity} وشاح`,
        html: emailHtml,
      }),
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.error("[v0] Resend API error:", responseData)
      throw new Error(`Failed to send email: ${responseData.message || "Unknown error"}`)
    }

    return NextResponse.json({
      success: true,
      message: "تم إرسال الطلب بنجاح!",
      orderNumber,
    })
  } catch (error) {
    console.error("Error processing order:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process order",
      },
      { status: 500 },
    )
  }
}
