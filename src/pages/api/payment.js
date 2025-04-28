import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: 'rzp_test_fk6tbR96IctJnG',
  key_secret: 'imv2Mnr6dGLvrmB4Sd5AYKLd',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    try {
      const payment_capture = 1; // Auto capture of payment
      const currency = 'INR';

      const options = {
        amount: amount * 100, // Amount in paise
        currency,
        receipt: `receipt_${new Date().getTime()}`,
        payment_capture,
      };

      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Error creating order' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
