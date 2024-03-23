"use client";

import React from "react";
// import { useState } from 'react';
import ContractCard from "~~/components/ContractCard";
import NewContractModal from "~~/components/NewContractModal";

export default function Contratos() {
  const [showModal, setShowModal] = React.useState(false);

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
        <div className="grid grid-cols-3 gap-4">
          {/* Aqui você listaria os contratos ativos, possivelmente buscando-os de uma API ou estado */}
          <ContractCard title="Contrato 1" />
          <ContractCard title="Contrato 2" />
          <ContractCard title="Contrato 3" />
          {/* ... */}
        </div>
      </main>
      {showModal && <NewContractModal closeModal={() => setShowModal(false)} />}
    </div>
  );
}
