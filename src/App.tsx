import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteStore } from './store/store';

const App = () => {
  const { data, isLoading } = useFetchRepositories();
  const { favorites, addFavorite } = useFavoriteStore();

  console.log(favorites);

  if (isLoading) return <p>Loading...</p>;

  console.log(data);
  return (
    <div>
      {data.map((repo: any) => {
        return (
          <div key={repo.id}>
            <p>{repo.name}</p>
            <button onClick={() => addFavorite(repo.name)}>LIKE</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
