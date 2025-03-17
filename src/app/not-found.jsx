"use client"
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router=useRouter()
  return (
      <div className="notfound">
      <div className="tv-container">
        <div className="static "></div>
        <div className="overlay">
          <div className="error-text">404</div>
          <div className="subtext">Channel Not Found</div>
          <div className="instructions">
            Oops! Try adjusting your antenna or <button className="btn p-2 text-red-800 outline-dotted hover:text-white hover:bg-red-800 hover:outline-none transition-all duration-300" onClick={()=>router.back()}>Go back</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default NotFound;
