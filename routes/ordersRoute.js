const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require("stripe")("sk_test_51Nfiz8SEsBiaEFor711MIwzsa2oPXPt4Sdmnti1eNtGDirSGot9Ihp8fU4IK1H57KyAjaKA15tMZE7ufHdPrRf7I00gkQahtwO"); // Replace with your actual Stripe secret key


router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {

    const customer = await stripe.customers.create({
        email : token.email,
        source : token.id
    })


    const payment = await stripe.paymentIntents.create({
      amount: subtotal * 100,
      currency: 'inr',
      customer: customer.id,
      receipt_email: token.email,
      description: 'Payment for Order',
    }, {
        idempotencyKey: uuidv4()
    });

    if(payment){

        

        res.send("Order Placed Successfully")
    }
    else{
        res.send("Payment Failed")
    }

    
  } 
  
  catch (error) {
    return res.status(400).json({ message: 'Something Went Wrong', error: error.message });
  }

});

module.exports = router;
