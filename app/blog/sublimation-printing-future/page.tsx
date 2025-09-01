"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function SublimationPrintingFuture() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/blog" className="flex items-center text-blue-900 hover:text-blue-800 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Back to Blog</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/aH-DrnLScU6SxzsqZYpsi/logo-1-.png" 
                alt="Pearl House Garments" 
                className="h-8 w-auto"
                data-macaly="logo"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Industry Trends</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="blog-title">
              The Future of Sportswear: Why Sublimation Printing is Taking Over
            </h1>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2" 
              alt="Sublimation Printing Future" 
              className="w-full h-64 md:h-80 object-cover"
              data-macaly="blog-hero-image"
            />
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-6">
                  Gone are the days of faded prints and uncomfortable fabrics. Sublimation printing is revolutionizing 
                  sportswear with its durability, vibrant colors, and eco-friendly process.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Sublimation Printing?</h2>
                <p className="text-gray-700 mb-6">
                  Sublimation printing is a digital printing process that uses heat to transfer dye onto materials. 
                  Unlike traditional printing methods that sit on top of the fabric, sublimation dyes become part of 
                  the fabric itself, creating prints that are permanent, vibrant, and incredibly durable.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Sublimation is the Future</h2>
                <p className="text-gray-700 mb-4">
                  The sports industry is rapidly adopting sublimation printing for several compelling reasons:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Durability:</strong> Prints won't fade, crack, or peel even after hundreds of washes</li>
                  <li><strong>Comfort:</strong> No added layer means the fabric remains breathable and lightweight</li>
                  <li><strong>Vibrant Colors:</strong> Achieve photo-quality prints with unlimited color options</li>
                  <li><strong>Eco-Friendly:</strong> Uses water-based inks and produces minimal waste</li>
                  <li><strong>Design Freedom:</strong> Full-color designs across entire garments without restrictions</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Technology Behind the Magic</h2>
                <p className="text-gray-700 mb-6">
                  Sublimation works through a process called phase transition. The specially formulated inks turn 
                  from solid to gas when heated, bypassing the liquid phase entirely. This allows the dye to penetrate 
                  the polyester fibers at a molecular level, creating a permanent bond that becomes part of the fabric.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pearl House Garments: Leading the Revolution</h2>
                <p className="text-gray-700 mb-6">
                  At Pearl House Garments, we've invested in state-of-the-art sublimation technology to deliver 
                  exceptional results for our clients. Our advanced equipment and skilled technicians ensure every 
                  piece meets the highest standards of quality and durability.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Ready to Experience the Future?</h3>
                  <p className="text-blue-800 mb-4">
                    Whether you're a sports team, school, or business looking for premium custom apparel, 
                    sublimation printing offers unmatched quality and durability.
                  </p>
                  <Link href="/#contact">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Get Your Free Quote Today
                    </Button>
                  </Link>
                </div>

                <p className="text-gray-700">
                  The future of sportswear is here, and it's brighter, more durable, and more sustainable than ever. 
                  Join the sublimation revolution and experience the difference quality makes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Badge variant="secondary" className="mb-3">Printing Guide</Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/blog/screen-printing-vs-heat-transfer" className="hover:text-blue-900 transition-colors">
                  Screen Printing vs. Heat Transfer: What's Best for Your Sports Gear?
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Choosing the right printing method for your sports apparel can be confusing...
              </p>
              <Link href="/blog/screen-printing-vs-heat-transfer">
                <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                  Read More
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Badge variant="secondary" className="mb-3">Sustainability</Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/blog/sustainable-sportswear-printing" className="hover:text-blue-900 transition-colors">
                  Sustainable Sportswear: How Eco-Friendly Printing is Changing the Game
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how Pearl House Garments is leading the charge in sustainable sportswear...
              </p>
              <Link href="/blog/sustainable-sportswear-printing">
                <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                  Read More
                </Button>
              </Link>
            </div>
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
                <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/pearltees" className="hover:text-white transition-colors">PearlTees</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
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
                <li>pearltees@gmail.com</li>
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