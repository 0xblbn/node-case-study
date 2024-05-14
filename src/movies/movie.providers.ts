import { Mongoose } from 'mongoose';
import { MovieSchema } from './schemas/movie.schema';

export const movieProviders = [
  {
    provide: 'MOVIE_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Movie', MovieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
