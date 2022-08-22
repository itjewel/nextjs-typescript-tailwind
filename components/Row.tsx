import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Thumbnail from "../components/Thumbnail";
import { Movie } from "../typings";
interface Props {
  title: string;
  movies: Movie[];
}
const Row = ({ title, movies }: Props) => {
  // const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  // console.log(movies)

  const handleClick = (duration: string) => {
    // setIsMoved(true)
    if (rowRef.current) {
      // let { scrollLeft, scrollWidth} = rowRef.current;
      const { scrollLeft, clientWidth } = rowRef.current;
      // scrollWidth = 200;
      const scrollTo =
        duration === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        {/* items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 */}
        <AiOutlineLeft
          className="absolute top-0 text-[#e1e1e1e2] bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {movies &&
            movies.map((movie) => (
              <>
                <Thumbnail key={movie.id} movie={movie} />
              </>
            ))}
        </div>
        <AiOutlineRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[#e1e1e1e2]"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
export default Row;
