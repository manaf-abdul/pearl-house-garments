"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Star, Phone, Mail, MapPin, CheckCircle, Users, Zap, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/aH-DrnLScU6SxzsqZYpsi/logo-1-.png" 
                alt="Pearl House Garments" 
                className="h-8 w-auto"
                data-macaly="logo"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-900 transition-colors">Blog</a>
              <a href="/pearltees" className="text-gray-700 hover:text-blue-900 transition-colors">PearlTees</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Free Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" data-macaly="hero-title">
            Your Vision, Our Craftsmanship
          </h2>
          <p className="text-xl md:text-2xl mb-8" data-macaly="hero-subtitle">
            Leading Specialists in Sublimation, Screen Printing, and Custom Team Apparel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="about-title">
              About Pearl House Garments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-macaly="about-description">
              Based in Ajman, UAE, we are your trusted partner for premium custom sportswear and apparel printing. 
              With years of experience in the industry, we combine cutting-edge technology with traditional craftsmanship 
              to deliver exceptional results that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled professionals dedicated to bringing your vision to life</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery without compromising on quality</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Using only the finest materials and latest techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="services-title">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive printing solutions for all your apparel needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Sublimation Printing</CardTitle>
                <CardDescription>
                  Gone are the days of faded prints and uncomfortable fabrics. Sublimation printing is revolutionizing 
                  sportswear with its durability, vibrant colors, and eco-friendly process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Fade-resistant colors</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Breathable fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Eco-friendly process</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Screen Printing & Heat Transfer</CardTitle>
                <CardDescription>
                  Choosing the right printing method for your sports apparel can be confusing. We offer screen printing 
                  and heat transfer solutions tailored to your specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bulk order efficiency</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cost-effective solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Versatile applications</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Custom Team Design</CardTitle>
                <CardDescription>
                  Your jersey represents your team spirit. From choosing the right colors to deciding on font styles, 
                  we walk you through creating custom sportswear that stands out.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Personalized consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Logo & number customization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team identity development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="portfolio-title">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of custom sportswear and apparel projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" 
                alt="Football Team Uniforms" 
                className="w-full h-48 object-cover"
                data-macaly="portfolio-image-1"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Football Jerseys</h3>
                <p className="text-sm text-gray-600">Custom team uniforms with sublimation printing</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/29697854/pexels-photo-29697854/free-photo-of-group-of-cheerful-cheerleaders-posing-with-vibrant-pompoms-wearing-matching-uniforms.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" 
                alt="Cheerleader Uniforms" 
                className="w-full h-48 object-cover"
                data-macaly="portfolio-image-2"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Cheerleader Uniforms</h3>
                <p className="text-sm text-gray-600">High-quality team apparel with custom logos</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/29697853/pexels-photo-29697853/free-photo-of-energetic-cheerleaders-in-uniform-holding-pom-poms-ready-for-performance.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" 
                alt="Team Apparel" 
                className="w-full h-48 object-cover"
                data-macaly="portfolio-image-3"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Team Apparel</h3>
                <p className="text-sm text-gray-600">Professional uniforms with heat transfer printing</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/29780965/pexels-photo-29780965/free-photo-of-smiling-boys-in-soccer-jerseys-gather-outdoors-at-dusk-fostering-teamwork.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2" 
                alt="Soccer Team" 
                className="w-full h-48 object-cover"
                data-macaly="portfolio-image-4"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Soccer Jerseys</h3>
                <p className="text-sm text-gray-600">Youth team uniforms with custom designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="blog-title">
              Insights & Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest articles about sportswear trends and printing techniques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Industry Trends</Badge>
                <CardTitle className="text-blue-900">The Future of Sportswear: Why Sublimation Printing is Taking Over</CardTitle>
                <CardDescription>
                  Gone are the days of faded prints and uncomfortable fabrics. Sublimation printing is revolutionizing 
                  sportswear with its durability, vibrant colors, and eco-friendly process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Printing Guide</Badge>
                <CardTitle className="text-blue-900">Screen Printing vs. Heat Transfer: What's Best for Your Sports Gear?</CardTitle>
                <CardDescription>
                  Choosing the right printing method for your sports apparel can be confusing. We offer screen printing 
                  and heat transfer solutions tailored to your needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="reviews-title">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent quality and fast delivery. The team jerseys exceeded our expectations!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Ahmed Sports Club</p>
                    <p className="text-sm text-gray-600">Team Captain</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service and amazing custom designs. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Sarah Al-Zahra</p>
                    <p className="text-sm text-gray-600">Event Organizer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Best printing quality in UAE. Our corporate uniforms look fantastic!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Mohammed Enterprises</p>
                    <p className="text-sm text-gray-600">HR Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and processes
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What is sublimation printing?</AccordionTrigger>
              <AccordionContent>
                Sublimation printing is a process where heat and pressure are used to transfer dye directly into fabric fibers. 
                This creates vibrant, long-lasting prints that won't fade, crack, or peel over time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How long does it take to complete an order?</AccordionTrigger>
              <AccordionContent>
                Our typical turnaround time is 7-14 business days, depending on the complexity and quantity of your order. 
                Rush orders can be accommodated with additional fees.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Do you offer design services?</AccordionTrigger>
              <AccordionContent>
                Yes! Our experienced design team can help create custom logos, artwork, and complete uniform designs. 
                We work closely with you to ensure your vision comes to life.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What's the minimum order quantity?</AccordionTrigger>
              <AccordionContent>
                Our minimum order quantities vary by product and printing method. Contact us for specific details based on your needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship worldwide. Shipping costs and delivery times vary by location. Contact us for a detailed quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-macaly="contact-title">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your vision to life? Contact us today for a free consultation and quote
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">Ajman, United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+971 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@pearlhousegarments.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/aH-DrnLScU6SxzsqZYpsi/logo-1-.png" 
                alt="Pearl House Garments" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Leading specialists in custom sportswear and apparel printing in UAE.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/pearltees" className="hover:text-white transition-colors">PearlTees</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sublimation Printing</li>
                <li>Screen Printing</li>
                <li>Heat Transfer</li>
                <li>Custom Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@pearlhousegarments.com</li>
                <li>+971 XXX XXX XXX</li>
                <li>Ajman, UAE</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pearl House Garments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}