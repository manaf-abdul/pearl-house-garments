"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function ScreenPrintingVsHeatTransfer() {
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
            <Badge variant="secondary" className="mb-4">Printing Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="blog-title">
              Screen Printing vs. Heat Transfer: What's Best for Your Sports Gear?
            </h1>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>7 min read</span>
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
              src="https://images.pexels.com/photos/29697854/pexels-photo-29697854/free-photo-of-group-of-cheerful-cheerleaders-posing-with-vibrant-pompoms-wearing-matching-uniforms.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2" 
              alt="Screen Printing vs Heat Transfer" 
              className="w-full h-64 md:h-80 object-cover"
              data-macaly="blog-hero-image"
            />
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-6">
                  Choosing the right printing method for your sports apparel can be confusing. We break down the 
                  differences between screen printing and heat transfer to help you make the best choice for your needs.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Screen Printing: The Traditional Champion</h2>
                <p className="text-gray-700 mb-6">
                  Screen printing has been the gold standard for apparel decoration for decades. This method uses 
                  a mesh screen to transfer ink onto fabric, creating vibrant, long-lasting prints that can 
                  withstand countless washes.
                </p>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Screen Printing Advantages
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Excellent for large quantities (50+ pieces)</li>
                    <li>• Cost-effective for bulk orders</li>
                    <li>• Vibrant, opaque colors</li>
                    <li>• Durable and long-lasting</li>
                    <li>• Works well on dark fabrics</li>
                    <li>• Professional, high-quality finish</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                    <XCircle className="h-6 w-6 mr-2" />
                    Screen Printing Limitations
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Higher setup costs for small quantities</li>
                    <li>• Limited color gradients</li>
                    <li>• Not ideal for complex, detailed designs</li>
                    <li>• Longer production time for setup</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Heat Transfer: The Flexible Alternative</h2>
                <p className="text-gray-700 mb-6">
                  Heat transfer printing applies designs to fabric using heat and pressure. This method offers 
                  greater flexibility for small quantities and complex designs, making it perfect for custom 
                  individual pieces or small team orders.
                </p>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Heat Transfer Advantages
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Perfect for small quantities (1-50 pieces)</li>
                    <li>• No setup fees</li>
                    <li>• Excellent for detailed designs</li>
                    <li>• Full-color printing capability</li>
                    <li>• Quick turnaround times</li>
                    <li>• Ideal for names and numbers</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                    <XCircle className="h-6 w-6 mr-2" />
                    Heat Transfer Limitations
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Higher per-piece cost for large quantities</li>
                    <li>• May feel thicker on fabric</li>
                    <li>• Potential for cracking over time</li>
                    <li>• Not as vibrant on dark fabrics</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Making the Right Choice</h2>
                <p className="text-gray-700 mb-6">
                  The decision between screen printing and heat transfer depends on several factors:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Choose Screen Printing If:</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• You need 50+ pieces</li>
                      <li>• Simple 1-3 color designs</li>
                      <li>• Budget is a primary concern</li>
                      <li>• Printing on dark fabrics</li>
                      <li>• Maximum durability needed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">Choose Heat Transfer If:</h3>
                    <ul className="space-y-2 text-orange-800">
                      <li>• You need less than 50 pieces</li>
                      <li>• Complex or detailed designs</li>
                      <li>• Individual names/numbers</li>
                      <li>• Quick turnaround needed</li>
                      <li>• Full-color designs required</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pearl House Garments: Your Printing Partner</h2>
                <p className="text-gray-700 mb-6">
                  At Pearl House Garments, we offer both screen printing and heat transfer services. Our experienced 
                  team can help you choose the best method for your specific needs, ensuring you get the perfect 
                  balance of quality, cost, and turnaround time.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Still Not Sure?</h3>
                  <p className="text-blue-800 mb-4">
                    Our experts are here to help you make the right choice for your project. Contact us for a 
                    personalized consultation and quote.
                  </p>
                  <Link href="/#contact">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Get Expert Advice
                    </Button>
                  </Link>
                </div>

                <p className="text-gray-700">
                  Whether you choose screen printing or heat transfer, Pearl House Garments delivers exceptional 
                  quality and service. Let us help you create the perfect custom sportswear for your team or organization.
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
              <Badge variant="secondary" className="mb-3">Design Tips</Badge>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/blog/custom-team-jersey-design" className="hover:text-blue-900 transition-colors">
                  Creating the Perfect Custom Team Jersey: A Complete Guide
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Your jersey represents your team spirit. From choosing the right colors...
              </p>
              <Link href="/blog/custom-team-jersey-design">
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