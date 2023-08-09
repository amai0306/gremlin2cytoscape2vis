import { NextResponse } from "next/server";
import axios from "axios";

//export default function GET(){
export const getData = async () => {
  try {
    const rawdata = (
      await axios.get(
        "https://blockchain.info/rawtx/291ecb102012840545db66353d43fc90037bd22856cf8200e42cac3af2b8b64c"
      )
    ).data;
    console.log(typeof rawdata);
    return NextResponse.json(rawdata);
  } catch (error) {
    console.error(error);
  }
};
