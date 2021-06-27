
export default function Electronics({ items }) {
    console.log(items)
    if (items.length <= 0) {
        return "loading..."
    }
    //if clothing is equal to category. create a div with the following images, price. and title
    const electronics = items.filter((item) => {
        return (
            (item.category === "electronics") || (item.category === "women's clothing")
        )
    }
    )
    console.log(electronics);

    function handleClick() {
        console.log('button from Electronics page');
    }

    return (
        <div className="flexbox-container">
            <h2> Electronics</h2>
            <div className="Electronic-list">
                {electronics && electronics.map((electronic, id) => {
                    return (
                        <div className="electronics" key={id}>
                            <img src={electronic.image} />
                            <p className="add-button"><button className="add-clothing" onClick={handleClick}>ADD</button></p>
                            <h1>{electronic.price}</h1>
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