import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id); // also Number(id) works instead of +id
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("movie not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;

  // check if movie exists
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return new Response(JSON.stringify({ error: "movie not found" }), {
      status: 404,
    });
  }
  try {
    const updatedMovie = await req.json();
    // find index of movie
    const index = movies.findIndex((m) => m.id === movieId);
    if (!movie) {
      return new Response(JSON.stringify({ error: "movie not found" }), {
        status: 404,
      });
    }
    //update movie
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "movie not found" }), {
      status: 404,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: String } }
) {
  const { id } = params;
  const movieId = +id;

  // find movieIndex
  const index = movies.findIndex((m) => m.id === movieId);

  if (!index) {
    return new Response(JSON.stringify({ error: "movie not found" }), {
      status: 404,
    });
  }
  movies.splice(index, 1);
  return new Response(JSON.stringify("movie deleted successfully"), {
    status: 200,
  });
}
