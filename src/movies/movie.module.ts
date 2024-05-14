import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { DatabaseModule } from '../database/database.module';
import { movieProviders } from './movie.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [MovieService, ...movieProviders],
})
export class MovieModule {}
