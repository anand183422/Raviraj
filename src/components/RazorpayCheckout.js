"use client"; // if using Next.js 13+ App Router

import { useEffect } from "react";

export default function RazorpayCheckout({ razorpayId, amount, orderID, requestData, registerId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: razorpayId,
        amount: amount.toString(), // amount in paise
        currency: "INR",
        image: "https://example.com/your_logo",
        order_id: orderID,
        handler: function (response) {
          // Create form and submit data
          const form = document.createElement("form");
          form.method = "POST";
          form.action = `/api/payment/complete/${registerId}`;

          const csrf = document.createElement("input");
          csrf.type = "hidden";
          csrf.name = "_token";
          csrf.value = ""; // Add CSRF token here if needed
          form.appendChild(csrf);

          const fields = [
            { name: "razorpay_payment_id", value: response.razorpay_payment_id },
            { name: "razorpay_order_id", value: response.razorpay_order_id },
            { name: "razorpay_signature", value: response.razorpay_signature },
          ];

          fields.forEach(field => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = field.name;
            input.value = field.value;
            form.appendChild(input);
          });

          document.body.appendChild(form);
          form.submit();
        },
        prefill: {
          name: requestData.name,
          email: requestData.email,
          contact: requestData.mobile,
        },
        notes: {
          address: requestData.city,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            window.location.href = "/register"; // Replace with your Next.js route
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [razorpayId, amount, orderID, requestData, registerId]);

  return null;
}
