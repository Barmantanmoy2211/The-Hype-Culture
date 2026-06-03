import { NextResponse } from 'next/server'

// Simple contact form endpoint
export async function POST(request) {
  try {
    const { pathname } = new URL(request.url)
    
    // Contact form submission
    if (pathname === '/api/contact') {
      const body = await request.json()
      const { name, email, phone, message } = body
      
      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM
      
      console.log('Contact Form Submission:', { name, email, phone, message })
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.'
      })
    }
    
    // Health check endpoint
    if (pathname === '/api/health') {
      return NextResponse.json({
        status: 'healthy',
        service: 'TheHypeCulture API',
        timestamp: new Date().toISOString()
      })
    }
    
    // Default 404 for unknown routes
    return NextResponse.json(
      { error: 'Route not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    const { pathname } = new URL(request.url)
    
    // Health check endpoint
    if (pathname === '/api/health') {
      return NextResponse.json({
        status: 'healthy',
        service: 'TheHypeCulture API',
        timestamp: new Date().toISOString()
      })
    }
    
    return NextResponse.json(
      { error: 'Route not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
