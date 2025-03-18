
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProgramCard } from "@/components/ui/program-card";
import { Search, Plus, FileUp, FileDown } from "lucide-react";
import { Program } from "@/types";
import { useToast } from "@/hooks/use-toast";

const Programs = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const programs: Program[] = [
    {
      id: "1",
      name: "Travel Deals",
      category: "Travel",
      commission: "Earn up to 10% commission on travel bookings",
      platform: "TravelPartners",
      description: "Exclusive offers available",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    },
    {
      id: "2",
      name: "Fitness Gear",
      category: "Fitness",
      commission: "Up to 15% commission on sports gear",
      platform: "FitnessPro",
      description: "Special discount codes for affiliates",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "3",
      name: "Tech Gadgets",
      category: "Technology",
      commission: "Earn 12% commission on gadgets",
      platform: "TechWorld",
      description: "Access to latest tech releases",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "4",
      name: "Beauty Products",
      category: "Beauty",
      commission: "Up to 20% commission on beauty items",
      platform: "BeautyPartners",
      description: "Trending beauty products",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    },
    {
      id: "5",
      name: "Home Decor",
      category: "Home",
      commission: "12% commission on all products",
      platform: "HomeSweetHome",
      description: "Modern and classic home decor",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "6",
      name: "Online Courses",
      category: "Education",
      commission: "40% commission on course sales",
      platform: "LearnOnline",
      description: "Professional development courses",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    },
  ];

  const filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    program.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProgram = () => {
    toast({
      title: "Add Program",
      description: "Program creation form would open here",
    });
  };

  const handleImportExport = () => {
    toast({
      title: "Import/Export",
      description: "Import/Export options would appear here",
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Programs</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1 flex items-center gap-2"
                onClick={handleImportExport}
              >
                <FileUp className="h-4 w-4" />
                <FileDown className="h-4 w-4" />
                <span className="hidden sm:inline">Import/Export</span>
              </Button>
              
              <Button 
                className="flex-1 flex items-center gap-2 bg-affiliate-purple hover:bg-affiliate-purple/90"
                onClick={handleAddProgram}
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Program</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">All Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.slice(3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No programs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
