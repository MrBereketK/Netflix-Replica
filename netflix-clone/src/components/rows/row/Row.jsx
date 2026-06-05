import React, { useState, useEffect } from 'react'
import axios from '../../../utils/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import "./row.css"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then(url => {
                console.log("url", url)
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
            })
            .catch(error => console.log(error))
        }
    
}

    const opts = {
      height: window.innerWidth < 768 ? "250" : "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

  return (
  <div className="row">
    <h1>{title}</h1>

    <div className="row__posters">
      {movies.map((movie) => (
        <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.title || movie.name}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        />
      ))}
    </div>

    {trailerUrl && (
      <div className="row__trailer">
        <YouTube videoId={trailerUrl} opts={opts} />
      </div>
    )}
  </div>
);
}

export default Row
