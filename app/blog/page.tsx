"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'sublimation-printing-future',
      title: 'The Future of Sportswear: Why Sublimation Printing is Taking Over',
      excerpt: 'Gone are the days of faded prints and uncomfortable fabrics. Sublimation printing is revolutionizing sportswear with its durability, vibrant colors, and eco-friendly process.',
      category: 'Industry Trends',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/29780963/pexels-photo-29780963/free-photo-of-energetic-football-match-with-players-in-orange-and-white-vibrant-stadium-backdrop.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      id: 'screen-printing-vs-heat-transfer',
      title: 'Screen Printing vs. Heat Transfer: What\'s Best for Your Sports Gear?',
      excerpt: 'Choosing the right printing method for your sports apparel can be confusing. We offer screen printing and heat transfer solutions tailored to your needs.',
      category: 'Printing Guide',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/29697854/pexels-photo-29697854/free-photo-of-group-of-cheerful-cheerleaders-posing-with-vibrant-pompoms-wearing-matching-uniforms.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      id: 'custom-team-jersey-design',
      title: 'Creating the Perfect Custom Team Jersey: A Complete Guide',
      excerpt: 'Your jersey represents your team spirit. From choosing the right colors to deciding on font styles, we walk you through creating custom sportswear that stands out.',
      category: 'Design Tips',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/29780965/pexels-photo-29780965/free-photo-of-smiling-boys-in-soccer-jerseys-gather-outdoors-at-dusk-fostering-teamwork.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    },
    {
      id: 'sustainable-sportswear-printing',
      title: 'Sustainable Sportswear: How Eco-Friendly Printing is Changing the Game',
      excerpt: 'Discover how Pearl House Garments is leading the charge in sustainable sportswear manufacturing with eco-friendly printing processes and materials.',
      category: 'Sustainability',
      date: '2024-01-01',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/29697853/pexels-photo-29697853/free-photo-of-energetic-cheerleaders-in-uniform-holding-pom-poms-ready-for-performance.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-blue-900 hover:text-blue-800 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/aH-DrnLScU6SxzsqZYpsi/logo-1-.png" 
                alt="Pearl House Garments" 
                className="h-8 w-auto"
                data-macaly="logo"
              />
              <Badge variant="outline" className="text-blue-900 border-blue-900">
                Blog
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-macaly="blog-hero-title">
            Pearl House Garments Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" data-macaly="blog-hero-subtitle">
            Insights, tips, and industry trends from the world of custom sportswear and apparel printing
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    data-macaly={`blog-image-${post.id}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-blue-900 hover:text-blue-800 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" data-macaly="newsletter-title">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-macaly="newsletter-description">
            Subscribe to our newsletter for the latest updates on sportswear trends, printing techniques, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Subscribe
            </Button>
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