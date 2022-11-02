import type { NextPage } from "next";

import Head from "next/head";

import { OrderSummaryPage } from "@/features/order";

const OrderItemSummaryNextPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Order summary</title>
        <meta name="description" content="Your order from Manscaped" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OrderSummaryPage />
    </>
  );
};

export default OrderItemSummaryNextPage;
