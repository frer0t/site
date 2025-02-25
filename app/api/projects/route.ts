import projects from "@/constants/projects";
export async function GET() {
  return Response.json(projects);
}
