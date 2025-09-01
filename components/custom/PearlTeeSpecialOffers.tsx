import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Percent, ShoppingBag, Zap, Gift, Timer } from 'lucide-react';

const PearlTeeSpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 35,
    seconds: 47
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      title: "Flash Sale",
      discount: "50% OFF",
      description: "Limited time mega sale on selected items",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      buttonText: "Shop Flash Sale",
      gradient: "from-red-500 to-pink-600",
      icon: Zap
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      discount: "33% SAVE",
      description: "Mix and match any items from our collection",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
      buttonText: "Shop Deal",
      gradient: "from-blue-500 to-purple-600",
      icon: Gift
    },
    {
      id: 3,
      title: "Clearance Sale",
      discount: "UP TO 70% OFF",
      description: "End of season clearance - while stocks last",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      buttonText: "Shop Clearance",
      gradient: "from-orange-500 to-red-600",
      icon: Percent
    }
  ];

  return (
    <section id="special-offers" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Timer className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
            <Badge className="bg-red-500 text-white animate-pulse">Limited Time</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these amazing deals and exclusive offers
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center mb-12 shadow-fashion">
          <h3 className="text-2xl font-bold mb-2">⚡ Flash Sale Ends In ⚡</h3>
          <div className="flex justify-center space-x-4 text-3xl font-bold">
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div>{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-sm font-normal">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm font-normal">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm font-normal">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm font-normal">Seconds</div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer) => {
            const IconComponent = offer.icon;
            return (
              <Card key={offer.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-fashion transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  {/* Background Image */}
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${offer.gradient} opacity-80`} />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                    <IconComponent className="h-12 w-12 mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <div className="text-4xl font-black mb-2 drop-shadow-lg">
                      {offer.discount}
                    </div>
                    <p className="text-lg opacity-90 mb-4">{offer.description}</p>
                  </div>
                </div>

                {/* <CardContent className="p-6">
                  <Button className="w-full bg-gradient-fashion hover:opacity-90 text-white font-semibold">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    {offer.buttonText}
                  </Button>
                </CardContent> */}
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup for Exclusive Offers */}
        <div className="mt-16 bg-gradient-fashion rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Get Exclusive Offers!</h3>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter and be the first to know about flash sales and special deals
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PearlTeeSpecialOffers;