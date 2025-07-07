"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, Clock, Palette, Type, Users } from 'lucide-react'
import Link from 'next/link'

export default function CustomTeamJerseyDesign() {
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
            <Badge variant="secondary" className="mb-4">Design Tips</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="blog-title">
              Creating the Perfect Custom Team Jersey: A Complete Guide
            </h1>
            <div className="flex items-center justify-center space-x-6 text-blue-200">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 5, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>6 min read</span>
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
              src="https://images.pexels.com/photos/29780965/pexels-photo-29780965/free-photo-of-smiling-boys-in-soccer-jerseys-gather-outdoors-at-dusk-fostering-teamwork.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=2" 
              alt="Custom Team Jersey Design" 
              className="w-full h-64 md:h-80 object-cover"
              data-macaly="blog-hero-image"
            />
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-6">
                  Your jersey represents your team spirit. From choosing the right colors to deciding on font styles, 
                  we walk you through creating custom sportswear that stands out on and off the field.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Custom Jersey Design Matters</h2>
                <p className="text-gray-700 mb-6">
                  A well-designed jersey does more than just identify your team—it builds unity, inspires confidence, 
                  and creates a lasting impression. Whether you're a school team, corporate league, or professional 
                  club, your jersey design is a powerful tool for team identity and brand recognition.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Palette className="h-6 w-6 mr-2" />
                    Step 1: Choose Your Color Palette
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Colors evoke emotions and create psychological impact. Here's how to choose the right palette:
                  </p>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Primary Colors:</strong> Bold, confident, and easily recognizable</li>
                    <li>• <strong>Team Colors:</strong> Reflect school colors, company branding, or traditional team identity</li>
                    <li>• <strong>Contrast:</strong> Ensure good visibility for players and spectators</li>
                    <li>• <strong>Psychology:</strong> Red for power, blue for trust, green for growth</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
                    <Type className="h-6 w-6 mr-2" />
                    Step 2: Select Typography and Numbers
                  </h3>
                  <p className="text-orange-800 mb-4">
                    Typography communicates your team's personality and ensures readability:
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li>• <strong>Bold fonts:</strong> Perfect for team names and aggressive sports</li>
                    <li>• <strong>Clean fonts:</strong> Professional look for corporate teams</li>
                    <li>• <strong>Number size:</strong> Large enough to be read from stands</li>
                    <li>• <strong>Consistency:</strong> Match fonts across all team apparel</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Step 3: Logo and Team Identity
                  </h3>
                  <p className="text-green-800 mb-4">
                    Your logo is the centerpiece of your jersey design:
                  </p>
                  <ul className="space-y-2 text-green-800">
                    <li>• <strong>Size and placement:</strong> Prominent but not overwhelming</li>
                    <li>• <strong>Simplicity:</strong> Clean designs reproduce better on fabric</li>
                    <li>• <strong>Versatility:</strong> Works in different sizes and on various backgrounds</li>
                    <li>• <strong>Meaning:</strong> Represents your team's values and aspirations</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Elements That Make a Difference</h2>
                <p className="text-gray-700 mb-6">
                  Beyond the basics, consider these design elements that can elevate your jersey:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Elements</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Stripes and patterns</li>
                      <li>• Gradient effects</li>
                      <li>• Shadow and outline effects</li>
                      <li>• Sublimation artwork</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Features</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Moisture-wicking fabric</li>
                      <li>• Breathable mesh panels</li>
                      <li>• Reinforced stress points</li>
                      <li>• UV protection</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Design Mistakes to Avoid</h2>
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-red-800">
                    <li>• <strong>Too many colors:</strong> Stick to 2-3 main colors for clarity</li>
                    <li>• <strong>Poor contrast:</strong> Ensure text is readable against background</li>
                    <li>• <strong>Overcrowding:</strong> Leave white space for visual breathing room</li>
                    <li>• <strong>Inconsistent sizing:</strong> Maintain proportion across all elements</li>
                    <li>• <strong>Ignoring fabric type:</strong> Consider how design works with chosen material</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pearl House Garments Design Process</h2>
                <p className="text-gray-700 mb-6">
                  Our experienced design team works closely with you throughout the entire process:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Design Process</h3>
                  <ol className="space-y-2 text-blue-800">
                    <li>1. <strong>Consultation:</strong> Understanding your team's vision and requirements</li>
                    <li>2. <strong>Concept Development:</strong> Creating initial design mockups</li>
                    <li>3. <strong>Refinement:</strong> Iterating based on your feedback</li>
                    <li>4. <strong>Final Approval:</strong> Ensuring you're 100% satisfied</li>
                    <li>5. <strong>Production:</strong> Bringing your design to life with precision</li>
                  </ol>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Perfect Jersey?</h2>
                <p className="text-gray-700 mb-6">
                  Don't settle for generic designs when you can have custom jerseys that truly represent your team. 
                  Our design experts are ready to help you create something extraordinary that your team will wear with pride.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Start Your Design Journey Today</h3>
                  <p className="text-orange-800 mb-4">
                    Contact Pearl House Garments for a free design consultation. Let's create jerseys that make your team stand out!
                  </p>
                  <Link href="/#contact">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Get Free Design Consultation
                    </Button>
                  </Link>
                </div>
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