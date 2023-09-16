import { Link } from "react-router-dom";

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div>
      <h1>
        <a href={url}>{title}</a>
      </h1>
      <img src={src} alt={title} />
      <h4>description</h4>
      <p /> {description}
      <h4>Movie Rating: {rating}</h4>
      <div>
        <h4>genres</h4>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <br />
      <hr />
      <a href={url}>Go to the site</a>
      <p />
      <Link to="/">Go to the Movie List</Link>
    </div>
  );
}

export default MovieDetail;
