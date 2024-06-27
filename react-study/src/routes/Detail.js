import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  async function getMovie() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        {movie.title} ({movie.year})
      </h1>
      <div style={{ display: "flex" }}>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
