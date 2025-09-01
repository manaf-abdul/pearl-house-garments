import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingBag, TrendingUp, Crown } from 'lucide-react';

const PearlTeeBestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: 179,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
      rating: 4.9,
      soldCount: "2.5k+ sold",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Floral Maxi Dress",
      price: 329,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop",
      rating: 4.8,
      soldCount: "1.8k+ sold",
      badge: "Top Rated"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 249,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=600&fit=crop",
      rating: 4.7,
      soldCount: "3.2k+ sold",
      badge: "Most Popular"
    },
    {
      id: 4,
      name: "Boho Chic Top",
      price: 199,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      rating: 4.8,
      soldCount: "1.5k+ sold",
      badge: "Trending"
    },
    {
      id: 5,
      name: "Elegant Blazer",
      price: 449,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop",
      rating: 4.9,
      soldCount: "950+ sold",
      badge: "Premium"
    },
    {
      id: 6,
      name: "Casual Jumpsuit",
      price: 299,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      rating: 4.6,
      soldCount: "2.1k+ sold",
      badge: "Bestseller"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'default';
      case 'Top Rated': return 'secondary';
      case 'Most Popular': return 'destructive';
      case 'Trending': return 'outline';
      case 'Premium': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <section id="best-sellers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-8 w-8 text-yellow-500 mr-3" />
            <Badge className="bg-yellow-500 text-white">Customer Favorites</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most loved fashion pieces that customers can't get enough of
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-fashion transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                {/* Rank Badge for top 3 */}
                {index < 3 && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-gradient-fashion rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">{product.soldCount}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="rounded-full p-2 opacity-90">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-gradient-fashion hover:opacity-90 rounded-full p-2">
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant={getBadgeVariant(product.badge)} className="shadow-md">
                    {product.badge}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
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
                  <span className="text-sm text-primary font-medium">{product.soldCount}</span>
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Price and Action */}
                {/* <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    AED {product.price}
                  </span>
                  <Button size="sm" className="bg-gradient-fashion hover:opacity-90">
                    Add to Cart
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-elegant rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Join thousands of satisfied customers</h3>
          <p className="text-muted-foreground mb-6">Discover why these items are flying off the shelves</p>
          <Button size="lg" className="bg-gradient-fashion hover:opacity-90">
            Shop All Best Sellers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PearlTeeBestSellers;