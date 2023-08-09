// components/GraphVisualizer.tsx
"use client";

import React, { useRef, useEffect } from "react";
import cytoscape from "cytoscape";

export type GraphData = {
  vertices: any[];
  edges: any[];
};

interface GraphVisualizerProps {
  data: GraphData;
}

export const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ data }) => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    /**const elements = data.vertices.map((vertex: any) => ({
      data: { id: vertex.id, label: vertex.label }, // Adapt this to your data structure
    })); */
    const cytoElements = [
      ...data.vertices.map((vertex) => ({
        data: {
          id: vertex.id,
          label: vertex.label,
          properties: vertex.properties,
        }, // Adapt this based on your vertex structure
      })),
      ...data.edges.map((edge) => ({
        data: {
          id: edge.id,
          source: edge.outV.id, // Assuming your edge data has outV and inV for source and target vertices
          target: edge.inV.id,
        },
      })),
    ];

    cytoscape({
      container: container.current,
      elements: cytoElements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": "#000000",
            label: "data(label)",
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#666",
            "target-arrow-color": "#255",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],
      layout: {
        name: "grid",
      },
    });
  }, [data]);

  return <div ref={container} style={{ width: "100%", height: "400px" }}></div>;
};
