'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, ChevronRight, Menu, X, MessageCircle, Sparkles, TrendingUp, Globe, Smartphone, Megaphone, Palette, Code, Search, Share2, ArrowRight, Check, Star, ExternalLink, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  const heroSlides = [
    {
      title: 'Power Up Your Digital Presence',
      subtitle: 'From Siliguri to the world — we build strong online identities through SEO, web design, and smart digital strategies that convert.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc4MDQ5MjI4Nnww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Build | Launch | Grow',
      subtitle: 'Transform your business with responsive websites and scalable mobile apps tailored for speed, performance, and user engagement.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc4MDQ5MjI4Nnww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Unlock The Power Of Branding',
      subtitle: 'From social media to sponsored ads, we craft result-driven digital campaigns that boost visibility and drive measurable growth.',
      image: 'https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your rankings and drive organic traffic with data-driven SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites that convert visitors into customers.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure & Scalable']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps with exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'API Integration']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand across all platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Campaigns', 'Analytics']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive strategies that drive measurable results and ROI.',
      features: ['PPC Campaigns', 'Email Marketing', 'Content Marketing', 'Conversion Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '300+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      content: 'TheHypeCulture transformed our online presence completely. Their SEO strategies brought us to the first page of Google within 3 months!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Owner, Fashion Boutique',
      content: 'The website they designed for us is stunning and easy to manage. Our online sales increased by 150% in just 2 months!',
      rating: 5
    },
    {
      name: 'Amit Das',
      role: 'Director, Real Estate Ventures',
      content: 'Professional team with excellent communication. They delivered our mobile app ahead of schedule with amazing features.',
      rating: 5
    },
    {
      name: 'Sneha Gupta',
      role: 'Marketing Head, EduTech',
      content: 'Their social media campaigns generated incredible engagement. We saw a 300% increase in quality leads!',
      rating: 5
    }
  ]

  const technologies = [
    { name: 'Adobe Illustrator', icon: '🎨' },
    { name: 'After Effects', icon: '🎬' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'React', icon: '⚛️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'WordPress', icon: '📝' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'iOS', icon: '🍎' },
    { name: 'Android', icon: '🤖' },
    { name: 'Premiere Pro', icon: '🎥' }
  ]

  const portfolioProjects = [
    { 
      title: 'E-commerce Platform', 
      category: 'Web Development', 
      metrics: '+250% Sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc4MDQ5MjI4Nnww&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Restaurant App', 
      category: 'Mobile App', 
      metrics: '50K+ Downloads',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzgwNDkyMjkyfDA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Real Estate Website', 
      category: 'Web Design', 
      metrics: '+180% Leads',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3ODA0OTIyODZ8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Fashion Brand', 
      category: 'Social Media', 
      metrics: '100K+ Reach',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc4MDQ5MjI4Nnww&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Education Portal', 
      category: 'Full Stack', 
      metrics: '10K+ Users',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3ODA0OTIyODZ8MA&ixlib=rb-4.1.0&q=85'
    },
    { 
      title: 'Healthcare App', 
      category: 'Mobile App', 
      metrics: '4.8★ Rating',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3ODA0OTIyODZ8MA&ixlib=rb-4.1.0&q=85'
    }
  ]

  const handleCall = () => {
    window.location.href = 'tel:+917602209766'
  }

  const handleCall2 = () => {
    window.location.href = 'tel:+918116287949'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/917602209766', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:thehypeculture05@gmail.com'
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setFormStatus(''), 3000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 3000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 3000)
    }
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Siliguri, West Bengal, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={handleCall} className="hover:text-blue-200 flex items-center space-x-2 transition-all">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </button>
            <a href="mailto:thehypeculture05@gmail.com" className="hover:text-blue-200 flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>thehypeculture05@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/logo.png" 
              alt="TheHypeCulture Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">TheHypeCulture</h1>
              <p className="text-xs text-blue-600">Digital Marketing Agency</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">Get Started</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Carousel Section */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <img 
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
            
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="mb-4 bg-blue-600/80 text-white border-0 px-4 py-1">
                    🇮🇳 Made in India - Siliguri, West Bengal
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl"
                      onClick={handleCall}
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Get a Free Strategy Call
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp Us
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Digital Marketing Services', color: 'from-red-500 to-red-600', icon: Megaphone },
              { title: 'Website Design Services', color: 'from-cyan-500 to-cyan-600', icon: Globe },
              { title: 'Mobile App Development', color: 'from-orange-500 to-orange-600', icon: Smartphone },
              { title: 'Social Media Marketing', color: 'from-teal-500 to-teal-600', icon: Share2 }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${service.color} rounded-lg p-8 text-white cursor-pointer shadow-lg hover:shadow-2xl transition-all min-h-[200px] flex flex-col justify-between`}
              >
                <service.icon className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-red-100 text-red-600 border-0">// ABOUT US</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
                We Don't Just Market Brands — We Build Them.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                TheHypeCulture is a full-service digital marketing company based in Siliguri, established to help businesses grow through powerful branding and innovative online solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Working in strategic partnership with leading technology and marketing providers, we deliver smarter, faster, and more effective digital results. We specialize in Local SEO, website & app development, social media marketing, and UI/UX design.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Check, text: 'First Working Process' },
                  { icon: Check, text: 'Dedicated Team' },
                  { icon: Check, text: '24/7 Hours Support' },
                  { icon: Check, text: 'Handle by Expert' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Marketing Strategy Presentation"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local SEO Section - Dark Background */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc4MDQ5MjI4Nnww&ixlib=rb-4.1.0&q=85"
                alt="Local SEO"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-yellow-400 text-gray-900 border-0">// GROW LOCALLY, RANK GLOBALLY</Badge>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Reach customers near you with smart Local SEO
              </h2>
              <p className="text-gray-200 mb-8 leading-relaxed">
                We help businesses in Siliguri and beyond get found by nearby customers through Google My Business optimization, local citations, map listings, and review management.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Badge className="bg-white/10 text-white border-0 px-4 py-2">Best Lawyer Near Me</Badge>
                <Badge className="bg-white/10 text-white border-0 px-4 py-2">Best Electrician Near Me</Badge>
                <Badge className="bg-white/10 text-white border-0 px-4 py-2">Best Plumber Near Me</Badge>
                <Badge className="bg-white/10 text-white border-0 px-4 py-2">Beauty Parlour Near Me</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Animated Continuous Scroll */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto mb-8">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-0">Technologies We Use</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Our Tech Stack</h2>
          </div>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10" />
          
          {/* Continuous scrolling animation */}
          <div className="flex animate-scroll-infinite hover:pause-animation">
            {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.15,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 mx-4 w-28 h-28 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-xs font-medium text-gray-700 text-center px-2">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boost Local Visibility Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Team Collaboration"
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-red-100 text-red-600 border-0">// BOOST YOUR LOCAL VISIBILITY</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Be Found When It Matters
              </h2>
              <p className="text-gray-600 mb-8">
                Local searches lead to real business. Our expert strategies ensure your brand shows up at the right place and time.
              </p>
              
              <div className="space-y-4">
                {[
                  { 
                    icon: MapPin, 
                    title: 'Google Map Ranking',
                    desc: 'Appear in top positions for local searches and increase store visits.',
                    color: 'from-cyan-500 to-cyan-600'
                  },
                  { 
                    icon: Star, 
                    title: 'Review Management',
                    desc: 'Build trust with positive customer reviews and real-time responses.',
                    color: 'from-cyan-500 to-cyan-600'
                  },
                  { 
                    icon: TrendingUp, 
                    title: 'Location-Based Targeting',
                    desc: 'Reach the right audience in your area with optimized local keywords.',
                    color: 'from-cyan-500 to-cyan-600'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats with Images */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                stat: '5+',
                title: 'Years of Experience',
                desc: 'Delivering consistent results through creative digital strategies and modern tech solutions.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
                color: 'from-cyan-600/90 to-blue-600/90'
              },
              {
                stat: '1000+',
                title: 'Projects Completed',
                desc: 'From local startups to established businesses — helping brands grow and thrive online.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
                color: 'from-purple-600/90 to-indigo-600/90'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative h-[300px] rounded-lg overflow-hidden shadow-xl group"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex flex-col justify-center p-8 text-white`}>
                  <div className="text-6xl font-bold mb-4">{item.stat}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-100 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="mb-12">
            <Badge className="mb-4 bg-red-100 text-red-600 border-0">// OUR SERVICES</Badge>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">
                We Offer a Wide Variety of<br />Digital Marketing Services
              </h2>
              <Button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white">
                OUR ALL SERVICES <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-cyan-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Full Width Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-blue-600/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl text-white"
            >
              <p className="text-sm mb-4 text-cyan-100">// We Carry More Than Just A Branding</p>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Let's Build Your Digital Presence!
              </h2>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
                onClick={handleCall}
              >
                CONTACT US
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Success Stories & Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent projects and the results we've achieved
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        View Details <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-blue-100 text-blue-700 text-xs border-0">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Results:</span>
                      <span className="text-sm font-bold text-green-600">{project.metrics}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-600 border-0">// OUR CLIENTS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We are Trusted<br />By 1000+ Customers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">Get In Touch</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Let's Start Your
                <span className="block text-blue-600">Digital Journey</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Have a project in mind? We'd love to hear from you. Contact us today for a free consultation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-6 rounded-xl bg-white border-2 border-blue-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all group"
                onClick={handleCall}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Primary Contact</div>
                    <div className="font-bold text-gray-900 text-lg">Call Us Now</div>
                    <div className="text-xs text-blue-600 mt-1">Click to call</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-6 rounded-xl bg-white border-2 border-blue-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all group"
                onClick={handleCall2}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Secondary Contact</div>
                    <div className="font-bold text-gray-900 text-lg">Alternative Line</div>
                    <div className="text-xs text-purple-600 mt-1">Click to call</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-6 rounded-xl bg-white border-2 border-green-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all group"
                onClick={handleWhatsApp}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                    <div className="font-bold text-gray-900 text-lg">Chat With Us</div>
                    <div className="text-xs text-green-600 mt-1">Instant messaging</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="p-6 rounded-xl bg-white border-2 border-blue-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all group"
                onClick={handleEmail}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <div className="font-bold text-gray-900 text-sm">thehypeculture05@gmail.com</div>
                    <div className="text-xs text-blue-600 mt-1">Send us an email</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-8 rounded-xl bg-white shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 text-lg">Siliguri, West Bengal, India</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="TheHypeCulture Logo"
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <span className="text-xl font-bold">TheHypeCulture</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Transforming businesses through innovative digital marketing and web development solutions.
              </p>
              <Badge className="bg-blue-600 text-white border-0">🇮🇳 Made in India</Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Us
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={handleEmail}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2025 TheHypeCulture. All rights reserved. Built with ❤️ in Siliguri, West Bengal</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl"
            onClick={handleWhatsApp}
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl"
            onClick={handleCall}
            title="Call Now"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}