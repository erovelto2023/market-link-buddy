
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { DollarSign, TrendingUp, ShoppingCart, Calendar, Filter, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Sales = () => {
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState("This month");
  
  const handleFilterChange = () => {
    toast({
      title: "Filter Applied",
      description: "Sales data has been filtered",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Data",
      description: "Your sales data is being exported",
    });
  };
  
  // Sample data for the chart
  const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
  ];

  // Sample transaction data
  const transactions = [
    { id: 1, date: "2023-07-15", program: "Travel Deals", amount: 120, status: "Completed" },
    { id: 2, date: "2023-07-14", program: "Fitness Gear", amount: 85, status: "Completed" },
    { id: 3, date: "2023-07-12", program: "Tech Gadgets", amount: 210, status: "Pending" },
    { id: 4, date: "2023-07-10", program: "Beauty Products", amount: 65, status: "Completed" },
    { id: 5, date: "2023-07-08", program: "Home Decor", amount: 140, status: "Cancelled" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Sales & Commissions</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-48">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleFilterChange}
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleExport}
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Sales"
            value="256"
            trend="up"
            trendValue="12%"
            icon={<ShoppingCart className="h-5 w-5 text-green-600" />}
          />
          
          <StatsCard
            title="Commission Earned"
            value="$3,250"
            trend="up"
            trendValue="8%"
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
          />
          
          <StatsCard
            title="Conversion Rate"
            value="3.2%"
            trend="up"
            trendValue="0.5%"
            icon={<TrendingUp className="h-5 w-5 text-green-600" />}
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg border mb-8">
          <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                  }} 
                />
                <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{transaction.program}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      ${transaction.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span 
                        className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                          transaction.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : transaction.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
