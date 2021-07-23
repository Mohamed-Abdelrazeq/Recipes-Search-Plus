import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import useFetchRecipes from '../Hooks/FetchAll';
import MealCard from './MealCard';
import SearchBar from './SearchBar';

function App() {  
  const [hits , isPending] = useFetchRecipes("ice cream");
  return (
    <Router>

        <div className="App">
          <SearchBar/>
          <MealCard probs={hits} isPending={isPending}/>
          </div>
      
    </Router>

  );
}

export default App;
