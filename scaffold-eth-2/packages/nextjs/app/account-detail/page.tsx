import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

const AccountDetailsPage: NextPage = () => {
  // You can add state and effects if you need them

  return (
    <>
      <Head>
        <title>Account Details</title>
        <meta name="description" content="View details of your account" />
      </Head>

      <div className="container mx-auto my-10">
        <h1 className="text-2xl font-bold mb-4">Account Details</h1>
        {/* Add your account details components and functionality here */}

        <div className="mt-6">
          <Link href="/" passHref className="link">
            Go back to Home
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default AccountDetailsPage;
