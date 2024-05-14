import { Body, Controller, Get, Post, Req, Param} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  

  @Post("/api/removeById/:id")
  async removeById(@Req() request: any, @Param("id") id:string): Promise<Movie> {
    return this.movieService.removeById(
      id
    );
  }

  @Post("/api/save")
  async save(@Req() request: any, @Body() movie: Movie): Promise<Movie> {
    return this.movieService.save(
      movie
    );
  }
  @Get("/api/findById/:id")
  async findById(@Req() request: any, @Param("id") id:string): Promise<Movie> {
    return this.movieService.findById(
      id
    );
      
  }
  @Get("/api/findAll")
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
  @Post("/fetch/writeDetailsToDb")
  async writeDetailsToDb(@Req() request: any): Promise<Boolean> {
    await this.movieService.writeDetailsToDb();
    return true;

  }
}
