
export default function Electronics({ items, onAdd }) {
    console.log(items)
    if (items.length <= 0) {
        return "loading..."
    }
    //if clothing is equal to category. create a div with the following images, price. and title
    const electronics = items.filter((item) => {
        return (
            (item.category === "electronics") 
        )
    }
    )
    console.log(electronics);

    // function handleClick() {
    //     console.log('button from Electronics page');
    // }

    return (
        <div className="flexbox-container">
            <h2> Electronics</h2>
            <div className="electronic-list">
                {electronics && electronics.map((electronic, id) => {
                    return (
                        <div className="electronics" key={id}>
                            <img src={electronic.image} alt="" />
                            <p className="add-button"><button className="add-clothing">ADD</button></p>
                            <h1> $ {electronic.price}</h1>
                            <h3>{electronic.title}</h3>
                            {/* <h4>{apparel.category}</h4> */}

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}