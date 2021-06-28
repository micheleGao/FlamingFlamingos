
export default function Pay(){
    function handleConfirm(){
        alert("Thank you for your purchase")
    }
    return(
        <div>
            <form>
                <label forHTML="name">Name </label>
                <input type="text"></input>
                <div>
                    <label forHTML="cards">Choose a card type: </label>
                    <select className="card-type" id="card-type">
                        <option>MasterCard</option>
                        <option>Visa</option>
                        <option>Amex</option>
                        <option>Discover</option>
                        <option>Paypal</option>
                    </select>
                </div>
                <div>
                    <label forHTML="card-num">Card Number </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label forHTML="3-digit"> 3- digit Security code (on the back of your card) :</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label forHTML="zip"> 5- digit Zipcode:</label>
                    <input type="text"></input> 
                </div>
                <div>
                    <label forHTML="Mailing"> Mailing address</label>
                    <input type="text"></input> 
                </div> 
                <button onClick={()=>handleConfirm()}>CONFIRM PAYMENT</button>
                

            </form>
        </div>
    )
}