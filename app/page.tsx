import { SkeletonCard } from "@/components/home/HomePageSkeletonCard";
import HomePage from "@/components/ui/homePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <HomePage />
    </Suspense>
  );
}
