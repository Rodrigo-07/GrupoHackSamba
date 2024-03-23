export default function ContractCard({ title }: { title: string }) {
  return (
    <div className="p-4 border rounded shadow-lg flex justify-center items-center">
      <div className="text-lg">{title}</div>
    </div>
  );
}
