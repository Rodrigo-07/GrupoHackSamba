import React from "react";
import DocumentCard from "~~/components/DocumentCard";

const docsRegistered = () => {
  const documents = ["Identidade", "Certidão", "CNH"];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Documentos registrados</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {documents.map(doc => (
            <DocumentCard key={doc} title={doc} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default docsRegistered;
