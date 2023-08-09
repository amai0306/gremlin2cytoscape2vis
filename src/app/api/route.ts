import { NextResponse } from "next/server";
import { structure, process as gProcess, driver } from "gremlin";

const DriverRemoteConnection = driver.DriverRemoteConnection;
const Graph = structure.Graph;

export async function GET() {
  try {
    console.log("hello:");
    const graph = new Graph();
    const g = graph
      .traversal()
      .withRemote(new DriverRemoteConnection("ws://localhost:8182/gremlin"));

    // Sample query to fetch all vertices (modify as per your needs)
    //const vertices = await g.V().toList();
    const res: any = {};
    res.vertices = await g.V().toList();
    res.edges = await g.E().toList();
    console.log(res);
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json({ Error: err });
  }
}
