import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <div className="w-360 m-auto">
      <Skeleton className="w-360 h-160 ml-30 flex justify-cente m-auto mt-7" />
      <div className="flex justify-center gap-2 w-360 mt-13 ">
        <Skeleton className="rounded-full size-4.5"></Skeleton>
        <Skeleton className="rounded-full size-4.5"></Skeleton>
        <Skeleton className="rounded-full size-4.5"></Skeleton>
        <Skeleton className="rounded-full size-4.5"></Skeleton>
        <Skeleton className="rounded-full size-4.5"></Skeleton>
      </div>
      <div className="flex justify-center w-360 m-auto mt-13">
        <div className="flex justify-between w-350 m-auto">
          <Skeleton className="h-[40] w-[120px] mt-10 ml-30 rounded-md"></Skeleton>
          <Skeleton className="h-[40] w-[80px] mt-10 ml-30 rounded-md"></Skeleton>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10 w-360 justify-center m-auto">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
      <div className="flex justify-center w-360 m-auto mt-13">
        <div className="flex justify-between w-350 m-auto">
          <Skeleton className="h-[40] w-[120px] mt-10 ml-30 rounded-md"></Skeleton>
          <Skeleton className="h-[40] w-[80px] mt-10 ml-30 rounded-md"></Skeleton>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-10 w-360 justify-center m-auto">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="h-[440px] w-[230px]  p-0 overflow-hidden gap-2 px-0  "
            ></Skeleton>
          );
        })}
      </div>
    </div>
  );
}
