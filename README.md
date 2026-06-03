# TheHypeCulture - Digital Marketing & Web Design Agency

A modern, fully animated website for TheHypeCulture - a digital marketing and web design agency based in Siliguri, West Bengal, India.

## 🚀 Features

### ✨ Core Functionality
- **Dark/Light Theme Toggle** - Seamless theme switching with next-themes
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **SEO Optimized** - Built with Next.js for excellent search engine performance
- **Contact Form** - Functional contact form with backend API integration

### 📱 Interactive Elements
- **Floating Action Buttons** - Quick access to WhatsApp and Phone calls
- **Clickable Contact Options** - Direct phone dialing, WhatsApp messaging, and email
- **Animated Sections** - Scroll-triggered animations throughout the site
- **Hover Effects** - Interactive cards and buttons with smooth transitions
- **Technology Carousel** - Auto-scrolling showcase of technologies used

### 📋 Sections

1. **Hero Section**
   - Eye-catching gradient design
   - "Made in India" badge highlighting Siliguri, West Bengal location
   - Multiple CTA buttons (Call Now, WhatsApp)
   - Key statistics display (500+ projects, 300+ clients)

2. **About Section**
   - Company introduction
   - Performance metrics
   - Value propositions
   - Trust indicators

3. **Services Section** (6 Services)
   - SEO Optimization
   - Website Development
   - App Development
   - Social Media Marketing
   - Digital Marketing
   - UI/UX Design

4. **Portfolio Section**
   - Showcase of 6 projects
   - Project categories and results
   - Hover animations
   - "View Project" CTAs

5. **Technologies Section**
   - Animated technology carousel
   - Displays: React, Next.js, Node.js, MongoDB, WordPress, PHP, JavaScript, Python, Flutter, Android, iOS, Figma

6. **Testimonials Section**
   - 4 client testimonials
   - 5-star ratings
   - Client names and companies
   - Carousel layout

7. **Call-to-Action Section**
   - Prominent conversion section
   - Multiple contact options
   - Gradient design

8. **Contact Section**
   - Contact information cards with:
     - Phone: +91 98765 43210
     - WhatsApp: +91 98765 43210
     - Email: hello@thehypeculture.com
     - Location: Siliguri, West Bengal, India
   - Functional contact form with:
     - Name, Email, Phone, Message fields
     - Form validation
     - Success/Error notifications
     - Backend API integration

9. **Footer**
   - Company information
   - Quick links
   - Social links
   - Contact options

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 14.2.3 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Backend**: Next.js API Routes
- **Database Ready**: MongoDB support (configured but not used for MVP)

## 📂 Project Structure

```
/app
├── app/
│   ├── api/[[...path]]/route.js   # Backend API routes
│   ├── page.js                     # Main homepage (client component)
│   ├── layout.js                   # Root layout with theme provider
│   └── globals.css                 # Global styles and animations
├── components/ui/                  # shadcn/ui components
├── lib/                            # Utility functions
├── .env                            # Environment variables
└── README.md                       # This file
```

## 🔌 API Endpoints

### GET /api/health
Health check endpoint to verify API is running.

**Response:**
```json
{
  "status": "healthy",
  "service": "TheHypeCulture API",
  "timestamp": "2025-06-03T12:00:00.000Z"
}
```

### POST /api/contact
Contact form submission endpoint.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "message": "Your message here"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

**Error Response:**
```json
{
  "error": "Name, email, and message are required"
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8b5cf6) to Pink (#ec4899) gradient
- **Background**: Adaptive (white in light mode, dark in dark mode)
- **Text**: Adaptive foreground colors
- **Accents**: Purple and pink gradients throughout

### Typography
- **Font**: System font stack for optimal performance
- **Sizes**: Responsive scaling from mobile to desktop

### Animations
- **Page Load**: Fade-in animations on scroll
- **Hover Effects**: Scale and color transitions
- **Scroll Animations**: Triggered by viewport intersection
- **Theme Toggle**: Smooth transition between light/dark modes

## 📞 Contact Information

**Update the following in `/app/app/page.js`:**

```javascript
// Current phone number (line ~114)
const handleCall = () => {
  window.location.href = 'tel:+919876543210' // Update this
}

// Current WhatsApp number (line ~118)
const handleWhatsApp = () => {
  window.open('https://wa.me/919876543210', '_blank') // Update this
}

// Current email (line ~122)
const handleEmail = () => {
  window.location.href = 'mailto:hello@thehypeculture.com' // Update this
}
```

## 🚀 Getting Started

### Installation
```bash
# Install dependencies
yarn install

# Run development server
yarn dev
```

### Environment Variables
The `.env` file is pre-configured:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=your_database_name
NEXT_PUBLIC_BASE_URL=https://your-domain.com
CORS_ORIGINS=*
```

### Build for Production
```bash
yarn build
yarn start
```

## ✅ Testing

### Backend API Testing
All backend endpoints have been tested and verified:
- ✅ GET /api/health - Returns healthy status
- ✅ POST /api/contact - Accepts valid submissions
- ✅ POST /api/contact - Validates required fields
- ✅ Error handling works correctly

### Frontend Features Tested
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ All navigation links
- ✅ Contact form submission
- ✅ Phone/WhatsApp/Email click handlers
- ✅ Animations and transitions
- ✅ Scroll behavior

## 🎯 Key Features for Business

1. **SEO Optimized**
   - Next.js for server-side rendering
   - Proper meta tags and descriptions
   - Semantic HTML structure
   - Fast loading times

2. **Mobile-First**
   - Fully responsive design
   - Touch-optimized interactions
   - Mobile menu navigation

3. **Conversion Focused**
   - Multiple CTAs throughout the page
   - Floating action buttons for quick contact
   - Easy-to-use contact form
   - Trust indicators (stats, testimonials)

4. **Professional Design**
   - Modern gradient aesthetics
   - Consistent brand colors
   - Smooth animations
   - Clean layout

## 📈 Future Enhancements (Optional)

- Add blog section for content marketing
- Integrate Google Analytics
- Add live chat widget
- Implement portfolio filter/search
- Add case studies section
- Integrate CRM for form submissions
- Add newsletter subscription
- Implement multi-language support

## 📝 License

© 2025 TheHypeCulture. All rights reserved. Built with ❤️ in Siliguri, West Bengal.

---

**Built with Next.js, Tailwind CSS, and Framer Motion**
