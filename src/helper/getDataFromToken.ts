import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { log } from "console";

export const getDataFromTken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log("decode DATA =>>>>>", decodedToken);

    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
