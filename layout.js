import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'TheHypeCulture - Digital Marketing & Web Design Agency | Siliguri',
  description: 'Leading digital marketing agency in Siliguri, West Bengal. We specialize in SEO, website design, social media marketing, and app development. Transform your business with TheHypeCulture.',
  keywords: 'digital marketing siliguri, web design india, SEO services, social media marketing, app development, TheHypeCulture',
  authors: [{ name: 'TheHypeCulture' }],
  icons: {
    icon: '/FAVICON.png',
    shortcut: '/FAVICON.png',
    apple: '/FAVICON.png',
  },
  openGraph: {
    title: 'TheHypeCulture - Digital Marketing & Web Design Agency',
    description: 'Transform your business with our digital marketing, SEO, and web design services in Siliguri, West Bengal',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}