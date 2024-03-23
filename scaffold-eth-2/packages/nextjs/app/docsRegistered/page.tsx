"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import DocumentCard from "~~/components/DocumentCard";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";


const DocsRegistered = () => {
  const { address: connectedAddress } = useAccount();

  const [contracts, setContracts] = useState([]);

  const { read, data, isLoading } = useScaffoldContractRead({
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contracts.map((contract, index) => (
        <DocumentCard key={index} title={contract.name} owner={contract.owner} />
      ))}
    </div>
  );
};

export default DocsRegistered;
