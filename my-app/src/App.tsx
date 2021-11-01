
import "./App.css";
import AppRouter from "./router/AppRouter";

export interface Ismovies {
  Title?: string;
  Year?: number;
  imdbID?: string;
  Type?: string;
  Poster?: string;
}

const App = () => {

  return (
    <div className="App">
      <AppRouter />  
    </div>
  );
};

export default App;
