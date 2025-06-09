// export async function GET(){
//     return new Response("hello world")
// }

import { log } from "console";
import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  let movie = await req.json();
  const newMovie = { ...movie };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}
