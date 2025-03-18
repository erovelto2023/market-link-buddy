
import { Button } from '@/components/ui/button';
import { Program } from '@/types';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleManage = () => {
    toast({
      title: "Program Selected",
      description: `You are now managing ${program.name}`,
    });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg transition-all duration-500 border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-48 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url(${program.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg mb-1">{program.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{program.description}</p>
        <p className="text-sm text-gray-700 font-medium">{program.commission}</p>
        <Button 
          variant="outline" 
          className="w-full mt-3 border-affiliate-purple text-affiliate-purple hover:bg-affiliate-purple hover:text-white transition-colors duration-300"
          onClick={handleManage}
        >
          Manage
        </Button>
      </div>
    </div>
  );
}
