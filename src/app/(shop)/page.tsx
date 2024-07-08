import { getProposalArray } from "@/actions/actions-test";

export default async function Home() {
  const testActionsResponse = await getProposalArray();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Pagina de bienvenida</h1>
      <ul>
        {testActionsResponse.map(proposal => (
          <li key={proposal.id}>
            <h2 className="text-2xl font-bold">{proposal.title}</h2>
            <p className="text-lg">{proposal.description}</p>
          </li>
        ))}
      </ul>
      <p className="text-2xl font-bold">
        Variable publica: {process.env.NEXT_PUBLIC_API_URL}
      </p>
    </div>
  );
}
