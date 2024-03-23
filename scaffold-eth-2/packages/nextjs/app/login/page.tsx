"use client";

import { useState } from "react";
import { useAccount, useEnsName, useEnsAvatar } from "wagmi";
import RegisterENS from "~~/components/RegisterENS";
import { Address } from "~~/components/scaffold-eth";
import { AddressInput } from "~~/components/scaffold-eth";
import esn from "../../components/ens"

// You'll need the ABI and address of the contract responsible for ENS registration
// const ENS_CONTRACT_ABI = []; // Your contract ABI here
// const ENS_CONTRACT_ADDRESS = "0x..."; // Your contract address here

export default function ENSPage() {
  const [showModal, setShowModal] = useState(false);

  const [address, setAddress] = useState("");

  const openModal = () => {
    setShowModal(true);
  };
  const { address: connectedAddress } = useAccount();
  //   const [ensName, setEnsName] = useState("");

  //   const { data: ensNameData } = useENSName({ address: connectedAddress });

  // Function to handle new ENS name registration
  //   const { write: registerENS } = useContractWrite({
  //     addressOrName: ENS_CONTRACT_ADDRESS,
  //     contractInterface: ENS_CONTRACT_ABI,
  //     functionName: 'register', // Replace with your function name for registering an ENS
  //   });

  //   const handleRegisterENS = async () => {
  //     if (!ensName) return;
  //     // Call the contract to register the ENS name
  //     // registerENS({ args: [ensName] });
  //   };

  // Conectar o ESN name ao endereço já conectado
  // const ENS_CONTRACT_ADDRESS = "0x..."; // Replace with the actual contract address

  // const { write: connectENS } = useContractWrite({
  //     addressOrName: ENS_CONTRACT_ADDRESS,
  //     contractInterface: ENS_CONTRACT_ABI,
  //     functionName: "connect", // Replace with your function name for connecting an ENS
  // });

  // const handleENSNameChange = (event: { target: { value: SetStateAction<string> } }) => {
  //     setEnsName(event.target.value);
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold">Conta Rede ETH:</div>
          <Address address={connectedAddress} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-4">
          Nomes descentralizados para carteiras, websites e muito mais.
        </h1>
        <div className="flex flex-col space-y-4">
          {/* <button
            // onClick={handleRegisterENS}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Get your ENS name
          </button>

          <button
            onClick={openModal}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Login
          </button> */}
          <AddressInput onChange={setAddress} value={address} placeholder="Input your address" />;
          
        </div>
      </div>
      {showModal && <RegisterENS closeModal={() => setShowModal(false)} />}
    </div>
  );
}
