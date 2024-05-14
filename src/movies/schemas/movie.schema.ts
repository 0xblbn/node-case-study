import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;
@Schema()
export class Movie {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  overview: string;

  @Prop()
  popularity: number;

  @Prop()
  voteAverage: string;

  @Prop()
  voteCount: number;

  @Prop()
  releaseDate: string;

  @Prop()
  genres: {
    id: number;
    name: string;
  }[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
