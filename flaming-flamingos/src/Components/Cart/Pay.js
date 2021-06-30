import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import { Button } from 'react-bootstrap';
export default function Pay() {
    const [redirect, setRedirect] = useState(false);
    function handleConfirm(event) {
        event.preventDefault();
        // alert("Thank you for your purchase")
        setRedirect(true)
    }
    if (redirect) {
        return (<Redirect to='/' />)
    }
    return (

        <div>
            <form onSubmit={handleConfirm} className="payment-form">
                <div className="info">
                    <label htmlFor="name">Name: </label>
                    <input type="text"></input>
                </div>
                <div className="info">
                    <label htmlFor="cards">Choose a card type: </label>
                    <select className="card-type" id="card-type">
                        <option>MasterCard</option>
                        <option>Visa</option>
                        <option>Amex</option>
                        <option>Discover</option>
                        <option>Paypal</option>
                    </select>
                </div>
                <div className="info">
                    <label htmlFor="cards">Choose the city: </label>
                    <select className="card-type" id="card-type">
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Austin</option>
                        <option>Sedona</option>
                        <option>Tampa</option>
                    </select>
                </div>
                
                <div className="info">
                    <label htmlFor="card-num">Card Number:  </label>
                    <input type="text"></input>
                </div>
                <div className="info">
                    <label htmlFor="3-digit" > 3- digit Security code:  </label>
                    <input type="text"></input>
                </div>
                <div className="info">
                    <label htmlFor="zip" > 5- digit Zipcode: </label>
                    <input type="text"></input> 
                </div>
                <div className="info">
                    <label htmlFor="Mailing"> Mailing address:   </label>
                    <input type="text"></input> 
                </div> 
                <div className="info">
                    <label htmlFor="apt"> Apartment:   </label>
                    <input type="text"></input> 
                </div> 
                <div className="info">
                {/* <button type="submit" >CONFIRM PAYMENT</button> */}
                <Button type="submit" variant="secondary" size="lg" block>
                Confirm Payment
                </Button>
                </div>


            </form>
        </div>
    )
}