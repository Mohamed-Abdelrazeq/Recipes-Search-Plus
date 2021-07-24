const MealCard = (probs) => {

    const hits = probs.probs;

    if(!probs.isPending){
        return <div className="meals-area">
        {

            hits.map((hit) => {
                    return  <div className="all">
                                <img src={hit.recipe.image} className="meal-img" alt="" />
                                <div className="meal-card">
                                    <div className="text">
                                        <h3>{hit.recipe.label}</h3>
                                        <div className="cards">
                                        {hit.recipe.dietLabels.map((label)=>{
                                            return <div className="card">{label}</div>
                                        })}
                                        </div>
                                    </div>
                                </div> 
                            </div>
                    
                              } 
                         )
                     }
       
        
    </div>
    }else{
        return <h1>Loading....</h1>
    }


}
 
export default MealCard;