export default function DocumentCard({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg">
      <div className="h-24 w-24 bg-gray-200 rounded-md mb-4"></div>
      <div className="text-md font-semibold">{title}</div>
    </div>
  );
}
