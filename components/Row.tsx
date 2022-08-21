import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Thumbnail from "../components/Thumbnail";
import { Movie } from "../typings";


interface Props{
    title:string,
    movies: Movie[],
}
const Row = ({title, movies}: Props) => {
    // console.log(movies)
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
    <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
    {title}
  </h2>
  <div className="group relative md:-ml-2">
  {/* items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 */}
  <AiOutlineLeft/>
  <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
        {movies && movies.map((movie)=>(<>
            <Thumbnail key={movie.id} movie={movie} />
        </>))}
    </div>
  <AiOutlineRight/>
  </div>
  </div>
  )
}
export default Row;
