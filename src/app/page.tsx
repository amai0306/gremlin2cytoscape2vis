// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import { GraphVisualizer } from "../components/GraphVisualizer";
import { GraphData } from "../components/GraphVisualizer";

export default function Home() {
  const [data, setData] = useState<GraphData>({ vertices: [], edges: [] });
  //console.log(data);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api");
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Gremlin Server:</h1>
      <GraphVisualizer data={data} />
    </div>
  );
}
