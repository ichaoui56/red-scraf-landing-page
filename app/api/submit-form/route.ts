import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const orderData = await request.json()

    // Create HTML email template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Cairo', 'Arial', sans-serif;
            background: linear-gradient(135deg, #1a0000 0%, #4a0000 100%);
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #2d0a0a 0%, #1a0000 100%);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(220, 38, 38, 0.3);
            border: 2px solid rgba(220, 38, 38, 0.3);
          }
          .header {
            background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
            padding: 30px;
            text-align: center;
            position: relative;
          }
          .header h1 {
            color: white;
            margin: 0;
            font-size: 32px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          .header .icon {
            font-size: 60px;
            margin-bottom: 10px;
          }
          .content {
            padding: 30px;
            color: #fff;
          }
          .order-info {
            background: rgba(0,0,0,0.3);
            border: 2px solid rgba(220, 38, 38, 0.3);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 25px;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid rgba(220, 38, 38, 0.2);
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            color: #fca5a5;
            font-weight: bold;
            font-size: 16px;
          }
          .value {
            color: white;
            font-size: 16px;
            font-weight: 600;
          }
          .highlight-box {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%);
            border: 2px solid rgba(34, 197, 94, 0.4);
            border-radius: 15px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
          }
          .highlight-box h2 {
            color: #86efac;
            margin: 0 0 10px 0;
            font-size: 28px;
          }
          .highlight-box p {
            color: white;
            margin: 5px 0;
            font-size: 18px;
          }
          .promo-badge {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            color: #1a0000;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            margin: 20px 0;
          }
          .footer {
            background: rgba(0,0,0,0.4);
            padding: 20px;
            text-align: center;
            color: #fca5a5;
            font-size: 14px;
          }
          .total-box {
            background: linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(153, 27, 27, 0.3) 100%);
            border: 3px solid #dc2626;
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
          }
          .total-box .amount {
            font-size: 36px;
            color: #fca5a5;
            font-weight: bold;
            margin: 10px 0;
          }
          .scarf-visual {
            text-align: center;
            font-size: 48px;
            padding: 20px;
            background: rgba(0,0,0,0.2);
            border-radius: 10px;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="icon">🧣</div>
            <h1>طلب جديد - وشاح ميكاسا</h1>
          </div>
          
          <div class="content">
            ${
              orderData.actualQuantity > orderData.quantity
                ? `
              <div class="promo-badge">
                🎁 عرض خاص: اشتري ${orderData.quantity} واحصل على ${orderData.actualQuantity} وشاح!
              </div>
            `
                : ""
            }
            
            <div class="highlight-box">
              <h2>🎉 طلب جديد وارد!</h2>
              <p>العميل سيستلم <strong>${orderData.actualQuantity} وشاح</strong></p>
              ${orderData.freeItems > 0 ? `<p style="color: #fbbf24;">+ ${orderData.freeItems} وشاح مجاني 🎁</p>` : ""}
            </div>

            <div class="scarf-visual">
              ${Array.from({ length: orderData.actualQuantity })
                .map((_, i) => `🧣${i >= orderData.quantity ? "🎁" : ""}`)
                .join(" ")}
            </div>
            
            <h2 style="color: #fca5a5; border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 10px;">معلومات العميل</h2>
            <div class="order-info">
              <div class="info-row">
                <span class="label">الاسم الكامل:</span>
                <span class="value">${orderData.fullName}</span>
              </div>
              <div class="info-row">
                <span class="label">رقم الهاتف:</span>
                <span class="value">${orderData.phone}</span>
              </div>
              <div class="info-row">
                <span class="label">المدينة:</span>
                <span class="value">${orderData.city}</span>
              </div>
              <div class="info-row">
                <span class="label">العنوان الكامل:</span>
                <span class="value">${orderData.address}</span>
              </div>
            </div>
            
            <h2 style="color: #fca5a5; border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 10px;">تفاصيل الطلب</h2>
            <div class="order-info">
              <div class="info-row">
                <span class="label">الكمية المدفوعة:</span>
                <span class="value">${orderData.quantity} وشاح</span>
              </div>
              <div class="info-row">
                <span class="label">الكمية المستلمة:</span>
                <span class="value" style="color: #86efac; font-size: 20px;">${orderData.actualQuantity} وشاح</span>
              </div>
              ${
                orderData.savings > 0
                  ? `
                <div class="info-row">
                  <span class="label">التوفير:</span>
                  <span class="value" style="color: #86efac;">${orderData.savings}.00 MAD</span>
                </div>
              `
                  : ""
              }
              <div class="info-row">
                <span class="label">ثمن الوحدة:</span>
                <span class="value">${orderData.pricePerItem}.00 MAD</span>
              </div>
              <div class="info-row">
                <span class="label">التوصيل:</span>
                <span class="value" style="color: #86efac;">مجاني</span>
              </div>
            </div>

            <div class="total-box">
              <div class="label" style="font-size: 20px;">المبلغ الإجمالي</div>
              <div class="amount">${orderData.total}.00 MAD</div>
              <div style="color: #fca5a5; margin-top: 10px;">💰 الدفع عند الاستلام</div>
            </div>
          </div>
          
          <div class="footer">
            <p>تم إرسال هذا الطلب من موقع وشاح ميكاسا</p>
            <p>التاريخ: ${new Date().toLocaleString("ar-MA", { timeZone: "Africa/Casablanca" })}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "طلبات وشاح ميكاسا <orders@yourdomain.com>",
        to: "webvisionagency0@gmail.com",
        subject: `🧣 طلب جديد - ${orderData.fullName} - ${orderData.actualQuantity} وشاح`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send order email" }, { status: 500 })
  }
}
