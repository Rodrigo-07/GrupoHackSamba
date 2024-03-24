import { link } from "fs";

export default function DocumentCard({ title, owner, file }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      {/* Ícone ou imagem do documento */}
      <div className="h-24 w-24 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        <img src={file} alt={title} className="h-24 w-24 object-cover rounded-md mb-4" />
        <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-12H3z"></path>
        </svg>
      </div>

      <div className="text-md font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600">{owner}</div>

      <div className="flex mt-4 text-gray-500 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
        {file}
      </div>

      {/* Botões de Ação (opcional) */}
      <div className="flex space-x-2 mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-300 text-sm">Ver</button>
      </div>
    </div>
  );
}
