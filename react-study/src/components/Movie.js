import { Link } from "react-router-dom";

function Movie({ mediumCoverImage, title, summary, genres, id }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
