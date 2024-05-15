import { Resolver, Query, Args } from '@nestjs/graphql';
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';

@Resolver('Movie')
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query()
  findById(@Args('id') id: string): Promise<Movie> {
    return this.movieService.findById(id);
  }
}
