interface MovieProps {
  params: {
    id: string;
  };
}
const MovieDetails = ({ params }: MovieProps) => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: ["Great movie!", "Mind-blowing!", "A true masterpiece."],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Amazing visual effects!",
        "Loved the soundtrack.",
        "A bit confusing but great.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
      commentsList: [
        "The best Batman movie!",
        "Heath Ledger was outstanding.",
        "Iconic movie.",
      ],
    },
  ];

  const movie = movies.find((m) => m.id === params.id);
  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      {/* movie title and desc */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>

      {/* rating and comments summary  */}
      <div>
        <div>
          <div>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
