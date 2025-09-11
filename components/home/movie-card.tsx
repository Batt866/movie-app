import { FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
type MovieCardProps = {
  title: string;
  image: string;
  score: number;
};

export const MovieCard = ({ title, image, score }: MovieCardProps) => {
  return (
    <Card className="w-[230px] bg-secondary p-0 overflow-hidden gap-2">
      <CardContent className="p-0">
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt=""
          className="w-[230px] h-[340px]"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 h-25">
        <CardDescription className="flex ">
          <FaStar color="#FDE047" />{" "}
          <span className="terxt-foreground">{score}</span>
          <span className="text-">/10</span>
        </CardDescription>
        <CardTitle className="pt-1 text-lg font-normal not-italic">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
