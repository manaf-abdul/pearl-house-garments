"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Shirt,
    Users,
    Building2,
    Heart,
    Shield,
    Trophy,
    Palette,
    ShoppingBag,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

const CustomWear = () => {
    const categories = [
        {
            id: 1,
            title: "Sportswear Collection",
            description: "Custom team uniforms and athletic wear",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
            icon: Trophy,
            subcategories: ["Cricket", "Basketball", "Football", "Volleyball"],
            gradient: "from-blue-500 to-cyan-600"
        },
        {
            id: 2,
            title: "Corporate Uniforms",
            description: "Professional staff uniforms and promotional wear",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
            icon: Building2,
            subcategories: ["Staff Uniforms", "Promotional Polos", "Round Necks", "Corporate Wear"],
            gradient: "from-purple-500 to-pink-600"
        },
        {
            id: 3,
            title: "Healthcare Uniforms",
            description: "Medical and safety uniforms for healthcare professionals",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            icon: Heart,
            subcategories: ["Hospital Uniforms", "Safety Wear", "Scrubs", "Lab Coats"],
            gradient: "from-green-500 to-teal-600"
        },
        {
            id: 4,
            title: "Promotional Products",
            description: "Custom branded merchandise and accessories",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
            icon: ShoppingBag,
            subcategories: ["Shopping Bags", "Diaries & Pens", "Lanyards", "Towels", "Caps", "Mugs"],
            gradient: "from-orange-500 to-red-600"
        }
    ];

    const features = [
        {
            icon: Palette,
            title: "Custom Design",
            description: "Personalized designs tailored to your brand"
        },
        {
            icon: Shield,
            title: "Premium Quality",
            description: "High-quality materials and printing techniques"
        },
        {
            icon: Users,
            title: "Bulk Orders",
            description: "Competitive pricing for large quantities"
        },
        {
            icon: CheckCircle,
            title: "Fast Delivery",
            description: "Quick turnaround time for urgent orders"
        }
    ];

    return (
        <section id="custom-wear" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-gradient-fashion text-white">Custom Solutions</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Custom Wear & Promotional Items
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        From sportswear to corporate uniforms, we create custom apparel that represents your brand perfectly
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <Card key={category.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-fashion transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-80`} />

                                    <div className="absolute inset-0 flex items-center justify-center text-white text-center p-6">
                                        <div>
                                            <IconComponent className="h-16 w-16 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                            <p className="text-lg opacity-90">{category.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-3 text-foreground">Available Categories:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.subcategories.map((sub, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {sub}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <Button className="w-full bg-gradient-fashion hover:opacity-90">
                                        Explore Collection
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button> */}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Promotional Products */}
                <div className="bg-gradient-elegant rounded-2xl p-8 mb-16">

                    <h3 className="text-3xl font-bold text-center mb-12">Customized Promotional Products</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            'Shopping Bags & Hand Bags',
                            'Diary and Pens',
                            'Lanyards',
                            'Towels',
                            'Caps',
                            'Promotional T-shirts',
                            'Mugs',
                            'Staff Uniforms'
                        ].map((item, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-4 text-center">
                                    <div className="bg-muted rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <h4 className="font-medium text-sm">{item}</h4>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-gradient-elegant rounded-2xl p-8 mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12">Why Choose Our Custom Services?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-fashion rounded-2xl flex items-center justify-center">
                                        <IconComponent className="h-8 w-8 text-white" />
                                    </div>
                                    <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-fashion rounded-2xl p-8 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
                    <p className="text-xl mb-6 opacity-90">
                        Get a free quote for your custom apparel project today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <a href="#contact">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                                Get Free Quote
                            </Button>
                        </a>
                        {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                            View Portfolio
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomWear;