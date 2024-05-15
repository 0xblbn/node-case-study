import { Module } from '@nestjs/common';
import { MovieModule } from './movies/movie.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    MovieModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.gql'],
      path: '/graphql',
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
