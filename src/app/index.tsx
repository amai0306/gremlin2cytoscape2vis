// pages/index.tsx

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../../api/graphData");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Gremlin Server:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
