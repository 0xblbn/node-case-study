import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './schemas/movie.schema';
import { NotFoundException } from '@nestjs/common';

describe('MovieController', () => {
    let movieController: MovieController;
    let movieService: MovieService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MovieController],
            providers: [
                {
                    provide: MovieService,
                    useValue: {
                        findAll: jest.fn().mockResolvedValue([
                            {
                                id: '1',
                                name: 'Interstellar',
                                overview: 'space movie',
                                popularity: 8,
                                voteAverage: '9.1',
                                voteCount: 134345,
                                releaseDate: '2021-01-01',
                                genres: [{ id: 1, name: 'sci-fi' }],
                            },
                        ]),
                        save: jest.fn().mockImplementation((movie: Movie) => movie),
                        findById: jest.fn().mockImplementation((id: string) => {
                            if (id === '3') {
                                return {
                                    id: '3',
                                    name: 'Inception',
                                    overview: 'dreams everywhere',
                                    popularity: 9,
                                    voteAverage: '9.5',
                                    voteCount: 434343,
                                    releaseDate: '2021-01-01',
                                    genres: [{ id: 3, name: 'thriller' }],
                                };
                            } else {
                                return null;
                            }
                        }),
                        removeById: jest.fn().mockImplementation((id: string) => {
                            if (id === '4') {
                                return {
                                    id: '4',
                                    name: 'The Matrix',
                                    overview: 'virtual reality',
                                    popularity: 8,
                                    voteAverage: '9.3',
                                    voteCount: 434343,
                                    releaseDate: '2021-01-01',
                                    genres: [{ id: 4, name: 'action' }],
                                };
                            } else {
                                return null;
                            }
                        }),
                    },
                },
            ],
        }).compile();

        movieController = module.get<MovieController>(MovieController);
        movieService = module.get<MovieService>(MovieService);
    });

    it('should be defined', () => {
        expect(movieController).toBeDefined();
    });

    describe('findAll', () => {
        it('should return an array of movies', async () => {
            const result: Movie[] = [
                {
                    id: '1',
                    name: 'Interstellar',
                    overview: 'space movie',
                    popularity: 8,
                    voteAverage: '9.1',
                    voteCount: 134345,
                    releaseDate: '2021-01-01',
                    genres: [{ id: 1, name: 'sci-fi' }],
                },
            ];
            expect(await movieController.findAll()).toEqual(result);
        });
    });

    describe('save', () => {
        it('should save a movie to db', async () => {
            const movie: Movie = {
                id: '2',
                name: 'Terminator',
                overview: 'guns everywhere',
                popularity: 7,
                voteAverage: '8.1',
                voteCount: 34343,
                releaseDate: '2021-01-01',
                genres: [{ id: 2, name: 'adventure' }],
            };
            expect(await movieController.save(movie)).toEqual(movie);
        });
    });

    describe('findById', () => {
        it('should find a movie by id', async () => {
            const movie: Movie = {
                id: '3',
                name: 'Inception',
                overview: 'dreams everywhere',
                popularity: 9,
                voteAverage: '9.5',
                voteCount: 434343,
                releaseDate: '2021-01-01',
                genres: [{ id: 3, name: 'thriller' }],
            };
            expect(await movieService.findById('3')).toEqual(movie);
        });
    });

    describe('removeById', () => {
        it('should remove a movie by id', async () => {
            const movie: Movie = {
                id: '4',
                name: 'The Matrix',
                overview: 'virtual reality',
                popularity: 8,
                voteAverage: '9.3',
                voteCount: 434343,
                releaseDate: '2021-01-01',
                genres: [{ id: 4, name: 'action' }],
            };
            expect(await movieController.removeById('4')).toEqual(movie);
        });
    });
});
