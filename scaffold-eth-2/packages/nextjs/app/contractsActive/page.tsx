"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
// import { useState } from 'react';
import ContractCard from "~~/components/ContractCard";
import DocumentCard from "~~/components/DocumentCard";
import NewContractModal from "~~/components/NewContractModal";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export default function Contratos() {
  const { address: connectedAddress } = useAccount();

  const [showModal, setShowModal] = React.useState(false);

  const [contracts, setContracts] = useState([]);

  const { data, isLoading } = useScaffoldContractRead({
    contractName: "YourContract", // Nome do seu contrato
    functionName: "getContracts", // Nome da função do seu contrato
    args: [connectedAddress], // Utilize o endereço diretamente
  });

  useEffect(() => {
    if (data) {
      setContracts(data); // Change the argument to parsedData
    }
  }, [data]);

  if (isLoading) {
    return <div>Carregando contratos...</div>;
  }

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Contratos ativos</h1>
          <button className="btn btn-ghost" onClick={openModal}>
            Criar
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* Aqui você listaria os contratos ativos, possivelmente buscando-os de uma API ou estado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {contracts.map((contract: { name: string; owner: string }, index: number) => (
              <DocumentCard key={index} title={contract.name} owner={contract.owner} file={contract.link} />
            ))}
          </div>
          {/* ... */}
        </div>
      </main>
      {showModal && <NewContractModal closeModal={() => setShowModal(false)} />}
    </div>
  );
}
