
import { Program } from "@/types";
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Heart, 
  Edit, 
  ExternalLink, 
  Mail, 
  Flag, 
  MessageSquare, 
  MonitorSmartphone, 
  Settings, 
  FileText, 
  Trash2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ProgramTableProps {
  programs: Program[];
}

export function ProgramTable({ programs }: ProgramTableProps) {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    toast({
      title: favorites[id] ? "Removed from favorites" : "Added to favorites",
      duration: 2000,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="rounded-lg border overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-12 text-center">Icon</TableHead>
            <TableHead>Program Name</TableHead>
            <TableHead className="text-right"># Sales</TableHead>
            <TableHead className="text-right">$ Earned</TableHead>
            <TableHead className="w-16">Edit</TableHead>
            <TableHead className="w-16">Swipes</TableHead>
            <TableHead className="w-16">Banners</TableHead>
            <TableHead className="w-16">Reviews</TableHead>
            <TableHead className="w-16">PPC</TableHead>
            <TableHead className="w-16">A.Resp</TableHead>
            <TableHead className="w-16">Q & A</TableHead>
            <TableHead className="w-16">Prompts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => toggleFavorite(program.id)}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5 transition-colors",
                      favorites[program.id] ? "fill-red-500 text-red-500" : "text-gray-400"
                    )}
                  />
                </Button>
              </TableCell>
              <TableCell className="font-medium">{program.name}</TableCell>
              <TableCell className="text-right">{program.sales}</TableCell>
              <TableCell className="text-right">{formatCurrency(program.earned || 0)}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Edit className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Flag className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MessageSquare className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MonitorSmartphone className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <FileText className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Trash2 className="h-4 w-4 text-gray-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
