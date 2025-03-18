
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Bell, HelpCircle, User, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md bg-white/80",
        scrolled ? "py-2 shadow-sm" : "py-3"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-affiliate-purple rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L9 9M9 15L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <span className="ml-2 text-xl font-semibold tracking-tight">Affiliate Manager</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/dashboard" 
              className={cn("nav-link", isActive("/dashboard") && "nav-link-active")}
            >
              Dashboard
            </Link>
            <Link 
              to="/programs" 
              className={cn("nav-link", isActive("/programs") && "nav-link-active")}
            >
              Programs
            </Link>
            <Link 
              to="/links" 
              className={cn("nav-link", isActive("/links") && "nav-link-active")}
            >
              Links
            </Link>
            <Link 
              to="/sales" 
              className={cn("nav-link", isActive("/sales") && "nav-link-active")}
            >
              Sales
            </Link>
            <Link 
              to="/manage" 
              className={cn("nav-link", isActive("/manage") && "nav-link-active")}
            >
              Manage
            </Link>
            <Link 
              to="/tools" 
              className={cn("nav-link", isActive("/tools") && "nav-link-active")}
            >
              Tools
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 ml-2">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
