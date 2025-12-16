import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

interface TrailerDialogProps {
  videoKey: string;
  children: React.ReactNode;
}

export function TrailerDialog({ videoKey, children }: TrailerDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex justify-center">
        <DialogTitle></DialogTitle>
        <div className="absolute inset-0">
          <iframe
            width={960}
            height={615}
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1`}
            allowFullScreen
            title="YouTube video player"
            allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; 
              web-share"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
