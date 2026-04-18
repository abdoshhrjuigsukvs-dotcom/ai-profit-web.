import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P4SAtP1X9y5K8yGvRjWzH8H6J2L9m4N7P5Q3R1V8X0Z2W4Y6B8N0M2Q4W6E8R0T');

function App() {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1P4SDsP1X9y5K8yGRk8oZ7Xm', quantity: 1 }],
      mode: 'payment',
      successUrl: window.location.origin,
      cancelUrl: window.location.origin,
    });
    if (error) console.log(error);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>AI Profit Pro</h1>
      <p>اشترك الآن لتفعيل ميزات الذكاء الاصطناعي</p>
      <button 
        onClick={handleClick}
        style={{
          padding: '15px 40px',
          fontSize: '20px',
          backgroundColor: '#6772e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        دفع الآن
      </button>
    </div>
  );
}

export default App;

