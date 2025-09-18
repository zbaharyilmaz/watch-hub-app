import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";

const MovieCard = ({ movie, onRemove, onWatch }) => {
  return (
    <Card className="overflow-hidden" hover>
      <div className="relative">
        <Image
          src={movie.image}
          alt={movie.title}
          width={300}
          height={256}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          ⭐ {movie.rating}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-lg text-sm">
          {movie.year}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{movie.genre}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {movie.description}
        </p>

        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onWatch?.(movie)}
          >
            Watch Now
          </Button>
          <Button variant="danger" size="sm" onClick={() => onRemove?.(movie)}>
            ❤️
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
