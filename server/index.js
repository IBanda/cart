const express = require('express');
const app=express();
const cors=require('cors');
const stripe=require('stripe')('')
const PORT=process.env.PORT||4000
app.use(cors())
app.use(express.json())
app.post('/payments',(req,res)=>{ 
  (async()=>{
        const session= await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:req.body,
            success_url:'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url:'http://localhost:3000/cart'
        }) 
      return  res.json(session)
  })()  

})


app.listen(PORT,()=>console.log(`Server is listening on port: ${PORT}`))