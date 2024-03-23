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
          <p>Smart solutions for documents storage  <br /> and contracts signature.</p>
          <button className="access-documents"><Link href="./about"> ACCESS DOCUMENTS</Link></button>
        </section>
        <aside className="welcome-message">
          <h2>HELLO, WELCOME TO THINKLINK!</h2>
          <div className="endereco"><p>Connected Address: <Address address={connectedAddress} /></p></div>
        </aside>
      </main>
    </>
  );
};

export default Home;
