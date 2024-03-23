"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import './page.css';

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
    <main className="main-content">
        <section className="brand-section">
          <img className="logo" src="/logo.png" alt="Logo da ThinkLink" />
          <h1>ThinkLink</h1>
          <p>Smart solutions for documents storage  <br /> and constrats signature.</p>
          <button className="access-documents"><Link href="./about"> ACCESS DOCUMENTS</Link></button>
        </section>
        <aside className="welcome-message">
          <h2>HELLO, WELCOME TO THINKLINK!</h2>
          <p>Connected Address: <Address address={connectedAddress} /></p>
        </aside>
      </main>

      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
