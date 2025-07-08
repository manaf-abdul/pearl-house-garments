import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';

const PearlTeeHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "New Fashion Collection",
            subtitle: "Discover the Latest Trends",
            description: "Elevate your style with our premium fashion wear collection",
            buttonText: "Shop Collection",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop",
            gradient: "from-pink-500/80 to-purple-600/80"
        },
        {
            id: 2,
            title: "Best Sellers",
            subtitle: "Customer Favorites",
            description: "Shop our most loved items that everyone is talking about",
            buttonText: "View Best Sellers",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop",
            gradient: "from-blue-500/80 to-teal-600/80"
        },
        {
            id: 3,
            title: "Special Offers",
            subtitle: "Up to 50% Off",
            description: "Limited time deals on premium fashion wear",
            buttonText: "Shop Offers",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1920&h=1080&fit=crop",
            gradient: "from-orange-500/80 to-red-600/80"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <Sparkles className="h-8 w-8 mr-3 text-yellow-300" />
                                <span className="text-lg font-medium">{slide.subtitle}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                {slide.title}
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                                {slide.description}
                            </p>

                            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-foreground hover:bg-gray-100 shadow-lg">
                                    <ShoppingBag className="mr-2 h-5 w-5" />
                                    {slide.buttonText}
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                                    Learn More
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 z-10"
            >
                <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 z-10"
            >
                <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default PearlTeeHeroSection;