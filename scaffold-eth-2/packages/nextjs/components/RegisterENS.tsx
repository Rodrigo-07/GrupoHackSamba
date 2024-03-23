import React, { useState } from "react";
import { useAccount, useContractWrite, useEnsName } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

export default function RegisterENS({ closeModal }: { closeModal: () => void }) {
  const { address: connectedAddress } = useAccount();

  const [ensName, setEnsName] = useState("");
  const [ensAddress, setEnsAddress] = useState("");

  const handleRegisterENS = async () => {
    if (!ensName || !ensAddress) return;
    // Call the contract to register the ENS name
    // registerENS({ args: [ensName] });
  };

  const handleENSNameChange = (event: { target: { value: string } }) => {
    setEnsName(event.target.value);
  };

  const handleENSAddressChange = (event: { target: { value: string } }) => {
    setEnsAddress(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <button onClick={closeModal} className="text-black"></button>
            &#x2715; {/* Unicode X symbol */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Registre um nome ENS</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={ensName}
            onChange={handleENSNameChange}
            placeholder="Nome ENS"
            className="border p-1 w-full"
          />

          {/* O Endereço da Pessoal já vai ser o adress da metamask conectada */}
          <div className="text-xl font-bold">ENS Adress</div>
          <Address address={connectedAddress} />
        </div>

        <button
          onClick={handleRegisterENS}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Registrar ENS
        </button>
      </div>
    </div>
  );
}
