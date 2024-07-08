const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const proposalArray = [
  {
    id: 1,
    title: "Proposal 1",
    description: "Description 1",
    status: "Pending",
  },
  {
    id: 2,
    title: "Proposal 2",
    description: "Description 2",
    status: "Pending",
  },
  {
    id: 3,
    title: "Proposal 3",
    description: "Description 3",
    status: "Pending",
  },
  {
    id: 4,
    title: "Proposal 4",
    description: "Description 4",
    status: "Pending",
  },
  {
    id: 5,
    title: "Proposal 5",
    description: "Description 5",
    status: "Pending",
  },
];

const secretValue = "my-secret-key";

export async function getProposalArray() {
  try {
    await sleep(300);
    if (secretValue !== process.env.PRIVATE_SECRET_KEY)
      throw new Error("Invalid secret key");
    return proposalArray;
  } catch (error) {
    return [];
  }
}
