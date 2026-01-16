import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "blue" | "green" | "purple";
}

const InfoCard = ({
  label,
  value,
  icon: Icon,
  variant = "blue",
}: InfoCardProps) => {
  const variants = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={cn("p-3 rounded-full", variants[variant])}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      </div>
    </div>
  );
};

export default InfoCard;
