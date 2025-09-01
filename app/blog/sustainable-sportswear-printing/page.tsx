"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Leaf, Recycle, Globe } from 'lucide-react'
import Link from 'next/link'

export default function SustainableSportswearPrinting() {
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
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Sustainability</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="blog-title">
              Sustainable Sportswear: How Eco-Friendly Printing is Changing the Game
            </h1>
            <div className="flex items-center justify-center space-x-6 text-green-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 1, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>4 min read</span>
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
              src="https://images.pexels.com/photos/29697853/pexels-photo-29697853/free-photo-of-energetic-cheerleaders-in-uniform-holding-pom-poms-ready-for-performance.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2" 
              alt="Sustainable Sportswear Printing" 
              className="w-full h-64 md:h-80 object-cover"
              data-macaly="blog-hero-image"
            />
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-6">
                  Discover how Pearl House Garments is leading the charge in sustainable sportswear manufacturing 
                  with eco-friendly printing processes and materials that don't compromise on quality or performance.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Environmental Challenge</h2>
                <p className="text-gray-700 mb-6">
                  The textile industry is one of the world's most polluting industries, contributing to water pollution, 
                  chemical waste, and carbon emissions. Traditional printing methods often use harmful chemicals and 
                  generate significant waste. But the tide is turning as companies like Pearl House Garments embrace 
                  sustainable alternatives that protect our planet while delivering exceptional quality.
                </p>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                    <Leaf className="h-6 w-6 mr-2" />
                    Our Eco-Friendly Printing Methods
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Water-based inks:</strong> Non-toxic, biodegradable alternatives to plastisol</li>
                    <li>• <strong>Digital printing:</strong> Reduced chemical usage and waste production</li>
                    <li>• <strong>Sublimation printing:</strong> No water waste, minimal chemical impact</li>
                    <li>• <strong>Energy-efficient processes:</strong> Reduced carbon footprint in production</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Materials That Perform</h2>
                <p className="text-gray-700 mb-6">
                  Gone are the days when eco-friendly meant compromising on performance. Today's sustainable 
                  sportswear materials offer the same durability, comfort, and functionality as traditional options:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Recycled Polyester</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Made from recycled plastic bottles</li>
                      <li>• Same performance as virgin polyester</li>
                      <li>• Reduces landfill waste</li>
                      <li>• Moisture-wicking properties</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3">Organic Cotton Blends</h3>
                    <ul className="space-y-2 text-orange-800">
                      <li>• Grown without harmful pesticides</li>
                      <li>• Softer and more comfortable</li>
                      <li>• Biodegradable and renewable</li>
                      <li>• Natural breathability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Recycle className="h-6 w-6 mr-2" />
                    Our Waste Reduction Initiatives
                  </h3>
                  <p className="text-blue-800 mb-4">
                    At Pearl House Garments, we've implemented comprehensive waste reduction strategies:
                  </p>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Fabric recycling program:</strong> Offcuts and unused materials are repurposed</li>
                    <li>• <strong>Ink recovery systems:</strong> Minimizing waste in the printing process</li>
                    <li>• <strong>Energy-efficient equipment:</strong> Reducing our carbon footprint</li>
                    <li>• <strong>Packaging reduction:</strong> Sustainable packaging materials and minimal waste</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Business Case for Sustainability</h2>
                <p className="text-gray-700 mb-6">
                  Sustainable sportswear isn't just good for the planet—it's good for business. Modern consumers, 
                  especially younger generations, prioritize brands that demonstrate environmental responsibility:
                </p>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-2" />
                    Benefits of Choosing Sustainable Sportswear
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Brand reputation:</strong> Demonstrate commitment to environmental stewardship</li>
                    <li>• <strong>Customer loyalty:</strong> Attract environmentally conscious consumers</li>
                    <li>• <strong>Long-term durability:</strong> Sustainable materials often last longer</li>
                    <li>• <strong>Health benefits:</strong> Fewer toxic chemicals mean safer products</li>
                    <li>• <strong>Future-proofing:</strong> Stay ahead of environmental regulations</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Leadership and Innovation</h2>
                <p className="text-gray-700 mb-6">
                  Pearl House Garments isn't just following sustainability trends—we're helping to create them. 
                  Our research and development team continuously explores new eco-friendly materials and processes 
                  to stay at the forefront of sustainable sportswear manufacturing.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Recent Innovations</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• New water-based ink formulations with improved durability</li>
                    <li>• Partnership with local recycling facilities for material recovery</li>
                    <li>• Development of bio-based printing chemicals</li>
                    <li>• Implementation of renewable energy in our production facilities</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Making the Switch</h2>
                <p className="text-gray-700 mb-6">
                  Transitioning to sustainable sportswear doesn't mean sacrificing quality or performance. 
                  Our team works closely with clients to find eco-friendly solutions that meet their specific 
                  needs while contributing to a healthier planet.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Ready to Go Green?</h3>
                  <p className="text-blue-800 mb-4">
                    Join the sustainability revolution with Pearl House Garments. Let's create custom sportswear 
                    that performs exceptionally while protecting our planet for future generations.
                  </p>
                  <Link href="/#contact">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Learn About Our Sustainable Options
                    </Button>
                  </Link>
                </div>

                <p className="text-gray-700">
                  The future of sportswear is sustainable, and the time to act is now. By choosing eco-friendly 
                  printing and materials, we can create exceptional sportswear while preserving the planet for 
                  future athletes and teams.
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
              <Badge variant="secondary" className="mb-3">Industry Trends</Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/blog/sublimation-printing-future" className="hover:text-blue-900 transition-colors">
                  The Future of Sportswear: Why Sublimation Printing is Taking Over
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Gone are the days of faded prints and uncomfortable fabrics...
              </p>
              <Link href="/blog/sublimation-printing-future">
                <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                  Read More
                </Button>
              </Link>
            </div>
            
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