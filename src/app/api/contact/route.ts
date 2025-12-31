// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Here you would typically:
    // 1. Send email using Resend/Nodemailer
    // 2. Store in database
    // 3. Notify team via Slack/webhook

    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@theaethongroup.com',
    //   to: 'inquiries@theaethongroup.com',
    //   subject: `New Inquiry from ${validatedData.name}`,
    //   html: `...email template...`,
    // })

    console.log('Contact form submission:', validatedData)

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}