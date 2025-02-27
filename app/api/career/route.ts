import career from "@/constants/career";

export async function GET() {
  return Response.json(career);
}
