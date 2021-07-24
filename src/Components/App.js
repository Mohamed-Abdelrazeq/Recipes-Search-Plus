import { useState } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import useFetchRecipes from '../Hooks/FetchAll';
import MealCard from './MealCard';
import SearchBar from './SearchBar';

function App() {  

  const [searchQuery , setSearchQuery] = useState('');
  const [hits , isPending] = useFetchRecipes(searchQuery);

  return (
    <Router>

        <div className="App">
          <SearchBar setSearchQuery={setSearchQuery}/>
          <MealCard probs={hits} isPending={isPending} />
          </div>
      
    </Router>

  );
}

export default App;
