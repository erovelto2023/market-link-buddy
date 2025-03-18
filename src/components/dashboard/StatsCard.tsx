
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | null;
  trendValue?: string | number;
  className?: string;
  icon?: React.ReactNode;
  chart?: React.ReactNode;
}

export function StatsCard({
  title,
  value,
  trend,
  trendValue,
  className,
  icon,
  chart
}: StatsCardProps) {
  return (
    <div className={cn(
      "rounded-lg p-6 bg-white border transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h4 className="text-3xl font-bold mt-1">{value}</h4>
          
          {trend && (
            <div className={cn(
              "flex items-center mt-1 text-sm",
              trend === "up" ? "text-green-600" : "text-red-600"
            )}>
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="p-2 rounded-full bg-gray-100">
            {icon}
          </div>
        )}
      </div>
      
      {chart && (
        <div className="mt-4">
          {chart}
        </div>
      )}
    </div>
  );
}
