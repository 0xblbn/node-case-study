import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Movie } from './schemas/movie.schema';
import { fetchDiscoverMovies, fetchMovieDetails } from '../fetch/data.fetch';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_MODEL') private readonly movieModel: Model<Movie>,
  ) {}
  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async save(movie: Movie): Promise<Movie> {
    return this.movieModel.create(movie);
  }

  async findById(id: string): Promise<Movie> {
    return this.movieModel.findOne({ id }).exec();
  }

  async removeById(id: string): Promise<Movie> {
    return this.movieModel.findOneAndDelete({ id }).exec();
  }

  async writeDetailsToDb(): Promise<Boolean>{
    const movies = await fetchDiscoverMovies();

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const details = await fetchMovieDetails(movie.id);
      const movieObj = {
        id: details.id,
        name: details.title,
        overview: details.overview,
        popularity: details.popularity,
        voteAverage: details.vote_average,
        voteCount: details.vote_count,
        releaseDate: details.release_date,
        genres: details.genres,
      };
      await this.save(movieObj);
    }
    return true;
  
  }
}
