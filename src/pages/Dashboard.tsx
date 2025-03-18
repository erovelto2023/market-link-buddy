
import { useState, useEffect } from "react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProgramTable } from "@/components/dashboard/ProgramTable";
import { Program } from "@/types";
import { Activity, DollarSign, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Dashboard loaded",
        description: "Your latest data has been refreshed",
        duration: 3000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const programs: Program[] = [
    {
      id: "1",
      name: "Groove",
      category: "SaaS",
      platform: "GrooveFunnels",
      commission: "40% recurring",
      description: "All-in-one marketing platform",
      sales: 100,
      earned: 2000,
    },
    {
      id: "2",
      name: "TravelPro",
      category: "Travel",
      platform: "TravelAffiliates",
      commission: "10% per booking",
      description: "Exclusive travel deals",
      sales: 75,
      earned: 850,
    },
    {
      id: "3",
      name: "FitPro",
      category: "Fitness",
      platform: "FitAffiliates",
      commission: "15% per sale",
      description: "Premium fitness products",
      sales: 50,
      earned: 600,
    },
    {
      id: "4",
      name: "TechWorld",
      category: "Technology",
      platform: "TechAffiliates",
      commission: "12% per sale",
      description: "Latest tech gadgets",
      sales: 30,
      earned: 450,
    },
  ];

  const SimpleBarChart = () => (
    <div className="w-full h-10 flex items-end">
      <div className="h-6 w-3 bg-affiliate-purple rounded-sm mr-1"></div>
      <div className="h-10 w-3 bg-affiliate-purple rounded-sm mr-1"></div>
      <div className="h-4 w-3 bg-affiliate-purple rounded-sm mr-1"></div>
      <div className="h-8 w-3 bg-affiliate-purple rounded-sm"></div>
    </div>
  );

  const CircleChart = () => (
    <div className="w-20 h-20 relative mx-auto">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeDasharray="75, 100"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
        75%
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Active Programs"
            value="8"
            trend="down"
            trendValue="2"
            icon={<Activity className="h-5 w-5 text-affiliate-purple" />}
            className={isLoading ? "animate-pulse" : ""}
          />
          
          <StatsCard
            title="Commissions Earned"
            value="$3,200"
            trend="up"
            trendValue="15%"
            icon={<DollarSign className="h-5 w-5 text-affiliate-purple" />}
            chart={<SimpleBarChart />}
            className={isLoading ? "animate-pulse" : ""}
          />
          
          <StatsCard
            title="Sales Performance"
            value="75%"
            chart={<CircleChart />}
            icon={<ShoppingCart className="h-5 w-5 text-affiliate-purple" />}
            className={isLoading ? "animate-pulse" : ""}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Program Performance</h2>
          <div className={isLoading ? "animate-pulse" : ""}>
            <ProgramTable programs={programs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
