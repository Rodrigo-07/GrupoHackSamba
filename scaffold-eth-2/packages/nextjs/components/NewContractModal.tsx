import React, { useState } from "react";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export default function NewContractModal({ closeModal }: { closeModal: () => void }) {
  const { address: connectedAddress } = useAccount();

  const [nomeContrato, setNomeContrato] = useState("");
  const [descricaoContrato, setDescricaoContrato] = useState("");
  const [colaboradores, setColaboradores] = useState([]);
  const [hashColaborador, setHashColaborador] = useState("");

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "addContract",
    args: [],
    value: parseEther("0.01"),
  });

  const addColaborador = () => {
    setColaboradores([...colaboradores, hashColaborador.trim()]);
    setHashColaborador("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nomeContrato.trim() || !descricaoContrato.trim() || colaboradores.length === 0) {
      console.error("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    try {
      await writeAsync({
        args: [connectedAddress, nomeContrato, descricaoContrato, colaboradores],
      });
      console.log("Transação enviada com sucesso!");
      closeModal();
    } catch (error) {
      console.error("Erro ao escrever", error);
    }
  };

  function removeColaborador(index) {
    setColaboradores(colaboradores.filter((_, i) => i !== index));
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Novo contrato</h3>
          <button onClick={closeModal} className="text-black">
            &#x2715; {/* Unicode X symbol */}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="nome">
                Nome do contrato:
              </label>
              <input
                type="text"
                placeholder="Nome do Contrato"
                value={nomeContrato}
                onChange={e => setNomeContrato(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="descricao">
                Descrição do contrato:
              </label>
              <textarea
                placeholder="Descrição do Contrato"
                value={descricaoContrato}
                onChange={e => setDescricaoContrato(e.target.value)}
                className="border p-1 w-full"
              />
            </div>
            <label className="block text-sm font-medium mb-1" htmlFor="colaboradores">
              Endereço da carteira dos assinantes:
            </label>
            <div className="flex items-center mb-2">
              <ul>
                {colaboradores.map((colaborador, index) => (
                  <li key={index} className="flex items-center justify-between">
                    {colaborador}
                    <button type="button" onClick={() => removeColaborador(index)} className="ml-2">
                      &#x1f5d1; {/* Unicode trash can symbol */}
                    </button>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={addColaborador} className="ml-2">
                &#x2795; {/* Unicode plus symbol */}
              </button>
            </div>
            <input
              type="text"
              placeholder="hash do colaborador"
              value={hashColaborador}
              onChange={e => setHashColaborador(e.target.value)}
              className="border p-1 w-full mb-2"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1" htmlFor="data">
              Data de vencimento:
            </label>
            <input type="date" id="data" />
          </div>
          <div className="flex items-center justify-end mt-4">
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
            <button type="button" onClick={closeModal} className="btn btn-ghost ml-2">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
