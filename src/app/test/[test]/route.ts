import { NextResponse } from "next/server";
import axios from "axios";
import { error } from "console";
//import dbConnect from "../../../../utils/dbConnect";

export async function GET(
  request: Request,
  { params }: { params: { test: string } }
) {
  try {
    const rData = (
      await axios(`https://jsonplaceholder.typicode.com/todos/${params.test}`)
    ).data;
    //await dbConnect;
    const result = await MakeResult(rData, params.test);
    return NextResponse.json(result);
  } catch (error: any) {
    console.log(error.response);
  }
}

async function MakeResult(rData: any, test: string) {
  const result = {
    userId: rData.userId,
    size: test,
  };
  return result;
}
