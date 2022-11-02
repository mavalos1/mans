import type { NextPage } from "next";

import Head from "next/head";

import { OrderAdminPage } from "@/features/orderAdmin";

const OderAdminNextPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Order summary</title>
        <meta
          name="description"
          content="Your order from Manscaped - Admin access"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OrderAdminPage />
    </>
  );
};

export default OderAdminNextPage;
