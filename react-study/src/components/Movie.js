function Movie({ mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>{title}</h2>
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
