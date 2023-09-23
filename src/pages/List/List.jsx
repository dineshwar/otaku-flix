import PropsType from "prop-types";
import AnimeCard from "@pages/List/AnimeCard";

const List = ({ animeList, clickNextAction, currentPage }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {animeList.data.map((anime) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                genres={anime.genres}
                imageUrl={anime.images.jpg.image_url}
                score={anime.score}
                synopsis={anime.synopsis}
                title={anime.title}
              />
            );
          })}
        </div>
      </div>
      <div className="join grid grid-cols-2">
        <button
          className="join-item btn btn-outline"
          disabled={currentPage === 1}
          onClick={() => clickNextAction({ type: "decrease" })}>
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          disabled={!animeList.pagination.has_next_page}
          onClick={() => clickNextAction({ type: "increase" })}>
          Next
        </button>
      </div>
    </div>
  );
};

List.propTypes = {
  animeList: PropsType.object,
  clickNextAction: PropsType.func,
  currentPage: PropsType.number,
};

export default List;
