import RazorpayCheckout from "@/components/RazorpayCheckout";

export default function RegisterSuccessPage() {
  const response = {
    razorpayId: "your_live_key_or_test_key",
    amount: 50000,
    orderID: "order_xyz123"
  };

  const requestData = {
    name: "John Doe",
    email: "john@example.com",
    mobile: "9999999999",
    city: "New York"
  };

  const registerId = 1;

  return (
    <div>
      <h1>Redirecting to Payment...</h1>
      <RazorpayCheckout
        razorpayId={response.razorpayId}
        amount={response.amount}
        orderID={response.orderID}
        requestData={requestData}
        registerId={registerId}
      />
    </div>
  );
}
