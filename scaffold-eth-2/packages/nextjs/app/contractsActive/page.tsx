"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
// import { useState } from 'react';
import ContractCard from "~~/components/ContractCard";
import DocumentCard from "~~/components/DocumentCard";
import NewContractModal from "~~/components/NewContractModal";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import './page.css';

export default function Contratos() {
  const { address: connectedAddress } = useAccount();
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { read, data, isLoading } = useScaffoldContractRead({
    contractName: 'YourContract',
    functionName: 'getContracts',
    args: [connectedAddress],
  });

  useEffect(() => {
    if (data) {
      setContracts(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Carregando contratos...</div>;
  }

  const handleContractClick = contract => {
    setSelectedContract(contract);
    onOpen(); // Open the modal
  };

  return (
    <>
      <div>
      <main className="p-6">
        <div  className="body" className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Contratos ativos</h1>
          <button className="botao" className="btn btn-ghost" onClick={openModal}>
            Criar
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* Aqui você listaria os contratos ativos, possivelmente buscando-os de uma API ou estado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {contracts.map((contract: { name: string; owner: string }, index: number) => (
          <div key={index} onClick={() => handleContractClick(contract)}>
                  <DocumentCard title={contract.name} owner={contract.owner} file={contract.link} />
          </div>
              ))}
            </div>
          {/* ... */}
        </div>
      </main>
      {showModal && <NewContractModal closeModal={() => setShowModal(false)} />}
    </div>

      {/* Modal for displaying contract details */}
      {selectedContract && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} style={{ backgroundColor: 'gray' }}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedContract.name}
                </ModalHeader>
                <ModalBody>
                  {/* Display other contract details here */}
                  <p>Owner: {selectedContract.owner}</p>
                  {/* ... more details ... */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}