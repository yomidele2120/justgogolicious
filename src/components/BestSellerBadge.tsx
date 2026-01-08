import { Sparkles } from "lucide-react";

interface BestSellerBadgeProps {
  className?: string;
}

export const BestSellerBadge = ({ className = "" }: BestSellerBadgeProps) => {
  return (
    <div className={`best-seller-badge ${className}`}>
      <Sparkles className="w-3 h-3" />
      <span>Best Seller</span>
    </div>
  );
};
