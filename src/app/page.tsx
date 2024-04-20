import { GetCategory } from "@/utils/Category/getCategory";

export default async function Page() {
  const { Data, Message, Meta } = await GetCategory();

  return (
    <div>
      {Data.map((data) => (
        <ul>
          <h1>{data.Name}</h1>
          <p>{data.Description}</p>
        </ul>
      ))}
    </div>
  );
}
