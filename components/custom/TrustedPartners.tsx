import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Building, Award } from 'lucide-react';

const TrustedPartners = () => {
  const partners = [
    {
      id: 1,
      name: "Emirates Airlines",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      category: "Aviation",
      description: "Staff uniforms and promotional wear"
    },
    {
      id: 2,
      name: "Dubai Sports Council",
      logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=100&fit=crop",
      category: "Sports",
      description: "Custom team uniforms and sportswear"
    },
    {
      id: 3,
      name: "Burjeel Hospital",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      category: "Healthcare",
      description: "Medical uniforms and safety wear"
    },
    {
      id: 4,
      name: "Ajman University",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop",
      category: "Education",
      description: "Student and staff apparel"
    },
    {
      id: 5,
      name: "Mall of Emirates",
      logo: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=200&h=100&fit=crop",
      category: "Retail",
      description: "Staff uniforms and promotional items"
    },
    {
      id: 6,
      name: "Al Ain FC",
      logo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=100&fit=crop",
      category: "Sports",
      description: "Team jerseys and training wear"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building,
      number: "50+",
      label: "Corporate Partners",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Award,
      number: "10k+",
      label: "Projects Completed",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Star,
      number: "4.9★",
      label: "Client Rating",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-fashion text-white">Trusted by the Best</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to work with leading organizations across the UAE
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner.id} className="group hover:shadow-fashion transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {partner.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-elegant text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-muted-foreground mb-6">
              "PearlTees has been our go-to partner for all uniform needs. Their quality, 
              attention to detail, and timely delivery make them stand out in the industry."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-fashion rounded-full flex items-center justify-center text-white font-bold">
                AH
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Ahmed Hassan</div>
                <div className="text-sm text-muted-foreground">Operations Manager, Emirates Airlines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;