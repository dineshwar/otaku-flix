import PropsType from "prop-types";

const AnimeCard = ({ imageUrl, title, score, synopsis, genres }) => {
  return (
    <div className="group relative">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img alt="Shoes" src={imageUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{score}</div>
          </h2>
          <p>
            {`${synopsis
              .replace("[Written by MAL Rewrite]", "")
              .substr(0, 300)}...`}
          </p>
          <div className="card-actions justify-end">
            {genres.map((genre) => (
              <div key={genre.mal_id} className="badge badge-outline">
                {genre.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  imageUrl: PropsType.string,
  title: PropsType.string,
  score: PropsType.number,
  synopsis: PropsType.string,
  genres: PropsType.array,
};

export default AnimeCard;
