import React from 'react'
import {useDispatch} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
export default function Checkout({subtotal}) {

    const dispatch = useDispatch()
    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))

    }

  return (
    <div>

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51Nfiz8SEsBiaEForEgvnbr6ve4EsxMyFafE1B0FTzLgJIgr9A5yiBW8Y8tyBsfQHOcBIWvlmg7XQz7ZobItfDDRM00wxdDVm05'
        currency='INR'
        >

            <button className='btn'>Pay Now</button>

        </StripeCheckout>
      
    </div>
  )
}
