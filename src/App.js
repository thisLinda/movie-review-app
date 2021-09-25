import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div id='App'>
      <header className="welcome">
        <h1>Welcome!</h1>
        <br />
        <h2>Have you seen the movie? Add your review.</h2>
      </header>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App;