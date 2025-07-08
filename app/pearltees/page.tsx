"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ShoppingCart, Eye } from 'lucide-react'
import Link from 'next/link'
import PearlTeeHeroSection from '@/components/custom/PearlTeeHeroSection'
import PearlTeeNewArrivals from '@/components/custom/PearlTeeNewArrivals'
import PearlTeeBestSellers from '@/components/custom/PearlTeeBestSellers'
import PearlTeeSpecialOffers from '@/components/custom/PearlTeeSpecialOffers'

export default function PearlTees() {
  const cricketItems = [
    {
      code: "PH-CRICKET-C/012025",
      name: "Cricket Jersey Set",
      description: "Premium cricket uniform with sublimation printing",
      image: "https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Cricket"
    },
    {
      code: "PH-CRICKET-C/022025",
      name: "Cricket Practice Kit",
      description: "Comfortable practice wear for training sessions",
      image: "https://images.pexels.com/photos/29780965/pexels-photo-29780965/free-photo-of-smiling-boys-in-soccer-jerseys-gather-outdoors-at-dusk-fostering-teamwork.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Cricket"
    }
  ]

  const footballItems = [
    {
      code: "PH-FOOTBALL-F/012025",
      name: "Football Jersey Pro",
      description: "Professional football uniform with team customization",
      image: "https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Football"
    },
    {
      code: "PH-FOOTBALL-F/022025",
      name: "Football Training Kit",
      description: "High-performance training gear for football teams",
      image: "https://images.pexels.com/photos/29780965/pexels-photo-29780965/free-photo-of-smiling-boys-in-soccer-jerseys-gather-outdoors-at-dusk-fostering-teamwork.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Football"
    }
  ]

  const volleyballItems = [
    {
      code: "PH-VOLLEYBALL-V/012025",
      name: "Volleyball Uniform Set",
      description: "Lightweight volleyball uniform with moisture-wicking fabric",
      image: "https://images.pexels.com/photos/29697854/pexels-photo-29697854/free-photo-of-group-of-cheerful-cheerleaders-posing-with-vibrant-pompoms-wearing-matching-uniforms.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Volleyball"
    }
  ]

  const basketballItems = [
    {
      code: "PH-BASKETBALL-B/012025",
      name: "Basketball Jersey",
      description: "Breathable basketball uniform with custom numbering",
      image: "https://images.pexels.com/photos/29697853/pexels-photo-29697853/free-photo-of-energetic-cheerleaders-in-uniform-holding-pom-poms-ready-for-performance.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
      category: "Basketball"
    }
  ]

  const handleInquiry = (itemCode: string) => {
    console.log('Inquiry for item:', itemCode)
    // This would typically redirect to contact form with pre-filled item details
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-blue-900 hover:text-blue-800 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Back to Pearl House</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/2BoBoI1V0VzJz3klP7HpI/logo-4-.png"
                alt="Pearl-Tees"
                className="h-8 w-auto"
                data-macaly="pearltees-logo"
              />
              <Badge variant="outline" className="text-blue-900 border-blue-900">
                Official Outlet
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <PearlTeeHeroSection />

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-macaly="pearltees-intro-title">
              Premium Sportswear Collection
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" data-macaly="pearltees-intro-description">
              PearlTees is where you'll find our carefully curated collection of high-quality, ready-to-wear apparel.
              Each piece represents the same exceptional craftsmanship and attention to detail that Pearl House Garments
              is known for, now available for immediate purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Guaranteed</h4>
              <p className="text-gray-600">Every item meets our strict quality standards</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Ready to Ship</h4>
              <p className="text-gray-600">In-stock items available for immediate delivery</p>
            </div>

            <div className="text-center">
              <div className="bg-red-500 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Badge className="h-8 w-8 text-white bg-transparent border-0 p-0">%</Badge>
              </div>
              <h4 className="text-xl font-semibold mb-2">Outlet Prices</h4>
              <p className="text-gray-600">Premium quality at competitive prices</p>
            </div>
          </div>
        </div>
      </section>

      <PearlTeeNewArrivals />
      <PearlTeeBestSellers />
      <PearlTeeSpecialOffers />

      {/* Cricket Collection */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Cricket Collection</h3>
            <Badge variant="outline" className="text-blue-900 border-blue-900">
              {cricketItems.length} Items
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cricketItems.map((item) => (
              <Card key={item.code} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    data-macaly={`cricket-item-${item.code}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 font-mono">
                        {item.code}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleInquiry(item.code)}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Football Collection */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Football Collection</h3>
            <Badge variant="outline" className="text-blue-900 border-blue-900">
              {footballItems.length} Items
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footballItems.map((item) => (
              <Card key={item.code} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    data-macaly={`football-item-${item.code}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 font-mono">
                        {item.code}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleInquiry(item.code)}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Volleyball Collection */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Volleyball Collection</h3>
            <Badge variant="outline" className="text-blue-900 border-blue-900">
              {volleyballItems.length} Items
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volleyballItems.map((item) => (
              <Card key={item.code} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    data-macaly={`volleyball-item-${item.code}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 font-mono">
                        {item.code}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleInquiry(item.code)}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Basketball Collection */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Basketball Collection</h3>
            <Badge variant="outline" className="text-blue-900 border-blue-900">
              {basketballItems.length} Items
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basketballItems.map((item) => (
              <Card key={item.code} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    data-macaly={`basketball-item-${item.code}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 font-mono">
                        {item.code}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button
                    onClick={() => handleInquiry(item.code)}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4" data-macaly="pearltees-cta-title">
            Need Custom Designs?
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-macaly="pearltees-cta-description">
            Don't see exactly what you're looking for? Our parent company, Pearl House Garments,
            offers full custom design and printing services for teams and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Get Custom Quote
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900">
                Visit Pearl House
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/2BoBoI1V0VzJz3klP7HpI/logo-4-.png"
                alt="Pearl-Tees"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                The official outlet of Pearl House Garments, offering premium sportswear at competitive prices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cricket</li>
                <li>Football</li>
                <li>Volleyball</li>
                <li>Basketball</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li>Size Guide</li>
                <li>Returns</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Pearl House Garments</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Main Website</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Custom Services</Link></li>
                <li><Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/#blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PearlTees - A Division of Pearl House Garments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}