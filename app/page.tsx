import { MovieCard } from "@/components/home/movie-card";

export default function Home() {
  return (
    <div>
      <h1 className="mt-10 text-lg">Upcoming </h1>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard title="Dear Santa" score={6.9} image="photo1.jpg" />
        <MovieCard
          title="How To Train Your Dragon Live Action"
          score={6.9}
          image="photo2.jpg"
        />
        <MovieCard title="Alien Romulus" score={6.9} image="photo3.jpg" />
        <MovieCard title="From the Ashes" score={6.9} image="photo4.jpg" />
        <MovieCard title="Space Dogg" score={6.9} image="photo5.png" />
      </div>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard title="The Order" score={6.9} image="photo6.jpg" />
        <MovieCard title="Y2K" score={6.9} image="photo7.jpg" />
        <MovieCard
          title="Solo Leveling: ReAwakening"
          score={6.9}
          image="photo8.jpg"
        />
        <MovieCard title="Get Away" score={6.9} image="photo9.jpg" />
        <MovieCard
          title="Sonic the Hedgehog 3"
          score={6.9}
          image="photo10.png"
        />
      </div>
      <h1 className="mt-10 text-lg">Popular</h1>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard
          title="The Shawshank Redemption"
          score={6.9}
          image="photo11.jpg"
        />
        <MovieCard title="The Godfather" score={6.9} image="photo12.jpg" />
        <MovieCard title="The Dark Knight" score={6.9} image="photo13.jpg" />
        <MovieCard title="12 Angry Men" score={6.9} image="photo14.jpg" />
        <MovieCard
          title="The Lord of the Rings: The  Return of the King"
          score={6.9}
          image="photo15.jpg"
        />
      </div>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard title="Internstellar" score={6.9} image="photo16.png" />
        <MovieCard title="Se7en" score={6.9} image="photo17.png" />
        <MovieCard
          title="It’s a Wonderful life"
          score={6.9}
          image="photo18.png"
        />
        <MovieCard title="Seven samurai" score={6.9} image="photo19.png" />
        <MovieCard
          title="The Silence of the Lambs"
          score={6.9}
          image="photo20.png"
        />
      </div>
      <h1 className="mt-10 text-lg">Top Rated </h1>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard title="Pulp Fiction" score={6.9} image="photo21.jpg" />
        <MovieCard
          title="The Lord of the Rings: Fellowship of the Kings"
          score={6.9}
          image="photo22.jpg"
        />
        <MovieCard
          title="The Good, the Bad and the Ugly"
          score={6.9}
          image="photo23.png"
        />
        <MovieCard title="Forrest Gump" score={6.9} image="photo24.jpg" />
        <MovieCard title="Fight Club" score={6.9} image="photo25.jpg" />
      </div>
      <div className="flex gap-8 mt-[32px]">
        <MovieCard
          title="Saving Private Ryan"
          score={6.9}
          image="photo26.png"
        />
        <MovieCard title="City of God" score={6.9} image="photo27.png" />
        <MovieCard title="The Green Mile" score={6.9} image="photo28.png" />
        <MovieCard title="Life is Beautiful" score={6.9} image="photo29.png" />
        <MovieCard
          title="Terminator 2: Judgement Day"
          score={6.9}
          image="photo30.png"
        />
      </div>
    </div>
  );
}
