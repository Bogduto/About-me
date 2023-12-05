import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CartSkeleton = () => {
  return (
    <div className="w-full min-h-[150px]">
      <div className="w-full min-h-[100px] mb-[20px]">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="mb-[10px]">
        <Skeleton className="w-full h-4" />
      </div>
      
      <div className="">
        <Skeleton className="w-full h-[130px]" />
      </div>
    </div>
  );
};

export default CartSkeleton;
