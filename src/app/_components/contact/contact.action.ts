'use server'

import { Resend } from 'resend'
import * as z from 'zod'

const devRam = new Resend(process.env.RESEND_API_KEY)

const FormSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export type contactFormType = z.infer<typeof FormSchema>

export type formState = {
  message: string | undefined
  error: Record<string, string> | undefined
  fields: {
    username: string
    email: string
    message: string
    subject: string
  }
}

export async function submitFormAction(
  preState: formState,
  formData: FormData
): Promise<any> {
  const username = formData.get('username') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const subject = formData.get('subject') as string

  try {
    FormSchema.parse({
      username,
      email,
      message,
      subject,
    })

    await sendThankYouEmail(email)
    await receiveVisitorMessage(message, email, username)

    return {
      message: `🎉 Thank you for reaching out! Your message has been successfully sent. We'll get back to you shortly. 📬`,
      errors: undefined,
      status: 'success',
      fields: {
        username: '',
        email: '',
        message: '',
        subject: '',
      },
    }
  } catch (error) {
    const zodErrors = error as z.ZodError
    const errorMap = zodErrors.flatten().fieldErrors
    return {
      message: 'Please check the form and try again.',
      status: 'error',
      errors: {
        username: errorMap['username']?.[0] ?? '',
        email: errorMap['email']?.[0] ?? '',
        message: errorMap['message']?.[0] ?? '',
        subject: errorMap['subject']?.[0] ?? '',
      },
      fields: preState,
    }
  }
}

export const sendThankYouEmail = async (email: string) => {
  const thankYouEmailTemplate = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Message</title>
  <style>
    .header {
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
  
    .logo {
      align-text: center;
      width: 27%;
      margin: 0 auto;
    }
  
    .content {
      padding: 30px;
    }
  
    .footer {
      padding: 15px;
      border-top: 1px solid #eee;
      font-size: 12px;
      color: #999;
    }
    
    .footer > p {
      font-size: 12px;
      line-height: 0;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .from {
      font-size: 14px;
      line-height: 0;
    }
    body {
        padding-top: 5%;
        font-family: Arial, sans-serif;
        border-collapse: separate;
        background-color: #399bf5;
        width: 100%;
        margin: auto;
        text-align: center;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #eaeaea;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 11px;
    }
  </style>
  </head>
  <body>
  
  <div class="container">
    <div class="header">
      <img src="https://firebasestorage.googleapis.com/v0/b/softgiks.appspot.com/o/article%2Fimages%2Fundefined%2F660479fa-bc31-4ef5-9160-2958faefe4a7?alt=media&token=5f3e0c13-aa76-4959-a5ad-f59a7eac84b5" alt="Your Logo" class="logo">
    </div>
    <div class="content">
      <h1>Thank You for Your Message!</h1>
      <p>We appreciate you reaching out to us. We'll review your message and get back to you as soon as possible.</p>
      <span class="from">Sincerely,<br>The Team at <b>DevRam</b></span>
    </div>
    <div class="footer">
      <p>Our website: <a href="your_website_url.com">devram.in</a></p>
        <span>Email: <a href="mailto:support@devram.in">support@devram.in</a></span> | 
      <span>Phone: +91 <a href="tel:9975474840">9975474840</a></span>
    </div>
  </div>
  
  </body>
  </html>  
`
  const { data, error } = await devRam.emails.send({
    from: 'DevRam <support@devram.in>',
    to: email,
    subject: 'Glad to hear from you!',
    html: thankYouEmailTemplate,
  })
  console.log(
    '🚀 ~ file: contact.action.ts:89 ~ sendThankYouEmail ~ data, error:',
    data,
    error
  )
}

export const receiveVisitorMessage = async (
  message: string,
  email: string,
  name: string
) => {
  const { data, error } = await devRam.emails.send({
    from: `${name} <support@devram.in>`,
    to: ['support@devram.in', 'softgeek.dev@gmail.com'],
    subject: 'Get In Touch',
    html: `<div>
    <p>Visitor Email: ${email}</p>
    <hr/>
    <p>Visitor Message:</p>
    <p>${message}</p>
    </div>`,
  })
  console.log(
    '🚀 ~ file: contact.action.ts:89 ~ sendThankYouEmail ~ data, error:',
    data,
    error
  )
}
