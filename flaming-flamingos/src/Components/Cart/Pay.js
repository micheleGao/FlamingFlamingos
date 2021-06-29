import { useState} from 'react';
import {Redirect} from 'react-router-dom';
export default function Pay(){
    const [redirect, setRedirect]=useState(false);
    function handleConfirm(event){
        event.preventDefault();
        // alert("Thank you for your purchase")
        setRedirect(true)
    }
    if (redirect) {
        return (<Redirect to='/'/>)
    }
    return(
        <div>
            <form onSubmit={handleConfirm} className="payment-form">
                <label htmlFor="name">Name: </label>
                <input type="text"></input>
                <div>
                    <label htmlFor="cards">Choose a card type: </label>
                    <select className="card-type" id="card-type">
                        <option>MasterCard</option>
                        <option>Visa</option>
                        <option>Amex</option>
                        <option>Discover</option>
                        <option>Paypal</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="card-num">Card Number </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="3-digit" > 3- digit Security code:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label htmlFor="zip" > 5- digit Zipcode:</label>
                    <input type="text"></input> 
                </div>
                <div>
                    <label htmlFor="Mailing"> Mailing address</label>
                    <input type="text"></input> 
                </div> 
                <button type="submit" >CONFIRM PAYMENT</button>
                

            </form>
        </div>
    )
}