function Jewelry({items}) {
    if(items.length <= 0){
        return "loading...."
    } 
    console.log(items)
    const jewels = items.filter((item)=>{
        return(
          (item.category === "jewelery")
          
        )})
    console.log(jewels);

    return (
        <div className="jewelery">
            <div>
                {jewels && jewels.map((jewel, id) => {
                    return (
                        <div className="jewelery" key={id} >
                           <h1>{jewel.title}</h1>
                           <img src={jewel.image} alt="jewelery"/>
                           <h2>{jewel.price}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Jewelry;