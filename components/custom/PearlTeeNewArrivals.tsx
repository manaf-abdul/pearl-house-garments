import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';

const PearlTeeNewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      rating: 4.8,
      isNew: true,
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1']
    },
    {
      id: 2,
      name: "Casual Chic Blouse",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop",
      rating: 4.9,
      isNew: true,
      colors: ['#000000', '#FFFFFF', '#FF6B6B']
    },
    {
      id: 3,
      name: "Designer Jacket",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop",
      rating: 4.7,
      isNew: true,
      colors: ['#8B4513', '#000000', '#2F4F4F']
    },
    {
      id: 4,
      name: "Trendy Palazzo Set",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      rating: 4.6,
      isNew: true,
      colors: ['#FFB6C1', '#87CEEB', '#F0E68C']
    }
  ];

  return (
    <section id="new-arrivals" className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-fashion text-white">New Collection</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fresh Arrivals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest fashion pieces that define contemporary style and elegance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-fashion transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button size="sm" variant="secondary" className="rounded-full p-3">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full p-3">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-gradient-fashion hover:opacity-90 rounded-full p-3">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-white">NEW</Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.rating})
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Colors */}
                <div className="flex items-center space-x-2 mb-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border-2 border-muted cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      AED {product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        AED {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div> */}

                {/* Add to Cart Button */}
                {/* <Button className="w-full mt-4 bg-gradient-fashion hover:opacity-90">
                  Add to Cart
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PearlTeeNewArrivals;