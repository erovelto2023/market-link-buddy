
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[500px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 
            className={`text-4xl md:text-5xl font-bold text-white mb-4 ${
              loaded ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            MANAGE YOUR AFFILIATE PROGRAMS
          </h1>
          <p 
            className={`text-xl text-white/90 mb-8 ${
              loaded ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            Streamline your affiliate marketing with ease
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className={`bg-affiliate-purple hover:bg-affiliate-purple/90 text-white ${
              loaded ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
