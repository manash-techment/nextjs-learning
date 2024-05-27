export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    query: string;
  };
}) {
  console.log(params, searchParams);

  return <p>Customers Page</p>;
}
