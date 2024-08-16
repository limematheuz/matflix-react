import TopRatedMovies from "../../../Shared/Data/TopRatedMovies.js";
import React, { useRef } from "react";
import "../TopRated/TopRated.css";
import arrowLeft from "../../../assets/Icons/angle-left-solid.svg";
import arrowRight from "../../../assets/Icons/angle-right-solid.svg";
import Like from "../../../assets/Icons/bookmark-regular.svg";

const topRatedMovies = TopRatedMovies();

export default function TopRated() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="tr-container" ref={sliderRef}>
      <div className="tr-carousel-controller">
        <button
          onClick={() => scroll(-1800)}
          className="tr-first-btn"
          aria-label="Scroll left"
        >
          <img className="ml-arrow" src={arrowLeft} alt="" />
        </button>
        <div className="tr-carousel-container">
          {topRatedMovies &&
            topRatedMovies.map((topRated) => (
              <div className="tr-poster-container" key={topRated.id}>
                <img src={topRated.url} alt="" />
                <img className="like-icon" src={Like} alt="" />
              </div>
            ))}
        </div>
        <button
          onClick={() => scroll(1800)}
          className="tr-second-btn"
          aria-label="Scroll right"
        >
          <img className="ml-arrow" src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
}












// import TopRatedMovies from "../../../Shared/Data/TopRatedMovies.js";
// import React, { useRef } from "react";
// import "../TopRated/TopRated.css";
// import arrowLeft from "../../../assets/Icons/angle-left-solid.svg";
// import arrowRight from "../../../assets/Icons/angle-right-solid.svg";
// import Like from "../../../assets/Icons/bookmark-regular.svg";

// const topRatedMovies = TopRatedMovies();

// export default function TopRated() {
//   const sliderRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     sliderRef.current.scrollLeft += scrollOffset;
//   };
//   return (
//     <section className="tr-container" ref={sliderRef}>
//       <div className="tr-carousel-controller">
//         <button
//           onClick={() => scroll(-1800)}
//           className="tr-first-btn"
//           aria-label="Scroll left"
//         >
//           <img className="ml-arrow" src={arrowLeft} alt="" />
//         </button>
//         <div className="tr-carousel-container">
//           {topRatedMovies &&
//             topRatedMovies.map((topRated) => (
//               <div className="tr-poster-container" key={topRated.id}>
//                 <img src={topRated.url} alt="" />
//                 <img className="like-icon" src={Like} alt="" />
//               </div>
//             ))}
//         </div>
//         <button
//           onClick={() => scroll(1800)}
//           className="tr-second-btn"
//           aria-label="Scroll right"
//         >
//           <img className="ml-arrow" src={arrowRight} alt="" />
//         </button>
//       </div>
//     </section>
//   );
// }
// .tr-container {
//     display: flex;
//     justify-content: flex-start;
//     align-items: flex-start;
//     flex-direction: column;
//     overflow-x: scroll;
//     scrollbar-width: none;
//     transition: transform 0.5s ease-in-out;
//     scroll-behavior: smooth;
//     width: 100%;
//     height: fit-content;
//     position: relative;
//   }
  
//   .tr-carousel-controller {
//     display: flex;
//     align-items: center;

//     position: relative;
//   }
  
//   .tr-carousel-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 20px;
//     width: 100%;
//   }
  
//   .tr-poster-container {
//     width: 400px;
//     height: 200px;
//     position: relative;
//   }
  
//   .tr-poster-container img {
//     width: 100%;
//     height: 100%;
//     border-radius: 8px;
//     object-fit: cover;
//   }
  
//   .tr-first-btn,
//   .tr-second-btn {
//     position: absolute; /* Cambiado a 'absolute' */
//     background-color: transparent;
//     cursor: pointer;
//     border: none;
//     z-index: 2;
//     height: 50px;
//     width: 60px;
//   }
  
//   .tr-first-btn {
//     left: 0;
//     top: 50%;
//     transform: translateY(-50%);
//   }
  
//   .tr-second-btn {
//     right: 0;
//     top: 50%;
//     transform: translateY(-50%);
//   }
  
//   .like-icon {
//     position: absolute;
//     bottom: 10px;
//     right: 10px;
//     max-height: 30px;
//     max-width: 30px;
//   }
  
// haz que el componente topRated sea igual de funcioanlidad que este sigueinte componente que te voy a pasar ahora:

// import "./MovieList.css";
// import { Upcoming } from "./Movies/Upcoming/Upcoming.jsx";
// import useFetchMovies from "../hooks/useFetchMovies.js";
// import React, { useRef } from "react";
// import arrowLeft from "../../src/assets/Icons/angle-left-solid.svg";
// import arrowRight from "../../src/assets/Icons/angle-right-solid.svg";

// export const MovieList = () => {
//   const movies = useFetchMovies();
//   const sliderRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     sliderRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <section className="movie-list-container" ref={sliderRef}>
//       <div className="ml-carousel-controllers">
//         <button
//           onClick={() => scroll(-1800)}
//           className="ml-first-btn"
//           aria-label="Scroll left"
//         >
//           <img className="ml-arrow" src={arrowLeft} alt="" />
//         </button>
//         <div className="movie-list-carousel">
//           {movies &&
//             movies.map((movie) => <Upcoming movie={movie} key={movie.id} />)}
//         </div>
//         <button
//           onClick={() => scroll(1800)}
//           className="ml-second-btn"
//           aria-label="Scroll right"
//         >
//           <img className="ml-arrow" src={arrowRight} alt="" />
//         </button>
//       </div>
//     </section>
//   );
// };

// .movie-list-container {
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
//   flex-direction: column;
//   overflow-x: scroll;
//   scrollbar-width: none;
//   transition: transform 0.5s ease-in-out;
//   scroll-behavior: smooth;
//   width: 100%;
//   height: fit-content;
//   position: relative;
// }

// .ml-carousel-controllers {
//   display: flex;
//   position: relative;
// }

// .movie-list-carousel {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// }

// .ml-first-btn,
// .ml-second-btn {
//   position: sticky; 
//   background-color: #ff000000;
//   cursor: pointer;
//   border: none;
//   z-index: 1;
//   height: 50px;
//   width: 60px;
//   top: 40%;
// }

// .ml-first-btn {
//   left: 0;
// }

// .ml-second-btn {
//   right: 0; 
// }

// .ml-first-btn:hover,
// .ml-second-btn:hover{
//   scale: 1.2;
//   transition: 0.3s ease-in-out;
// }




// pasa que mi componente todRated deberia de funcionar igual que el componente MovieList y no esta pasando esto.

// importante, no cambies los nombres de las clases
