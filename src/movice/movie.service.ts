import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    //+id 부분은 무엇인가?? 그것은 바로 string에서 int으로 형변환이 되기 때문입니다.
    const movie = this.movies.find(movice => movice.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: string): boolean {
    this.getOne(id);
    this.movies.filter(movie => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
