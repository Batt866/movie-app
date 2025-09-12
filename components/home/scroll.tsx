import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export const Scroll = () => {
  return (
    <div>
      <Carousel className="w-360 flex items-center justify-center mt-10">
        <CarouselContent>
          <CarouselItem className=" bg-[url(https://pbs.twimg.com/media/GNjOKcfXYAEMVAp.jpg:large)] object-fill bg-contain bg-center bg-no-repeat">
            <div className="mt-48 ml-35">
              <span className="text-base font-normal">Now playing</span>
              <h1 className="font-bold text-4xl">Wicked</h1>
              <FaStar color="#FDE047" />{" "}
              <span className="terxt-foreground">6.9</span>
              <span className="text-">/10</span>
              <h6 className="mt-4 font-normal text-xs w-75.5">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </h6>
              <button className="flex bg-white text-black rounded-[6px] h-10 w-35 jsu items-center mt-3 gap-2 ">
                <img className="w-4.5 h-4.5" src="play.svg" />
                Watch Trailer
              </button>
            </div>{" "}
          </CarouselItem>
          <CarouselItem className="w-357 h-157 bg-[url(https://pbs.twimg.com/media/GNjOKcfXYAEMVAp.jpg:large)] object-fill bg-contain bg-center bg-no-repeat">
            <div className="mt-48 ml-35">
              <span className="text-base font-normal">Now playing</span>
              <h1 className="font-bold text-4xl">Wicked</h1>
              <FaStar color="#FDE047" />{" "}
              <span className="terxt-foreground">6.9</span>
              <span className="text-">/10</span>
              <h6 className="mt-4 font-normal text-xs w-75.5">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </h6>
              <button className="flex bg-white text-black rounded-[6px] h-10 items-center">
                <img className="w-4 h-4" src="play.svg" />
                Watch Trailer
              </button>
            </div>{" "}
          </CarouselItem>
          <CarouselItem className="w-357 h-157 bg-[url(https://pbs.twimg.com/media/GNjOKcfXYAEMVAp.jpg:large)] object-fill bg-contain bg-center bg-no-repeat">
            <div className="mt-48 ml-35">
              <span className="text-base font-normal">Now playing</span>
              <h1 className="font-bold text-4xl">Wicked</h1>
              <FaStar color="#FDE047" />{" "}
              <span className="terxt-foreground">6.9</span>
              <span className="text-">/10</span>
              <h6 className="mt-4 font-normal text-xs w-75.5">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </h6>
              <button className="flex bg-white text-black rounded-[6px] h-10 items-center">
                <img className="w-4 h-4" src="play.svg" />
                Watch Trailer
              </button>
            </div>{" "}
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
    </div>
  );
};
