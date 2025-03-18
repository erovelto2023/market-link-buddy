
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, CheckCircle2, LayoutGrid, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Program, Testimonial, Feature, Benefit } from "@/types";
import { ProgramCard } from "@/components/ui/program-card";

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = {
    features: useRef<HTMLDivElement>(null),
    benefits: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const topPrograms: Program[] = [
    {
      id: "1",
      name: "Travel Deals",
      category: "Travel",
      commission: "Earn up to 10% commission on travel bookings",
      platform: "TravelPartners",
      description: "Exclusive offers available",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      sales: 124,
      earned: 3240,
    },
    {
      id: "2",
      name: "Fitness Gear",
      category: "Fitness",
      commission: "Up to 15% commission on sports gear",
      platform: "FitnessPro",
      description: "Special discount codes for affiliates",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      sales: 87,
      earned: 2100,
    },
    {
      id: "3",
      name: "Tech Gadgets",
      category: "Technology",
      commission: "Earn 12% commission on gadgets",
      platform: "TechWorld",
      description: "Access to latest tech releases",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      sales: 62,
      earned: 1890,
    },
  ];

  const features: Feature[] = [
    {
      id: "1",
      title: "User Dashboards",
      description: "Intuitive and customizable dashboards for real-time data visualization.",
      icon: "dashboard",
    },
    {
      id: "2",
      title: "Tracking Tools",
      description: "Advanced tracking tools to monitor affiliate performance and conversions.",
      icon: "tracking",
    },
    {
      id: "3",
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically to save time and enhance decision-making.",
      icon: "reporting",
    },
  ];

  const benefits: Benefit[] = [
    {
      id: "1",
      text: "Improved performance tracking: Get detailed reports and analytics to optimize your campaigns effectively.",
    },
    {
      id: "2",
      text: "Higher ROI: Achieve better returns on your investments with our robust tools and insights.",
    },
    {
      id: "3",
      text: "Simplified management: Easily manage and track your affiliate relationships from one dashboard.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      comment: "This app transformed my affiliate marketing strategy!",
    },
    {
      id: "2",
      name: "Michael Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      comment: "Incredible tool for boosting affiliate sales!",
    },
    {
      id: "3",
      name: "Sophia Lee",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "User-friendly interface and excellent results.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "dashboard":
        return <LayoutGrid className="w-10 h-10 text-affiliate-purple" />;
      case "tracking":
        return <BarChart2 className="w-10 h-10 text-affiliate-purple" />;
      case "reporting":
        return <PieChart className="w-10 h-10 text-affiliate-purple" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Top Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Top Programs</h2>
            <Button variant="outline" onClick={() => navigate('/programs')}>
              Import / Export
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={sectionRefs.features}
        className={`py-16 bg-gray-50 transition-opacity duration-1000 ${
          isVisible.features ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Button variant="ghost" className="mt-4 text-affiliate-purple">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              className="bg-affiliate-purple hover:bg-affiliate-purple/90"
              size="lg"
              onClick={() => navigate('/dashboard')}
            >
              Explore features
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits" 
        ref={sectionRefs.benefits}
        className={`py-16 bg-white transition-opacity duration-1000 ${
          isVisible.benefits ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Benefits of the App</h2>
          
          <div className="max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start mb-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-800">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={sectionRefs.testimonials}
        className={`py-16 bg-gray-50 transition-opacity duration-1000 ${
          isVisible.testimonials ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Hear from our awesome users!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="icon" className="mr-2">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
          </div>
          
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-affiliate-purple/50"
            />
            <Button className="rounded-l-none bg-affiliate-purple hover:bg-affiliate-purple/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-affiliate-purple rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15L9 9M9 15L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-semibold">Affiliate Business Manager</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">User guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Start up</a></li>
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Plans & Pricing</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-affiliate-purple">Personal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <select className="bg-transparent border rounded px-2 py-1 text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            
            <div className="text-sm text-gray-600">
              © 2024 Brand, Inc. · Privacy · Terms · Sitemap
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-affiliate-purple">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 4.91c-.8.36-1.66.61-2.57.72a4.5 4.5 0 0 0 1.98-2.5c-.87.52-1.83.9-2.86 1.1a4.5 4.5 0 0 0-7.67 4.1A12.8 12.8 0 0 1 1.67 3.15a4.5 4.5 0 0 0 1.4 6.01A4.5 4.5 0 0 1 .9 8.52v.05a4.5 4.5 0 0 0 3.6 4.41 4.5 4.5 0 0 1-2.03.08 4.5 4.5 0 0 0 4.2 3.12 9.03 9.03 0 0 1-5.58 1.93 9.3 9.3 0 0 1-1.07-.06 12.7 12.7 0 0 0 6.9 2.03A12.8 12.8 0 0 0 20 8.72c0-.2 0-.39-.02-.57.86-.62 1.6-1.4 2.2-2.28 0-.05-.14-.96-.18-.96z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-affiliate-purple">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.8H8V12h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95A10 10 0 0 0 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-affiliate-purple">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.7 3H4.3c-.7 0-1.3.6-1.3 1.3v15.4c0 .7.6 1.3 1.3 1.3h15.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zM8.3 18.4H5.7V9.9h2.6v8.5zM7 8.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.4 9.6h-2.6v-4.3c0-2.1-2.4-1.9-2.4 0v4.3h-2.6V9.9h2.6v1.5c1.1-2 4.3-2.1 4.4 1.5v5.5z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-affiliate-purple">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M21.6 7.6s-.21-1.5-.87-2.2c-.83-.87-1.77-.88-2.19-.93-3.05-.22-7.63-.22-7.63-.22s-4.58 0-7.63.22c-.42.05-1.36.06-2.2.93-.65.7-.86 2.2-.86 2.2S0 9.4 0 11.18v1.66c0 1.78.22 3.56.22 3.56s.21 1.5.86 2.2c.84.87 1.94.85 2.43.94 1.76.17 7.5.22 7.5.22s4.57 0 7.63-.23c.42-.05 1.36-.06 2.2-.93.65-.7.86-2.2.86-2.2s.22-1.77.22-3.56v-1.66c0-1.78-.22-3.56-.22-3.56zm-13.24 7.2v-6.17l5.88 3.1-5.88 3.08z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
