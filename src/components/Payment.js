import { useState, useEffect } from 'react';

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setRazorpayScriptLoaded(true);
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Automatically trigger payment when script is loaded
  useEffect(() => {
    if (razorpayScriptLoaded) {
      handlePayment();
    }
  }, [razorpayScriptLoaded]);

  const handlePayment = async () => {
    if (!razorpayScriptLoaded) return; // Wait for Razorpay script to load

    setIsLoading(true);
    const res = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 500 }), // Amount in INR
    });

    const data = await res.json();

    if (data.id) {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'My Company',
        description: 'Payment for order',
        order_id: data.id,
        handler: function (response) {
          alert('Payment Successful!');
          console.log(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '1234567890',
        },
        notes: {
          address: 'Address for delivery',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }

    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <p>Processing payment...</p>}
    </div>
  );
};

export default Payment;
