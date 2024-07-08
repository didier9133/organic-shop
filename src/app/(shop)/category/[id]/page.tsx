import { notFound } from "next/navigation";

const idAllowed = ['bandolero' , 'cartera', 'bolso']

interface Props {
  params: {
    id: string;
  };
}

export default function({params}:Props) {
  const { id } = params;
  
  idAllowed.includes(id) || notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Categoria Page</h1>
    </div>
  );
}
