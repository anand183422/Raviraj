import Head from 'next/head';
import Payment from '@/components/Payment';
import Script from 'next/script';
const MyPage = () => {
  return (
    <>
      <Head>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          async
        ></Script>
      </Head>
      <Payment />
    </>
  );
};

export default MyPage;
