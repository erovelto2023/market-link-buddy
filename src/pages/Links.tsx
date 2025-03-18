
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AffiliateLink } from "@/types";
import { Search, Plus, Link2, ExternalLink, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Links = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const links: AffiliateLink[] = [
    {
      id: "1",
      programName: "Travel Deals",
      link: "https://traveldeals.com/ref=user123",
      notes: "Main homepage link for travel deals",
    },
    {
      id: "2",
      programName: "Travel Deals",
      link: "https://traveldeals.com/summer-promo/ref=user123",
      notes: "Summer promotion special",
    },
    {
      id: "3",
      programName: "Fitness Gear",
      link: "https://fitnessgear.com/partner/user123",
      notes: "General fitness equipment link",
    },
    {
      id: "4",
      programName: "Tech Gadgets",
      link: "https://techworld.com/affiliate/user123",
      notes: "Main tech products page",
    },
  ];

  const filteredLinks = links.filter(link => 
    link.programName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.link.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (link.notes && link.notes.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddLink = () => {
    toast({
      title: "Add Link",
      description: "Link creation form would open here",
    });
  };

  const handleEditLink = (id: string) => {
    toast({
      title: "Edit Link",
      description: `Editing link ID: ${id}`,
    });
  };

  const handleDeleteLink = (id: string) => {
    toast({
      title: "Delete Link",
      description: `Link ID: ${id} would be deleted`,
      variant: "destructive",
    });
  };

  const handleVisitLink = (link: string) => {
    toast({
      title: "Visit Link",
      description: `Opening: ${link}`,
    });
    // In a real app, you might want to use window.open(link, '_blank')
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied",
      description: "Affiliate link copied to clipboard",
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Affiliate Links</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search links..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Button 
              className="flex items-center gap-2 bg-affiliate-purple hover:bg-affiliate-purple/90"
              onClick={handleAddLink}
            >
              <Plus className="h-4 w-4" />
              <span>Add Link</span>
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edit
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Visit
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLinks.map((link) => (
                  <tr key={link.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{link.programName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <code className="text-sm text-gray-600 mr-2 max-w-xs truncate">
                          {link.link}
                        </code>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-gray-400 hover:text-gray-600"
                          onClick={() => handleCopyLink(link.link)}
                        >
                          <Link2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {link.notes || "No notes"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => handleEditLink(link.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => handleVisitLink(link.link)}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => handleDeleteLink(link.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredLinks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No links found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={handleAddLink}
              >
                Add your first link
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
