"use client";

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import DocumentCard from '~~/components/DocumentCard';
import { useScaffoldContractRead } from '~~/hooks/scaffold-eth';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contracts.map((contract, index) => (
          <div key={index} onClick={() => handleContractClick(contract)}>
            <DocumentCard title={contract.name} owner={contract.owner} />
          </div>
        ))}
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