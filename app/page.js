'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Moon, Sun, Phone, Mail, MapPin, ChevronRight, Menu, X, MessageCircle, Sparkles, TrendingUp, Globe, Smartphone, Users, Megaphone, Palette, Code, Search, Share2, Zap, ArrowRight, Check, Star, ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState('')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
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

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your rankings and drive organic traffic with data-driven SEO strategies tailored for your business.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies that convert visitors into customers.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure & Scalable']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'API Integration']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and grow your brand across all major social platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Campaigns', 'Analytics']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive measurable results and ROI.',
      features: ['PPC Campaigns', 'Email Marketing', 'Content Marketing', 'Conversion Optimization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and drive engagement.',
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
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'WordPress', icon: '📝' },
    { name: 'PHP', icon: '🐘' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Android', icon: '🤖' },
    { name: 'iOS', icon: '🍎' },
    { name: 'Figma', icon: '🎨' }
  ]

  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:hello@thehypeculture.com'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              TheHypeCulture
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#about" className="hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#testimonials" className="hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">Get Started</Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-purple-500/20 text-purple-500 hover:bg-purple-500/30">
                🇮🇳 Made in India - Siliguri, West Bengal
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From Siliguri to the world — we build strong online identities through SEO, web design, and smart digital strategies that convert.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-2"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-purple-500">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative bg-card rounded-3xl p-8 border border-border backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: TrendingUp, label: 'SEO Growth', color: 'text-green-500' },
                      { icon: Globe, label: 'Web Design', color: 'text-blue-500' },
                      { icon: Smartphone, label: 'App Dev', color: 'text-purple-500' },
                      { icon: Megaphone, label: 'Marketing', color: 'text-pink-500' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-background rounded-xl p-6 border border-border hover:border-purple-500 transition-all cursor-pointer"
                      >
                        <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                        <div className="text-sm font-semibold">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20" />
                <Card className="relative border-2 border-border hover:border-purple-500 transition-all">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Badge className="mb-4 bg-purple-500/20 text-purple-500">About Us</Badge>
              <h2 className="text-4xl font-bold mb-6">
                We Don't Just Market Brands —{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  We Build Them
                </span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                TheHypeCulture is a full-service digital marketing and web design agency based in Siliguri, West Bengal. We're passionate about helping businesses thrive in the digital world through innovative strategies and cutting-edge technology.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From startups to established enterprises, we craft tailored digital solutions that drive real results. Our team combines creativity, technical expertise, and data-driven strategies to transform your online presence and accelerate business growth.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Check, text: 'Expert Team' },
                  { icon: Check, text: '24/7 Support' },
                  { icon: Check, text: 'Proven Results' },
                  { icon: Check, text: 'Local Expertise' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <item.icon className="w-5 h-5 text-green-500" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-500">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a wide variety of digital marketing and development services to help your business succeed
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setActiveService(idx)}
                >
                  <Card className="h-full border-2 border-border hover:border-purple-500 transition-all cursor-pointer overflow-hidden group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center space-x-2 text-sm">
                            <ChevronRight className="w-4 h-4 text-purple-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-500">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories & Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out some of our recent projects and the results we've achieved for our clients
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-commerce Platform', category: 'Web Development', metrics: '+250% Sales' },
              { title: 'Restaurant App', category: 'Mobile App', metrics: '50K+ Downloads' },
              { title: 'Real Estate Website', category: 'Web Design', metrics: '+180% Leads' },
              { title: 'Fashion Brand', category: 'Social Media', metrics: '100K+ Reach' },
              { title: 'Education Portal', category: 'Full Stack', metrics: '10K+ Users' },
              { title: 'Healthcare App', category: 'Mobile App', metrics: '4.8★ Rating' }
            ].map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                >
                  <Card className="overflow-hidden border-2 border-border hover:border-purple-500 transition-all">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                      <Code className="w-16 h-16 text-purple-500/50" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                          View Project <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-purple-500/20 text-purple-500 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Results:</span>
                        <span className="text-sm font-bold text-green-500">{project.metrics}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-500">Technologies</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by Modern Tech
            </h2>
            <p className="text-xl text-muted-foreground">
              We use cutting-edge technologies to build robust digital solutions
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {[...technologies, ...technologies].map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-32 h-32 rounded-xl bg-card border-2 border-border hover:border-purple-500 transition-all flex flex-col items-center justify-center cursor-pointer"
                >
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-500">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across India
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -10 }}>
                  <Card className="h-full border-2 border-border hover:border-purple-500 transition-all">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <Card className="border-2 border-purple-500 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your
                  <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Digital Presence?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help grow your business with our digital marketing and web development services
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call +91 98765 43210
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="border-2 border-purple-500"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <Badge className="mb-4 bg-purple-500/20 text-purple-500">Get In Touch</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Let's Start Your
                <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Journey
                </span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border cursor-pointer"
                  onClick={handleCall}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us</div>
                    <div className="font-semibold">+91 98765 43210</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border cursor-pointer"
                  onClick={handleWhatsApp}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold">+91 98765 43210</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border cursor-pointer"
                  onClick={handleEmail}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">hello@thehypeculture.com</div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-semibold">Siliguri, West Bengal, India</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="border-2 border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                    {formStatus === 'success' && (
                      <div className="p-3 rounded-lg bg-green-500/20 text-green-500 text-sm">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </div>
                    )}
                    {formStatus === 'error' && (
                      <div className="p-3 rounded-lg bg-red-500/20 text-red-500 text-sm">
                        ✗ Failed to send message. Please try again.
                      </div>
                    )}
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">TheHypeCulture</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Transforming businesses through innovative digital marketing and web development solutions.
              </p>
              <Badge className="bg-purple-500/20 text-purple-500">🇮🇳 Made in India</Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-purple-500 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-purple-500 transition-colors">Social Media Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-purple-500 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Us
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={handleEmail}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 TheHypeCulture. All rights reserved. Built with ❤️ in Siliguri, West Bengal</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-40">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
            onClick={handleCall}
          >
            <Phone className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

// Animated Section Component
function AnimatedSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}