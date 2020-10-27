import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MovieService } from './movie.service';

@Controller('movice')
export class MoviceController {
  // 한번 보고 외우두면 유용하게사용할것같음 이부분덕분에 this.moviceService를 사용할수있습니다.
  constructor(private readonly moviceService: MovieService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviceService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviceService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviceService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviceService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: object): string {
    return `hi ${movieId}`;
  }
}
