import { useState } from 'react';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import useFetchRecipes from '../Hooks/FetchAll';
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';
import MealCard from './MealCard';
import SearchBar from './SearchBar';

function App() {  

  const [searchQuery , setSearchQuery] = useState('');
  const [hits , isPending] = useFetchRecipes(searchQuery);

  return (
    <Router>

        <div className="App">

          <Switch>


          <Route exact path='/'>
            <LandingPage/>
          </Route>


          <Route path='/search'>
            <SearchBar setSearchQuery={setSearchQuery}/>  
            <MealCard probs={hits} isPending={isPending} />
          </Route>

          
          <Route path='/about'>
            <About/>
          </Route>


          <Route path='/contacts'>
            <Contact/>
          </Route>
        

        </Switch>


          {/* 
           */}
        </div>
      
    </Router>

  );
}

export default App;
