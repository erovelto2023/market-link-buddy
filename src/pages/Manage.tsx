
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Manage = () => {
  const { toast } = useToast();
  
  const handleAddPlatform = () => {
    toast({
      title: "Platform Added",
      description: "New platform has been added successfully",
    });
  };
  
  const handleAddCategory = () => {
    toast({
      title: "Category Added",
      description: "New category has been added successfully",
    });
  };
  
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Manage</h1>
          <p className="text-gray-600 mt-2">Configure your affiliate programs and settings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Add Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="platform-name" className="text-sm font-medium text-gray-700">Platform Name</label>
                  <Input id="platform-name" placeholder="Enter platform name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-gray-700">Website</label>
                  <Input id="website" placeholder="https://" />
                </div>
                
                <Button 
                  className="w-full md:w-auto bg-affiliate-purple hover:bg-affiliate-purple/90 mt-2"
                  onClick={handleAddPlatform}
                >
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Add Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                  <Input id="category" placeholder="Enter category name" />
                </div>
                
                <Button 
                  className="w-full md:w-auto bg-affiliate-purple hover:bg-affiliate-purple/90 mt-2"
                  onClick={handleAddCategory}
                >
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" placeholder="john@example.com" />
                </div>
                
                <Button className="w-full md:w-auto bg-affiliate-purple hover:bg-affiliate-purple/90">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="payment-method" className="text-sm font-medium text-gray-700">Payment Method</label>
                  <select 
                    id="payment-method" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-affiliate-purple/50 focus:border-affiliate-purple/50"
                  >
                    <option>PayPal</option>
                    <option>Bank Transfer</option>
                    <option>Stripe</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="payment-email" className="text-sm font-medium text-gray-700">Payment Email</label>
                  <Input id="payment-email" placeholder="payments@example.com" />
                </div>
                
                <Button className="w-full md:w-auto bg-affiliate-purple hover:bg-affiliate-purple/90">
                  Save Payment Info
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-affiliate-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-affiliate-purple"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-affiliate-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-affiliate-purple"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Sales Alerts</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-affiliate-purple/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-affiliate-purple"></div>
                  </label>
                </div>
                
                <Button className="w-full md:w-auto bg-affiliate-purple hover:bg-affiliate-purple/90">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Manage;
