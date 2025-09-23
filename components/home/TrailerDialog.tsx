import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TrailerDialogProps {
  videoKey: string;
}

export function TrailerDialog({ videoKey }: TrailerDialogProps) {
  return (
    <div className="mt-94 ml-20">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center gap-4 justify-center">
            <button className="w-10 h-10 bg-white flex items-center rounded-full justify-center">
              <img className="text-black w-5 h-5" src="play.png" />{" "}
            </button>
            Play Trailer
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <div className="absolute inset-0">
            <iframe
              width={560}
              height={315}
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
    </div>
  );
}
