import { useEffect , useState} from 'react'

const useFetchRecipes = (mealName) => {
    
    const [hits,setHits] = useState([]);
    const [isPending , setIsPending] = useState(true)

    const recipeSearch = async (mealName) => {   
      
      console.log("Called");

      const APPLICATION_KEYS = "6686a96f806d88c40a42a8999e4a68d3";
      const APPLICATION_ID = "162d5c33";
      const request = `https://api.edamam.com/search?q=${mealName}&from=0&to=100&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEYS}&health=alcohol-free`
    
      const requestResponse = await fetch(request);
      const jsonResponse = await requestResponse.json();
    
      setHits(await jsonResponse.hits);
    
      // console.log(jsonResponse);

      // hits.map((meal) => {
      //   console.log(meal.recipe.yield);
      //   console.log(Math.floor(meal.recipe.calories));
      //   console.log(meal.recipe.label);
      //   console.log(meal.recipe.image);
      //   console.log(measl.recipe.url);
      //   console.log(measl.recipe.dietLabels);
      //   console.log(meal.recipe.ingredientLines);
      // })

      setIsPending(false);
      }

    useEffect(() => {
        recipeSearch(mealName);
      },[mealName]
      );
    
    return [hits , isPending];
}
 
export default useFetchRecipes;